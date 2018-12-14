import loadProcessesForComparison from './loadProcessesForComparison';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadProcessesForComparison tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadProcessesForComparison).toBeAFunction;
  });

  it('loadProcessesForComparison is called with the correct params', async () => {
    const expected = [
      `/api/v1/processes/compare`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ idArray: [1, 2, 3] })
      }
    ];

    await loadProcessesForComparison([1, 2, 3]);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});