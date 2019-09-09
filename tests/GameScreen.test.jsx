/* eslint-disable no-undef */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import GameScreen from '../src/screens/GameScreen';

import Players from '../src/components/Players';

const initialState = {
  game: {
    error: '',
    allowedCells: '',
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
    playerOne: '',
    playerTwo: '',
  },
};

const mockStore = configureMockStore();

describe('<GameScreen /> Container', () => {
  let wrapper;
  beforeEach(() => {
    const store = mockStore(initialState);
    wrapper = shallow(<GameScreen store={store} />).childAt(0).dive();
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
});
