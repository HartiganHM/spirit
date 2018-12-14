import loadClinic from './loadClinic';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadClinic tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadClinic).toBeAFunction;
  });

  it('loadClinic is called with the correct params', async () => {
    const expected = [
      `/api/v1/clinics/1`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadClinic(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});