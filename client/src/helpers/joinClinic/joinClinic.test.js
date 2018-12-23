  
import joinClinic from './joinClinic';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('joinClinic tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(joinClinic).toBeAFunction;
  });

  it('joinClinic is called with the correct params', async () => {
    const expected = [
      `/api/v1/users/1/join`,
      {
        method: 'PUT',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify('fjenf82d')
      }
    ];

    await joinClinic('fjenf82d', 1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});