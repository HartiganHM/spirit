import loadPatientConcerns from './loadPatientConcerns';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadPatientConcerns', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadPatientConcerns).toBeAFunction;
  });

  it('loadPatientConcerns is called with the correct params', async () => {
    const expected = [
      `/api/v1/patients/1/primary-concerns`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadPatientConcerns(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});