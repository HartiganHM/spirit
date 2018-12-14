import formatTherapyGoalData from './formatTherapyGoalData';
import { mockTherapyGoal } from '../../data/mockData/mockTherapyGoal';

describe('formatTherapyGoalData tests', () => {
  it('should be a function', () => {
    expect(formatTherapyGoalData).toBeAFunction;
  });

  it('should return an array of 35 objects', () => {
    const mockReturn = formatTherapyGoalData([mockTherapyGoal]);

    expect(mockReturn.length).toEqual(35);
  });

  it('should add a value to the value property in each object, when available', () => {
    const mockReturn = formatTherapyGoalData([mockTherapyGoal]);

    expect(mockReturn[1].value).toEqual(4);
  });

  it('The value property should remain null if a value is not supplied', () => {
    const mockReturn = formatTherapyGoalData([mockTherapyGoal]);

    expect(mockReturn[0].value).toEqual(null);
  });
});
