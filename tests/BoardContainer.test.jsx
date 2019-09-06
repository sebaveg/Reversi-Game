/* eslint-disable no-undef */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Board from '../src/containers/Board';

const initialState = {
  error: '',
  board: {
    past: [],
    present: {
      board: [], // Array 2D
    },
    future: [],
  },
  disks: {
    present: {
      posDisksWhite: [],
      posDisksBlack: [],
    },
  },
  players: {
    currentPlayer: 'white',
  },
};

const mockStore = configureMockStore();
let store;
let container;

describe(' Snapshoot --- <Board /> Container', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Provider store={store}><Board /></Provider>);
  });
  it(' +++ capturing snapshot of home', () => {
    expect(container).toMatchSnapshot();
  });
});

describe('<Board /> rendering', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Board store={store} />);
  });
  it('+++ <Board /> Container', () => {
    expect(container.length).toEqual(1);
  });

  it('+++ check prop matches with initialState', () => {
    // expect(container.prop('board')).toEqual(initialState.board.present.board);
    expect(container.prop('posDiskWhite')).toEqual(initialState.posDiskWhite);
    expect(container.prop('posDiskBlack')).toEqual(initialState.posDiskBlack);
    expect(container.prop('currentPlayer')).toEqual(initialState.currentPlayer);
  });
});
