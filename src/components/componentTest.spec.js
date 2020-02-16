import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import AutoComplete from './Autocomplete';

describe('<App />', () => {
  it('should render successful', () => {
    const wrapper = shallow(<App />);
    const actual = wrapper.find('.background').exists();
    const expected = true;

    expect(actual).toEqual(expected);
  });
});

describe('<AutoComplete />', () => {
  it('should render successful', () => {
    const wrapper = shallow(<AutoComplete />);
    const actual = wrapper.find('.autocomplete input').exists();
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
