import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Main from '../../src/components/Main';

describe('<Main />', () => {
  const wrapper = shallow(<Main />, { context: {} })

  it('should match snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})