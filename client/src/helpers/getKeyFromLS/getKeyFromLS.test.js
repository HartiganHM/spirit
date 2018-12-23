import getKeyFromLS from './getKeyFromLS';
import mockLocalStorage from '../../data/mockData/mockLocalStorage';

global.localStorage = mockLocalStorage;

describe('getKeyFromLS tests', () => {
  it('should be a function', () => {
    expect(getKeyFromLS).toBeAFunction;
  });

  xit('should return a key', () => {
    const mockReturn = getKeyFromLS();
    expect(mockReturn).toEqual('abcdefghijk987654321');
  });
});
