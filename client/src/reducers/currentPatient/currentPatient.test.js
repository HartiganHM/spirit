import currentPatient from './currentPatient';
import { mockPatient } from '../../data/mockData/mockPatient';
import * as actions from '../../actions';

describe('currentPatient reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(currentPatient(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a currentPatient', () => {
    const expected = mockPatient;

    expect(
      currentPatient(undefined, actions.currentPatientToStore(mockPatient))
    ).toEqual(expected);
  });
});
