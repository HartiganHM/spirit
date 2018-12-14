import apiRoot from '../apiRoot';
import loadDefinitions from './loadDefinitions';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadDefinitions tests', () => {
  window.fetch = jest.fn().mockImplementation(() => 
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadDefinitions).toBeAFunction;
  });

  it('loadDefinitions is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/terms/all`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadDefinitions();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});