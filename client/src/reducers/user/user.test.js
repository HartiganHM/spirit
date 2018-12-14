import user from './user';
import { mockUserData } from '../../data/mockData/mockUserData';
import * as actions from '../../actions';

describe('User reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(user(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a user', () => {
    const expected = mockUserData;

    expect(user(undefined, actions.userToStore(mockUserData))).toEqual(expected);
  });
});
