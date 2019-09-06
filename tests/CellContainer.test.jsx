/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Cell from '../src/containers/Cell';

const initialState = {
  error: '',
  board: {
    past: [],
    present: {
      board: [], // Array 2D
    },
    future: [],
  },
  players: {
    currentPlayer: 'white',
  },
};

const mockStore = configureMockStore();
let store;
let container;

describe('<Cell /> Container', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Provider store={store}><Cell /></Provider>);
  });
  it(' +++ capturing snapshot of home', () => {
    expect(container).toMatchSnapshot();
  });
});
