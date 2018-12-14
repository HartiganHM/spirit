import React from 'react';
import { Sessions, mapStateToProps, mapDispatchToProps } from './Sessions';
import { shallow } from 'enzyme';
import { mockConcern } from '../../data/mockData/mockConcern';
import { mockSession } from '../../data/mockData/mockSession';
import { mockComparisonData } from '../../data/mockData/mockComparisonData';

describe('Sessions tests', () => {
  let selectedConcern;
  let sessions;
  let createSession;
  let getSession;
  let compareSessionData;
  let comparisonData;
  let wipeStoreFromSessions;
  let renderedSessions;

  beforeEach(() => {
    selectedConcern = mockConcern;
    sessions = [mockSession];
    createSession = jest.fn();
    getSession = jest.fn();
    compareSessionData = jest.fn();
    comparisonData = mockComparisonData;
    wipeStoreFromSessions = jest.fn();

    renderedSessions = shallow(
      <Sessions
        selectedConcern={selectedConcern}
        sessions={sessions}
        createSession={createSession}
        getSession={getSession}
        compareSessionData={compareSessionData}
        comparisonData={comparisonData}
        wipeStoreFromSessions={wipeStoreFromSessions}
      />);
  });

  it('Should match the snapshot', () => {
    expect(renderedSessions).toMatchSnapshot();
  });

  it('should set state with an array when toggleCheckBox is called', () => {
    renderedSessions.instance().toggleCheckBox(1);
    
    expect(renderedSessions.state('checkedIds')).toEqual([1]);

    renderedSessions.instance().toggleCheckBox(1);

    expect(renderedSessions.state('checkedIds')).toEqual([]);

    renderedSessions.instance().toggleCheckBox(1);
    renderedSessions.instance().toggleCheckBox(2);

    expect(renderedSessions.state('checkedIds')).toEqual([1, 2]);
  });

  it('checkedStatus should return true or false depending on state array', () => {
    expect(renderedSessions.instance().checkedStatus(1)).toEqual(false);

    renderedSessions.instance().toggleCheckBox(1);

    expect(renderedSessions.instance().checkedStatus(1)).toEqual(true);
  });
});

describe('mapStateToPropsTests', () => {
  it('Should pull comparisonData, selectedConcern, and sessions from store', () => {
    const comparisonData = mockComparisonData;
    const selectedConcern = mockConcern;
    const sessions = [mockSession];
    const mockStore = { comparisonData, selectedConcern, sessions };
    const result = mapStateToProps(mockStore);

    expect(result.comparisonData).toEqual(mockStore.comparisonData);
    expect(result.selectedConcern).toEqual(mockStore.selectedConcern);
    expect(result.sessions).toEqual(mockStore.sessions);
  });
});

describe('mapDispatchToProps', () => {
  it('Should call dispatch when createSession is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = 5;
    const result = mapDispatchToProps(mockDispatch);

    result.createSession(mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when getSession is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = 5;
    const result = mapDispatchToProps(mockDispatch);

    result.getSession(mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when compareSessionData is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [5, 3];
    const result = mapDispatchToProps(mockDispatch);

    result.compareSessionData(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when wipeStoreFromSessions is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.wipeStoreFromSessions();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
