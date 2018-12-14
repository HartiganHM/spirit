import selectedTherapyGoal from './selectedTherapyGoal';
import { mockTherapyGoal } from '../../data/mockData/mockTherapyGoal';
import * as actions from '../../actions';

describe('selectedTherapyGoal reducer tests', () => {
  it('Should return store by default', () => {
    const expected = {};

    expect(selectedTherapyGoal(undefined, {})).toEqual(expected);
  });

  it('Should return a new store with a selectedTherapyGoal', () => {
    const expected = mockTherapyGoal;

    expect(
      selectedTherapyGoal(
        undefined,
        actions.selectedTherapyGoalToStore(mockTherapyGoal)
      )
    ).toEqual(expected);
  });
});
