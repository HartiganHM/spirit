import selectedSession from './selectedSession';
import { mockSession } from '../../data/mockData/mockSession';
import * as actions from '../../actions';

describe('selectedSession reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(selectedSession(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a selectedSession', () => {
    const expected = mockSession;

    expect(
      selectedSession(undefined, actions.selectedSessionToStore(mockSession))
    ).toEqual(expected);
  });
});
