/*eslint-disable camelcase*/

import updateTherapyGoal from './updateTherapyGoal';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('updateTherapyGoal tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(updateTherapyGoal).toBeAFunction;
  });

  it('updateTherapyGoal is called with the correct params', async () => {
    const expected = [
      `/api/v1/therapy-goals/1`,
      {
        method: 'PUT',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ posture_ot_importance: 5 })
      }
    ];

    await updateTherapyGoal(1, { posture_ot_importance: 5 });
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});