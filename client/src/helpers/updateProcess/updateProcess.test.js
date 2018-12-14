import updateProcess from './updateProcess';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('updateProcess tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(updateProcess).toBeAFunction;
  });

  it('updateProcess is called with the correct params', async () => {
    const expected = [
      `/api/v1/processes/1`,
      {
        method: 'PUT',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ regulation: '3a' })
      }
    ];

    await updateProcess(1, { regulation: '3a' });
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});