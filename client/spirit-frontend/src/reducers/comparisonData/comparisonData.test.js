import comparisonData from './comparisonData';
import { mockComparisonData } from '../../data/mockData/mockComparisonData';
import * as actions from '../../actions';

describe('comparisonData reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(comparisonData(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with comparisonData', () => {
    const expected = mockComparisonData;

    expect(
      comparisonData(
        undefined,
        actions.comparisonDataToStore(mockComparisonData)
      )
    ).toEqual(expected);
  });
});
