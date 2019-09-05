/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Cell from '../src/containers/Cell';

const mockStore = configureMockStore();
const store = mockStore({});

// let wrapper;
// beforeEach(() => {
//   wrapper = shallow(<GameScreen />);
// });

const wrapper = shallow(
  <Provider store={store}>
    <Cell />
  </Provider>,
);

describe('<GameScreen /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
