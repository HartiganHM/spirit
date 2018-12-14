import selectedConcern from './selectedConcern';
import { mockConcern } from '../../data/mockData/mockConcern';
import * as actions from '../../actions';

describe('selectedConcern reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(selectedConcern(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a selectedConcern', () => {
    const expected = mockConcern;

    expect(
      selectedConcern(undefined, actions.selectedConcernToStore(mockConcern))
    ).toEqual(expected);
  });
});
