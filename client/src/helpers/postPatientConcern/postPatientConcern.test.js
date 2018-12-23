  
import postPatientConcern from './postPatientConcern';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';
import {
  mockConcernData,
  mockConcernDataWithoutPatientId
} from '../../data/mockData/mockConcernData';

global.localStorage = {
  getItem: () => null
};

describe('postPatientConcern tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(postPatientConcern).toBeAFunction;
  });

  it('postPatientConcern is called with the correct params', async () => {
    const expected = [
      `/api/v1/patients/1/primary-concerns`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mockConcernDataWithoutPatientId)
      }
    ];

    await postPatientConcern(mockConcernData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});