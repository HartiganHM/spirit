import React from 'react';
import Modulation from './Modulation';
import { shallow } from 'enzyme';

describe('Modulation tests', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(<Modulation />);

    expect(renderedApp).toMatchSnapshot();
  });
});
