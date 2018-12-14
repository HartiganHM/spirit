/*eslint-disable max-len*/

import React from 'react';
import { ConcernRow, mapDispatchToProps } from './ConcernRow';
import { shallow } from 'enzyme';

describe('ConcernRow tests', () => {
  let renderedConcernRow;
  let mockGetConcern;

  beforeEach(() => {
    mockGetConcern = jest.fn();

    renderedConcernRow = shallow(<ConcernRow getConcern={mockGetConcern} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedConcernRow).toMatchSnapshot();
  });

  it('should set state when selectEnter is called', () => {
    expect(renderedConcernRow.state('hover')).toEqual(false);
    renderedConcernRow.instance().selectEnter();

    expect(renderedConcernRow.state('hover')).toEqual(true);
  });

  it('should set state when selectLeave is called', () => {
    expect(renderedConcernRow.state('hover')).toEqual(false);
    renderedConcernRow.instance().selectEnter();

    expect(renderedConcernRow.state('hover')).toEqual(true);
    renderedConcernRow.instance().selectLeave();

    expect(renderedConcernRow.state('hover')).toEqual(false);
  });

  it('determineDomainClass should return "domains" if domain value is false', () => {
    expect(renderedConcernRow.instance().determineDomainClass(false, false)).toEqual('domains');
  });

  it('determineDomainClass should return "domains domains-true" if domain value is true', () => {
    expect(renderedConcernRow.instance()
      .determineDomainClass(true, false))
      .toEqual('domains domains-true');
  });

  it('determineDomainClass should return "domains domains-true domains-hover" if domains and hover values are true', () => {
    expect(renderedConcernRow.instance()
      .determineDomainClass(true, true))
      .toEqual('domains domains-true domains-hover');
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getConcern is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = 5;
    const result = mapDispatchToProps(mockDispatch);

    result.getConcern(mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
