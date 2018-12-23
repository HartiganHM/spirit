/*eslint-disable camelcase*/

  
import postPatient from './postPatient';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('postPatient tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(postPatient).toBeAFunction;
  });

  it('postPatient is called with the correct params', async () => {
    const expected = [
      `/api/v1/users/1/patients`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ abstracted_name: 'fwdiw46' })
      }
    ];

    await postPatient('fwdiw46', 1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});