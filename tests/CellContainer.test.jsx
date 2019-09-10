/* eslint-disable no-undef */
import React from 'react';
import configureMockStore from 'redux-mock-store';

import Cell from '../src/containers/Cell';

import CellLayout from '../src/components/Cell';

const initialState = {
  error: '',
  board: {
    past: [],
    present: {
      board: [
        [{ id: 'A1', allowedCell: [{ X: 1, Y: 1 }] }, { id: 'A2' }, { id: 'A3' }, { id: 'A4' }, { id: 'A5' }, { id: 'A6' }, { id: 'A7' }, { id: 'A8' }],
        [{ id: 'B1' }, { id: 'B2', allowedCell: [{ X: 2, Y: 2 }] }, { id: 'B3' }, { id: 'B4' }, { id: 'B5' }, { id: 'B6' }, { id: 'B7' }, { id: 'B8' }],
        [{ id: 'C1' }, { id: 'C2' }, { id: 'C3' }, { id: 'C4' }, { id: 'C5' }, { id: 'C6' }, { id: 'C7' }, { id: 'C8' }],
        [{ id: 'D1' }, { id: 'D2' }, { id: 'D3' }, { id: 'D4' }, { id: 'D5' }, { id: 'D6' }, { id: 'D7' }, { id: 'D8' }],
        [{ id: 'E1' }, { id: 'E2' }, { id: 'E3' }, { id: 'E4' }, { id: 'E5' }, { id: 'E6' }, { id: 'E7' }, { id: 'E8' }],
        [{ id: 'F1' }, { id: 'F2' }, { id: 'F3' }, { id: 'F4' }, { id: 'F5' }, { id: 'F6' }, { id: 'F7' }, { id: 'F8' }],
        [{ id: 'G1' }, { id: 'G2' }, { id: 'G3' }, { id: 'G4' }, { id: 'G5' }, { id: 'G6' }, { id: 'G7' }, { id: 'G8' }],
        [{ id: 'H1' }, { id: 'H2' }, { id: 'H3' }, { id: 'H4' }, { id: 'H5' }, { id: 'H6' }, { id: 'H7' }, { id: 'H8' }],
      ],
      currentPlayer: 'black', // Array 2D
    },
    future: [],
  },
};

const mockStore = configureMockStore();
const store = mockStore(initialState);

const setUp = (props = {}) => {
  // eslint-disable-next-line react/jsx-props-no-spreading
  const component = shallow(<Cell store={store} {...props} />).childAt(0).dive();
  return component;
};

describe('<Cell /> Container', () => {
  let wrapper;
  describe('<Cell /> Container without allowed cells', () => {
    const props = {
      disk: 'white',
      allowed: [],
      position: [0, 0],
      onClick: jest.fn(),
    };
    beforeEach(() => {
      wrapper = setUp(props);
    });

    it(' +++ capturing snapshot of home', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('should render one <CellLayout /> component', () => {
      const component = wrapper.find(CellLayout);
      expect(component.length).toBe(1);
    });

    it('Props in <CellLayout /> component', () => {
      const props = {
        disk: 'white',
        allowed: [[0, 0]],
        onClick: jest.fn(),
      };
      const component = wrapper.find(CellLayout);
      expect(component.props().disk).toBe(props.disk);
      // expect(component.props().allowed).toBe(props.allowed);
    });

    it('Event onClick <CellLayout /> dispatches the correct actions', () => {
      wrapper.instance().reverse();
      const actions = store.getActions();
      expect(actions).toEqual([{
        type: 'set_error',
        payload: 'No can put your disk here',
      }]);
      // expect(actions.setError.mock.calls.length).toBe(0);
      // expect(props.setPosDisksWhite).toHaveBeenCalled();
      // expect(actions.setPosDisksWhite.mock.calls.length).toBe(0);
    });
  });

  describe('<Cell /> Container With allowed cells Disk WHITE', () => {
    const props = {
      disk: 'white',
      allowed: [[1, 1]],
      position: [1, 1],
      onClick: jest.fn(),
    };
    beforeEach(() => {
      wrapper = setUp(props);
    });
    it('Event onClick <CellLayout /> dispatches the correct actions', () => {
      wrapper.instance().reverse();
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          payload: 'No can put your disk here',
          type: 'set_error',
        }, {
          payload: {
            disk: 'black',
            x: 2,
            y: 2,
          },
          type: 'put_disks',
        }, {
          payload: [1, 1],
          type: 'set_position_disk_black',
        }, {
          payload: {
            color: 'black',
            pos: [1, 1],
          },
          type: 'set_position_disk',
        }, {
          type: 'change_turn',
        },
      ]);
    });
  });

  describe('<Cell /> Container With allowed cells Disk BLACK', () => {
    const props = {
      disk: 'black',
      allowed: [[0, 0]],
      position: [0, 0],
      onClick: jest.fn(),
    };
    beforeEach(() => {
      wrapper = setUp(props);
    });
    it('Event onClick <CellLayout /> dispatches the correct actions', () => {
      wrapper.instance().reverse();
      const actions = store.getActions();
      expect(actions).toEqual([
        {
          type: 'set_error',
          payload: 'No can put your disk here',
        },
        {
          payload: {
            disk: 'black',
            x: 2,
            y: 2,
          },
          type: 'put_disks',
        },
        {
          payload: [1, 1],
          type: 'set_position_disk_black',
        },
        {
          payload: {
            color: 'black',
            pos: [1, 1],
          },
          type: 'set_position_disk',
        },
        {
          type: 'change_turn',
        },
        {
          payload: {
            disk: 'black',
            x: 1,
            y: 1,
          },
          type: 'put_disks',
        },
        {
          payload: [0, 0],
          type: 'set_position_disk_black',
        },
        {
          payload: {
            color: 'black',
            pos: [0, 0],
          },
          type: 'set_position_disk',
        },
        {
          type: 'change_turn',
        },

      ]);
    });
  });
});
