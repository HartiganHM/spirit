import patientConcerns from './patientConcerns';
import { mockConcern } from '../../data/mockData/mockConcern';
import * as actions from '../../actions';

describe('patientConcerns reducer tests', () => {
  it('Should return store by default', () => {
    const expected = [];

    expect(patientConcerns(undefined, [])).toEqual(expected);
  });

  it('Should return a new store with patientConcerns', () => {
    const expected = [mockConcern];

    expect(
      patientConcerns(undefined, actions.concernArrayToStore([mockConcern]))
    ).toEqual(expected);
  });
});
