/* eslint-disable no-undef */
import React from 'react';
import configureMockStore from 'redux-mock-store';

import StartScreen from '../src/screens/StartScreen';

jest.mock('react-redux');

const initialState = {
};

const mockStore = configureMockStore();
let store;
let wrapper;

describe('<StartScreen /> Container', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = shallow(<StartScreen store={store} />);
  });

  it(' +++ capturing snapshot of home', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it(' +++ should render one <section>', () => {
    expect(wrapper.find('section')).toHaveLength(1);
  });
  it(' +++ should render one <h5>', () => {
    expect(wrapper.find('h5')).toHaveLength(1);
  });
  it(' +++ should render one <form>', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });
  it(' +++ should render one <div>', () => {
    expect(wrapper.find('div')).toHaveLength(2);
  });
  it(' +++ should render one <h2>', () => {
    expect(wrapper.find('h2')).toHaveLength(2);
  });
  it(' +++ should render one <input name="namePlayerOne">', () => {
    expect(wrapper.find('input[name="namePlayerOne"]')).toHaveLength(1);
  });
  it(' +++ should render one <input name="namePlayerTwo">', () => {
    expect(wrapper.find('input[name="namePlayerTwo"]')).toHaveLength(1);
  });
  it(' +++ should render one <button>', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});

describe('<StartScreen /> Container Events', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<StartScreen store={store} />);
  });
  it('User insert name player One', () => {
    wrapper.find('input[name="namePlayerOne"]').simulate('change', { target: { value: 'Player One' } });
    expect(wrapper.find('input[name="namePlayerOne"]').prop('value')).toEqual('');
  });
  it('User insert name player Two', () => {
    wrapper.find('input[name="namePlayerTwo"]').simulate('change', { target: { value: 'Player Two' } });
    expect(wrapper.find('input[name="namePlayerTwo"]').prop('value')).toEqual('');
  });
  it('Form submit', () => {
    wrapper.find('button').simulate('click', {
      preventDefault: () => {},
    });
  });
});
