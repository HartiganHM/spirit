import loadPatientConcernById from './loadPatientConcernById';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadPatientConcernById tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadPatientConcernById).toBeAFunction;
  });

  it('loadPatientConcernById is called with the correct params', async () => {
    const expected = [
      `/api/v1/primary-concerns/1`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadPatientConcernById(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});