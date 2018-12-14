/*eslint-disable camelcase*/

import getThreadConnections from './getThreadConnections';

describe('getThreadConnections tests', () => {
  it('Should take in a component and return an array of connections', () => {
    const mockComponent = { sen_1_classification: '4R' };
    const expected = ['sen_1_ability', 'executive'];
    const connections = getThreadConnections(mockComponent);

    expect(connections).toEqual(expected);
  });

  it('Should return an empty array if there are no connections', () => {
    const mockComponent = { exe_2a_shifting: '6A' };
    const expected = [];
    const connections = getThreadConnections(mockComponent);

    expect(connections).toEqual(expected);
  });
});
