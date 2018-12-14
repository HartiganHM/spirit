import loadSession from './loadSession';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadSession tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadSession).toBeAFunction;
  });

  it('loadSession is called with the correct params', async () => {
    const expected = [
      `/api/v1/sessions/1`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadSession(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});