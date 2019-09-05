/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-undef */
import React from 'react';
import Cell from '../src/components/Cell';

function createTestProps(props) {
  return {
    disk: 'black',
    allowed: [],
    ...props,
  };
}

let wrapper;
let props;

beforeEach(() => {
  props = createTestProps();
  wrapper = shallow(<Cell {...props} />);
});

wrapper = shallow(
  <Cell diks="black" allowed={[]}>ID</Cell>,
);

describe('<GameScreen /> rendering', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render one <td>', () => {
    expect(wrapper.find('td')).toHaveLength(1);
  });
  it('should render one <div>', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
});
