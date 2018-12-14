import selectedTreatmentPlan from './selectedTreatmentPlan';
import { mockTreatmentPlan } from '../../data/mockData/mockTreatmentPlan';
import * as actions from '../../actions';

describe('selectedTreatmentPlan reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(selectedTreatmentPlan(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a selectedTreatmentPlan', () => {
    const expected = mockTreatmentPlan;

    expect(
      selectedTreatmentPlan(
        undefined,
        actions.selectedTreatmentPlanToStore(mockTreatmentPlan)
      )
    ).toEqual(expected);
  });
});
