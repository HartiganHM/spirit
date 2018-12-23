import logoutUser from './logoutUser';
import getKeyFromLS from '../getKeyFromLS/getKeyFromLS';
import mockLocalStorage from '../../data/mockData/mockLocalStorage';

global.localStorage = mockLocalStorage;

describe('logoutUser tests', () => {
  window.fetch = jest.fn().mockImplementation(() =>
    Promise.resolve({
      status: 200
    })
  );

  it('Should be a function', () => {
    expect(logoutUser).toBeAFunction;
  });

  it('Should be called with the correct parameters', async () => {
    const expected = [
      `https://spirit-dev.e1.loginrocket.com/v1/logout`,
      {
        method: 'POST',
        body: JSON.stringify({
          token: getKeyFromLS()
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    ];

    await logoutUser();
    expect(window.fetch).toHaveBeenCalledWith(...expected);
  });
});
