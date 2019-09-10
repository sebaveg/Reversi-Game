/* eslint-disable no-undef */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import GameScreen from '../src/screens/GameScreen';

import Players from '../src/components/Players';

const historyMock = { push: jest.fn() }; // for this.props.history.push

const initialState = {
  game: {
    error: '',
    allowedCells: 0,
  },
  disks: {
    past: [],
    present: {
      posDisksWhite: [
        [3, 3],
        [4, 4],
      ],
      posDisksBlack: [
        [3, 4],
        [4, 4],
      ],
      posDisks: [],
    },
    future: [],
  },
  players: {
    playerOne: {
      name: 'Player One',
      colorDisk: 'white',
      totalDisk: 10,
    },
    playerTwo: {
      name: 'Player Two',
      colorDisk: 'black',
      totalDisk: 2,
    },
  },
};

const mockStore = configureMockStore();
const store = mockStore(initialState);

const setUp = (props = {}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const component = shallow(<GameScreen store={store} {...props} />).childAt(0).dive();
  return component;
};

describe('<GameScreen /> Container', () => {
  let wrapper;
  const props = {
    history: historyMock,
  };
  beforeEach(() => {
    wrapper = setUp(props);
  });

  it(' +++ capturing snapshot of GameScreen', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one <section>', () => {
    const component = wrapper.find('section');
    expect(component.length).toBe(1);
  });

  it('should render one <div>', () => {
    const component = wrapper.find('div');
    expect(component.length).toBe(4);
  });

  it('should render one <Players /> components', () => {
    const component = wrapper.find(Players);
    expect(component.length).toBe(2);
  });

  it('should render one <h2>', () => {
    const component = wrapper.find('h2');
    expect(component.length).toBe(1);
  });

  it('should render one <table>', () => {
    const component = wrapper.find('table');
    expect(component.length).toBe(1);
  });

  it('<GameScreen /> Container', () => {
    const componentInstance = wrapper.instance();
    componentInstance.componentDidUpdate();
  });
});
