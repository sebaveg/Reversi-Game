/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import Cell from '../src/components/Cell';

const setUp = (props = {}) => {
  const component = shallow(<Cell {...props}>ID</Cell>);
  return component;
};

describe('<Cell /> Component', () => {
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        disk: 'black',
        allowed: [0, 0],
        onClick: jest.fn(),
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
      const event = wrapper.find('td').simulate('click');
      expect(event.type()).toEqual('td');
    });

    describe('Have NO props', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = setUp();
      });
    });
  });
});
