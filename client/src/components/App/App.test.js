import React from 'react';
import App from './App';
import { MemoryRouter } from 'react-router';
import { shallow } from 'enzyme';

describe('App tests', () => {
  let renderedApp;
  beforeEach(() => {
    renderedApp = shallow(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
  });

  it('Renders without crashing', () => {
    expect(renderedApp).toBeDefined();
  });

  it('Should render with the correct default elements', () => {
    expect(renderedApp.find('App').length).toEqual(1);
  });
});
