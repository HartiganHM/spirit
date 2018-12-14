import processProcessesData from './processProcessesData';
import { mockProcess } from '../../data/mockData/mockProcess';

describe('processProcessesData tests', () => {
  it('should be a function', () => {
    expect(processProcessesData).toBeAFunction;
  });

  it('should return an object', () => {
    const mockReturn = processProcessesData([mockProcess]);

    expect(typeof mockReturn).toEqual('object');
  });

  it('should add a value to the values property array in each object, when available', () => {
    const mockReturn = processProcessesData([mockProcess]);

    expect(mockReturn.postural[1].values).toEqual(['7A']);
  });

  it('The value property should remain null if values are not supplied', () => {
    const mockReturn = processProcessesData([mockProcess]);

    expect(mockReturn.sensory[2].values).toEqual([null]);     
  });
});
