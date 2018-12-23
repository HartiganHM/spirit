  
import updateSessionStatus from './updateSessionStatus';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('updateSessionStatus tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(updateSessionStatus).toBeAFunction;
  });

  it('updateSessionStatus is called with the correct params', async () => {
    const expected = [
      `/api/v1/sessions/1`,
      {
        method: 'PUT',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: true })
      }
    ];

    await updateSessionStatus(1, { completed: true });
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});