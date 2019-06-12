import React from 'react';
import { shallow } from 'enzyme';

import CircleContainer from './';
import Circle from './Circle';

describe('<Circle />', () => {
  it('should render without crashing', () => {
    const wrapper = shallow(<Circle />);

    expect(wrapper).toMatchSnapshot();
  });
});

describe('<CircleContainer />', () => {
  it('should toggle x on click', () => {
    const wrapper = shallow(<CircleContainer />);

    expect(wrapper.props().x).toBe(15);

    wrapper.simulate('click');

    expect(wrapper.props().x).toBe(300);
  });
});
