import postProcess from './postProcess';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('postProcess tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(postProcess).toBeAFunction;
  });

  it('postProcess is called with the correct params', async () => {
    const expected = [
      `/api/v1/sessions/1/processes`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await postProcess(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});