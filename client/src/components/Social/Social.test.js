import React from 'react';
import Social from './Social';
import { shallow } from 'enzyme';

describe('Social tests', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(<Social />);

    expect(renderedApp).toMatchSnapshot();
  });
});
