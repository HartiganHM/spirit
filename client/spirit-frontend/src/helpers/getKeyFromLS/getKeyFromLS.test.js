import getKeyFromLS from './getKeyFromLS';

global.localStorage = {
  getItem: () => 'mockKey'
};

describe('getKeyFromLS tests', () => {
  it('should be a function', () => {
    expect(getKeyFromLS).toBeAFunction;
  });

  it('should return a key', () => {
    const mockReturn = getKeyFromLS();

    expect(mockReturn).toEqual('mockKey');
  });
});