import React from 'react';
import { mount } from 'enzyme';
import NavBar from './nav_bar';

it('renders the app header', () => {
  const wrapper = mount(<NavBar />);
  const title = wrapper.find('.nav-bar__title').text();

  expect(title).toEqual('Pump.it');
});
