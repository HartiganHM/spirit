import clinic from './clinic';
import { mockClinic } from '../../data/mockData/mockClinicData';
import * as actions from '../../actions';

describe('Clinic reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(clinic(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a clinic', () => {
    const expected = mockClinic;

    expect(clinic(undefined, actions.clinicToStore(mockClinic))).toEqual(
      expected
    );
  });
});
