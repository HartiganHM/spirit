import selectedProcess from './selectedProcess';
import { mockProcess } from '../../data/mockData/mockProcess';
import * as actions from '../../actions';

describe('selectedProcess reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(selectedProcess(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a selectedProcess', () => {
    const expected = mockProcess;

    expect(
      selectedProcess(undefined, actions.selectedProcessToStore(mockProcess))
    ).toEqual(expected);
  });
});
