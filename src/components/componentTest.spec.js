import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {
  it('should render successful', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find('.background').exists();
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
