import processSessionGoals from './processSessionGoals';
import { mockTherapyGoal } from '../../data/mockData/mockTherapyGoal';

describe('processSessionGoals tests', () => {
  it('should be a function', () => {
    expect(processSessionGoals).toBeAFunction;
  });

  it('should return an object', () => {
    const mockReturn = processSessionGoals([mockTherapyGoal]);

    expect(typeof mockReturn).toEqual('object');
  });

  it('should sum up goal values by category and assign them to x/y coordinates', () => {
    const mockReturn = processSessionGoals([mockTherapyGoal]);

    expect(mockReturn[4].posture[0].x).toEqual(0);
    expect(mockReturn[4].posture[0].y).toEqual(23);
  });
});
