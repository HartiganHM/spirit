import React from 'react';
import { SessionsComparison, mapStateToProps } from './SessionsComparison';
import { shallow } from 'enzyme';
import { mockProcessesData } from '../../data/mockData/mockProcessesData';

describe('SessionsComparison tests', () => {
  let processesData;
  let renderedSessionsComparison;

  beforeEach(() => {
    processesData = mockProcessesData;

    renderedSessionsComparison = shallow(
      <SessionsComparison processesData={processesData} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedSessionsComparison).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull processesData from store', () => {
    const processesData = mockProcessesData;
    const mockStore = { processesData };
    const result = mapStateToProps(mockStore);

    expect(result.processesData).toEqual(mockStore.processesData);
  });
});
