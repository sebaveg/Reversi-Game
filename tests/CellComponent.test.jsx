/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import Cell from '../src/components/Cell';

const setUp = (props = {}) => {
  const component = shallow(<Cell {...props} />);
  return component;
};

describe('<Cell /> Component', () => {
  describe('Have props', () => {
    let wrapper;

    beforeEach(() => {
      const props = {
        disk: 'black',
        allowed: [0, 0],
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

    describe('Have NO props', () => {
      let wrapper;

      beforeEach(() => {
        wrapper = setUp();
      });
    });
  });
});
