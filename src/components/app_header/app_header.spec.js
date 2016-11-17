import React from 'react';
import { mount } from 'enzyme';
import AppHeader from './app_header';

it('renders the app header', () => {
  const wrapper = mount(<AppHeader />);
  const title = wrapper.find('.app-header__title').text();
  const subTitle = wrapper.find('.app-header__sub-title').text();

  expect(title).toEqual('Pump.it');
  expect(subTitle).toEqual("I'll be your instructor");
});