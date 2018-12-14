import patientList from './patientList';
import { mockPatient } from '../../data/mockData/mockPatient';
import * as actions from '../../actions';

describe('patientList reducer tests', () => {
  it('Should return store by default', () => {
    const expected = [];

    expect(patientList(undefined, [])).toEqual(expected);
  });

  it('Should return a new store with a patientList', () => {
    const expected = [mockPatient];

    expect(
      patientList(undefined, actions.patientToStore([mockPatient]))
    ).toEqual(expected);
  });
});
