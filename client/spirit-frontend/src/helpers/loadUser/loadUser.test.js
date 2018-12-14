import apiRoot from '../apiRoot';
import loadUser from './loadUser';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadUser tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadUser).toBeAFunction;
  });

  it('loadUser is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/users/`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadUser();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});