import loadTherapyGoalBySession from './loadTherapyGoalBySession';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadTherapyGoalBySession tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadTherapyGoalBySession).toBeAFunction;
  });

  it('loadTherapyGoalBySession is called with the correct params', async () => {
    const expected = [
      `/api/v1/sessions/1/therapy-goals`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadTherapyGoalBySession(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});