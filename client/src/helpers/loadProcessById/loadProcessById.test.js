  
import loadProcessById from './loadProcessById';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadProcessById tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadProcessById).toBeAFunction;
  });

  it('loadProcessById is called with the correct params', async () => {
    const expected = [
      `/api/v1/processes/1`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadProcessById(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});