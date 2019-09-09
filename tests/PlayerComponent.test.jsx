/* eslint-disable no-undef */
import React from 'react';
import configureMockStore from 'redux-mock-store';
import Player from '../src/components/Players';

const initialState = {
  board: {
    present: {
      board: [],
      currentPlayer: 'white',
    },
  },
};

const mockStore = configureMockStore();

const setUp = (props = {}) => {
  const store = mockStore(initialState);
  const component = shallow(<Player store={store} {...props} />).childAt(0).dive();
  return component;
};

describe('<Player /> Component', () => {
  let wrapper;
  describe('<Player /> Component', () => {
    beforeEach(() => {
      const props = {
        name: 'Seba',
        color: 'white',
        total: 10,
      };
      wrapper = setUp(props);
    });

    it(' +++ capturing snapshot of player +++', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render one <h2>', () => {
      expect(wrapper.contains(<h2>Seba</h2>)).toBe(true);
    });
    it('should render one <h3>', () => {
      expect(wrapper.contains(<h3>Total Disks</h3>)).toBe(true);
    });
    it('should render one <div>', () => {
      const component = wrapper.find('.wrapperPlayers');
      expect(component.length).toBe(1);
    });
    it('should render one <h3>', () => {
      const component = wrapper.find('h3');
      expect(component.length).toBe(2);
    });
    it('should render one <button>', () => {
      const component = wrapper.find('button');
      expect(component.length).toBe(1);
    });

    // it('Simulate event onClick', () => {
    //   const clickFn = jest.fn();
    //   wrapper.find('button').simulate('click');
    //   expect(clickFn).toHaveBeenCalled();
    // });
  });
  describe('<Player /> Component', () => {
    beforeEach(() => {
      const props = {
        name: 'Oponente',
        color: 'black',
        total: 3,
      };
      wrapper = setUp(props);
    });
    it('should render one <h3>', () => {
      const component = wrapper.find('h3');
      expect(component.length).toBe(1);
    });
    it('should render one <button>', () => {
      const component = wrapper.find('button');
      expect(component.length).toBe(0);
    });
  });
});
