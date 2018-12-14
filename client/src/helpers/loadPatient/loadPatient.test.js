import loadPatient from './loadPatient';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadPatient tests', () => {
  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadPatient).toBeAFunction;
  });

  it('loadPatient is called with the correct params', async () => {
    const expected = [
      `/api/v1/patients/1`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadPatient(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});