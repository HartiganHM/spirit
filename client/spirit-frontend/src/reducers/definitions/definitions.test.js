import definitions from './definitions';
import { mockDefinitions } from '../../data/mockData/mockDefinitions';
import * as actions from '../../actions';

describe('Definitions reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(definitions(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with definitions', () => {
    const expected = mockDefinitions;

    expect(
      definitions(undefined, actions.definitionsToStore(mockDefinitions))
    ).toEqual(expected);
  });
});
