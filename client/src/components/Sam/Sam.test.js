import React from 'react';
import Sam from './Sam';
import { shallow } from 'enzyme';

describe('Sam tests', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(<Sam />);

    expect(renderedApp).toMatchSnapshot();
  });
});
