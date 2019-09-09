/* eslint-disable no-undef */
import React from 'react';
import Board from '../src/components/Board';

// let wrapper;
// beforeEach(() => {
//   wrapper = shallow(<GameScreen />);
// });

const wrapper = shallow(
  <Board />,
);

describe('<Board /> Component', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render one <table>', () => {
    expect(wrapper.find('table')).toHaveLength(1);
  });
  it('set prop board should be render 64 cells', () => {
    const board = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    for (let i = 0; i < 8; i += 1) {
      board[i] = ['1', '2', '3', '4', '5', '6', '7', '8'].map((row) => ({
        id: row + board[i],
        disk: null, // white or black
        allowedCell: false, // says if enable or disable click for put disk
      }));
    }
    wrapper.setProps({ board });
    expect(wrapper.find('table')).toHaveLength(1);
    expect(wrapper.find('tbody')).toHaveLength(1);
    expect(wrapper.find('tr')).toHaveLength(8);
    // expect(wrapper.find('td')).toHaveLength(64);
  });
});
