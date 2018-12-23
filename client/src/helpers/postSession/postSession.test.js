  
import postSession from './postSession';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('postSession tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(postSession).toBeAFunction;
  });

  it('postSession is called with the correct params', async () => {
    const expected = [
      `/api/v1/primary-concerns/1/sessions`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await postSession(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});