import apiRoot from '../apiRoot';
import loadSessionsForComparison from './loadSessionsForComparison';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadSessionsForComparison tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadSessionsForComparison).toBeAFunction;
  });

  it('loadSessionsForComparison is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/therapy-goals/compare`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idArray: [1, 2, 3] })
      }
    ];

    await loadSessionsForComparison([1, 2, 3]);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});