import React from 'react';
import { GoalsChart, mapStateToProps } from './GoalsChart';
import { shallow } from 'enzyme';
import { mockComparisonData } from '../../data/mockData/mockComparisonData';

describe('GoalsChart tests', () => {
  let comparisonData;
  let renderedGoalsChart;

  beforeEach(() => {
    comparisonData = mockComparisonData;

    renderedGoalsChart = shallow(
      <GoalsChart comparisonData={comparisonData} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedGoalsChart).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull comparisonData from store', () => {
    const comparisonData = mockComparisonData;
    const mockStore = { comparisonData };
    const result = mapStateToProps(mockStore);

    expect(result.comparisonData).toEqual(mockStore.comparisonData);
  });
});
