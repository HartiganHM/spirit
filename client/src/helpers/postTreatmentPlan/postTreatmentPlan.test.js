import postTreatmentPlan from './postTreatmentPlan';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('postTreatmentPlan tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(postTreatmentPlan).toBeAFunction;
  });

  it('postTreatmentPlan is called with the correct params', async () => {
    const expected = [
      `/api/v1/sessions/1/treatment-plans`,
      {
        method: 'POST',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await postTreatmentPlan(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});