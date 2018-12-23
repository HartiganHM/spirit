  
import loadSessionsList from './loadSessionsList';
import { mockSession } from '../../data/mockData/mockSession';

global.localStorage = {
  getItem: () => null
};

describe('loadSessionsList tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve([mockSession])
    })
  );

  it('should be a function', () => {
    expect(loadSessionsList).toBeAFunction;
  });

  it('loadSessionsList is called with the correct params', async () => {
    const expected = [
      `/api/v1/primary-concerns/1/sessions`,
      {
        method: 'GET',
        headers: {
          'x-token': null,
          'Content-Type': 'application/json'
        }
      }
    ];

    await loadSessionsList(1);
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});