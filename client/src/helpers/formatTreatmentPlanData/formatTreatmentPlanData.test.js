import formatTreatmentPlanData from './formatTreatmentPlanData';
import { mockTreatmentPlan } from '../../data/mockData/mockTreatmentPlan';

describe('formatTreatmentPlanData tests', () => {
  it('should be a function', () => {
    expect(formatTreatmentPlanData).toBeAFunction;
  });

  it('should return an array of 35 objects', () => {
    const mockReturn = formatTreatmentPlanData([mockTreatmentPlan]);

    expect(mockReturn.length).toEqual(35);
  });

  it('should add a value to the value property in each object, when available', () => {
    const mockReturn = formatTreatmentPlanData([mockTreatmentPlan]);

    expect(mockReturn[1].value).toEqual('More notes.');
  });

  it('The value property should remain null if a value is not supplied', () => {
    const mockReturn = formatTreatmentPlanData([mockTreatmentPlan]);

    expect(mockReturn[25].value).toEqual(null);
  });
});
