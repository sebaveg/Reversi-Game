/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Player from '../src/components/Players';

describe('<PlayerComponent /> component', () => {
  const initialState = {
    players: {
      currentPlayer: 'white',
    },
    board: {
      present: {
        board: [],
      }
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

//   it('should render one <h2>', () => {
//     expect(wrapper.contains(<h2>seba</h2>)).toBe(true);
//   });
//   it('should render one <h3>', () => {
//     expect(wrapper.contains(<h3>Total Disks</h3>)).toBe(true);
//   });
//   it('+++ render the connected(SMART) component', () => {
//     expect(wrapper.find(Player).length).toEqual(1);
//   });

//   // it('should render one <h2>', () => {
//   //   expect(wrapper.find('h2')).toHaveLength(1);
//   // });
//   // it('should render one <h3>', () => {
//   //   expect(wrapper.find('h3')).toHaveLength(2);
//   // });
//   // it('should render one <button>', () => {
//   //   expect(wrapper.find('button')).toHaveLength(1);
//   // });
});
