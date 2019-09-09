/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import Cell from '../src/components/Cell';

const setUp = (props = {}) => {
  const component = shallow(<Cell {...props}>ID</Cell>);
  return component;
};

const clickFn = jest.fn();

describe('<Cell /> Component', () => {
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        disk: 'black',
        allowed: [0, 0],
        onClick: clickFn,
      };
      wrapper = setUp(props);
    });

    it('renders correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render one <td>', () => {
      const component = wrapper.find('td');
      expect(component.length).toBe(1);
    });

    it('should render one <div>', () => {
      const component = wrapper.find('div');
      expect(component.length).toBe(1);
    });

    // This can do better
    it('Simulate event onClick', () => {
      wrapper.find('td').simulate('click');
      expect(clickFn).toHaveBeenCalled();
    });
  });

  describe('Have Other props', () => {
    let wrapper;

    it('should render one <td> disk WHITE', () => {
      const props = {
        disk: 'white',
        allowed: [0, 0],
        onClick: clickFn,
      };
      wrapper = setUp(props);
      const component = wrapper.find('td');
      expect(component.length).toBe(1);
    });

    it('should render one <td> disk NULL', () => {
      const props = {
        disk: null,
        allowed: [0, 0],
        onClick: clickFn,
      };
      wrapper = setUp(props);
      const component = wrapper.find('td');
      expect(component.length).toBe(1);
    });

    it('should render one <td> allowed NULL', () => {
      const props = {
        disk: null,
        allowed: [],
        onClick: clickFn,
      };
      wrapper = setUp(props);
      const component = wrapper.find('td');
      expect(component.length).toBe(1);
    });
  });
});
