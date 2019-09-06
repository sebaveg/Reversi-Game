/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import StartScreen from '../src/screens/StartScreen';

const initialState = {
};

const mockStore = configureMockStore();
let store;
let container;
let wrapper;

describe('<Cell /> Container', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    container = shallow(<Provider store={store}><StartScreen /></Provider>);
  });
  it(' +++ capturing snapshot of home', () => {
    expect(container).toMatchSnapshot();
  });
});

describe('<Cell /> Container', () => {
  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><StartScreen /></Provider>);
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
  it(' +++ should render one <input>', () => {
    expect(wrapper.find('input')).toHaveLength(2);
  });
  it(' +++ should render one <button>', () => {
    expect(wrapper.find('button')).toHaveLength(1);
  });
});
