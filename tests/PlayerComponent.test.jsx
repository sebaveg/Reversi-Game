/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Player from '../src/components/Players';

// const setUp = (props = {}) => {
//   const component = shallow(<Provider store={store}><Player {...props} /></Provider>);
//   return component;
// };

describe('<PlayerComponent /> Component', () => {
//   let component;

  //   beforeEach(() => {
  //     component = setUp();
  //   });

  //   it('Should render without errors', () => {
  //     const wrapper = component.find('.wrapperPlayers');
  //     expect(wrapper.length).toBe(1);
  //   });

  const initialState = {
    board: {
      present: {
        board: [],
        currentPlayer: 'white',
      },
    },
  };
  const mockStore = configureMockStore();
  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><Player color="white" name="seba" /></Provider>);
  });

  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render one <h2>', () => {
    expect(wrapper.contains(<h2>seba</h2>)).toBe(true);
  });
  it('should render one <h3>', () => {
    expect(wrapper.contains(<h3>Total Disks</h3>)).toBe(true);
  });
  it('+++ render the connected(SMART) component', () => {
    expect(wrapper.find(Player).length).toEqual(1);
  });

  // it('should render one <h2>', () => {
  //   expect(wrapper.find('h2')).toHaveLength(1);
  // });
  // it('should render one <h3>', () => {
  //   expect(wrapper.find('h3')).toHaveLength(2);
  // });
  // it('should render one <button>', () => {
  //   expect(wrapper.find('button')).toHaveLength(1);
  // });
});
