import processesData from './processesData';
import { mockProcessesData } from '../../data/mockData/mockProcessesData';
import * as actions from '../../actions';

describe('processesData reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(processesData(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with processesData', () => {
    const expected = mockProcessesData;

    expect(
      processesData(undefined, actions.processesDataToStore(mockProcessesData))
    ).toEqual(expected);
  });
});
