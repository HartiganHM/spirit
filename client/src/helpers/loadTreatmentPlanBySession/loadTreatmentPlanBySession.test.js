import apiRoot from '../apiRoot';
import loadTreatmentPlanBySession from './loadTreatmentPlanBySession';
import { mockApiResponse } from '../../data/mockData/mockApiResponse';

global.localStorage = {
  getItem: () => null
};

describe('loadTreatmentPlanBySession tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(mockApiResponse)
    })
  );

  it('should be a function', () => {
    expect(loadTreatmentPlanBySession).toBeAFunction;
  });

  it('loadTreatmentPlanBySession is called with the correct params', async () => {
    const expected = [
      `${apiRoot}/api/v1/sessions/1/treatment-plans`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadTreatmentPlanBySession(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});