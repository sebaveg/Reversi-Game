/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import GameScreen from '../src/screens/GameScreen';

const initialState = {
  game: {
    error: '',
    allowedCells: '',
  },
  players: {
    playerOne: '',
    playerTwo: '',
  },
};

const mockStore = configureMockStore();
let store;
let container;
let wrapper;

describe('<GameScreen /> Container', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Provider store={store}><GameScreen /></Provider>);
  });
  it(' +++ capturing snapshot of home', () => {
    expect(container).toMatchSnapshot();
  });
});

// describe('<GameScreen /> Container', () => {
//   beforeEach(() => {
//     store = mockStore(initialState);
//     wrapper = mount(<Provider store={store}><GameScreen /></Provider>);
//   });
//   it(' +++ should render one <section>', () => {
//     expect(wrapper.find('section')).toHaveLength(1);
//   });
//   it(' +++ should render one <div>', () => {
//     expect(wrapper.find('div')).toHaveLength(3);
//   });
// });
