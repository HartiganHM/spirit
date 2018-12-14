import React from 'react';
import { Routes, mapDispatchToProps } from './Routes';
import { shallow } from 'enzyme';

describe('Routes tests', () => {
  let getUser;
  let getDefinitions;
  let renderedRoutes;

  beforeEach(() => {
    getUser = jest.fn();
    getDefinitions = jest.fn();

    renderedRoutes = shallow(
      <Routes getUser={getUser} getDefinitions={getDefinitions} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedRoutes).toMatchSnapshot();
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getUser is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.getUser();
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when getDefinitions is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.getDefinitions();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
