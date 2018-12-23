  
import loadProcessBySession from './loadProcessBySession';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadProcessBySession tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadProcessBySession).toBeAFunction;
  });

  it('loadProcessBySession is called with the correct params', async () => {
    const expected = [
      `/api/v1/sessions/1/processes`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadProcessBySession(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});