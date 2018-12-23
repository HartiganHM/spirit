  
import postClinic from './postClinic';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';
import { mockClinicData } from '../../data/mockData/mockClinicData';

global.localStorage = {
  getItem: () => null
};

describe('postClinic tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(postClinic).toBeAFunction;
  });

  it('postClinic is called with the correct params', async () => {
    const expected = [
      `/api/v1/clinics`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(mockClinicData)
      }
    ];

    await postClinic(mockClinicData);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});