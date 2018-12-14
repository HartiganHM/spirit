import apiRoot from '../apiRoot';
import postTherapyGoal from './postTherapyGoal';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('postTherapyGoal tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(postTherapyGoal).toBeAFunction;
  });

  it('postTherapyGoal is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/sessions/1/therapy-goals`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await postTherapyGoal(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});