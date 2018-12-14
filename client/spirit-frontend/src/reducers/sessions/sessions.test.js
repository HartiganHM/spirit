import sessions from './sessions';
import { mockSession } from '../../data/mockData/mockSession';
import * as actions from '../../actions';

describe('Sessions reducer tests', () => {
  it('Should return store by default', () => {
    const expected = [];

    expect(sessions(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with sessions', () => {
    const expected = mockSession;

    expect(
      sessions(undefined, actions.sessionsArrayToStore(mockSession))
    ).toEqual(expected);
  });
});
