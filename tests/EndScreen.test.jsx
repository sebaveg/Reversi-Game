/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import EndScreen from '../src/screens/EndScreen';

const initialState = {
  game: {
    winner: 'Seba',
  },
};

const mockStore = configureMockStore();
let store;
let container;
let wrapper;

describe('<Cell /> Container', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Provider store={store}><EndScreen /></Provider>);
  });
  it(' +++ capturing snapshot of home', () => {
    expect(container).toMatchSnapshot();
  });
});

// describe('<EndScreen /> Container', () => {
//   beforeEach(() => {
//     store = mockStore(initialState);
//     wrapper = mount(<Provider store={store}><EndScreen /></Provider>);
//   });
//   it(' +++ should render one <main>', () => {
//     expect(wrapper.find('main')).toHaveLength(1);
//   });
//   it(' +++ should render one <h3>', () => {
//     expect(wrapper.find('h3')).toHaveLength(1);
//   });
//   it(' +++ should render one <h1>', () => {
//     expect(wrapper.find('h1')).toHaveLength(1);
//   });
//   it(' +++ should render one <button>', () => {
//     expect(wrapper.find('button')).toHaveLength(1);
//   });
// });
