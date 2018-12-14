import React from 'react';
import Sensory from './Sensory';
import { shallow } from 'enzyme';

describe('Sensory tests', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(<Sensory />);

    expect(renderedApp).toMatchSnapshot();
  });
});
