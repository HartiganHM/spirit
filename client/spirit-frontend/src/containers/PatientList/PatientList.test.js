import React from 'react';
import { PatientList, mapStateToProps } from './PatientList';
import { shallow } from 'enzyme';
import { mockPatient } from '../../data/mockData/mockPatient';

describe('PatientList tests', () => {
  let patientList;
  let renderedPatientList;

  beforeEach(() => {
    patientList = [mockPatient];

    renderedPatientList = shallow(<PatientList patientList={patientList} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedPatientList).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull patientList from store', () => {
    const patientList = [mockPatient];
    const mockStore = { patientList };
    const result = mapStateToProps(mockStore);

    expect(result.patientList).toEqual(mockStore.patientList);
  });
});
