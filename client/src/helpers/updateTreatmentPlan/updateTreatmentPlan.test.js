/*eslint-disable camelcase*/

import updateTreatmentPlan from './updateTreatmentPlan';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('updateTreatmentPlan tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(updateTreatmentPlan).toBeAFunction;
  });

  it('updateTreatmentPlan is called with the correct params', async () => {
    const expected = [
      `/api/v1/treatment-plans/1`,
      {
        method: 'PUT',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ modulation_sensory: 'Sample plan' })
      }
    ];

    await updateTreatmentPlan(1, { modulation_sensory: 'Sample plan' });
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});