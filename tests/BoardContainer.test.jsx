/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Board from '../src/containers/Board';

const mockStore = configureMockStore();
const store = mockStore({});

// let wrapper;
// beforeEach(() => {
//   wrapper = shallow(<GameScreen />);
// });

const wrapper = shallow(
  <Provider store={store}>
    <Board />
  </Provider>,
);

describe('<GameScreen /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
