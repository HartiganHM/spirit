import React from 'react';
import Executive from './Executive';
import { shallow } from 'enzyme';

describe('Executive tests', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(<Executive />);

    expect(renderedApp).toMatchSnapshot();
  });
});
