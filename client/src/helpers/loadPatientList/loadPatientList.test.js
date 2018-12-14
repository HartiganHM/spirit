import apiRoot from '../apiRoot';
import loadPatientList from './loadPatientList';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadPatientList tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadPatientList).toBeAFunction;
  });

  it('loadPatientList is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/users/1/patients`,
      {
        method: 'GET', 
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadPatientList(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});