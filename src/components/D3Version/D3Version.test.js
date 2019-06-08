import React from 'react';
import { shallow } from 'enzyme';
import D3Version from './D3Version';

it('renders without crashing', () => {
  const wrapper = shallow(<D3Version />);

  expect(wrapper).toMatchSnapshot();
});
