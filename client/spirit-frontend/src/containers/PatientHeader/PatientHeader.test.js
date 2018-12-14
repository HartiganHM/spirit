import React from 'react';
import { PatientHeader, mapStateToProps } from './PatientHeader';
import { shallow } from 'enzyme';
import { mockPatient } from '../../data/mockData/mockPatient';

describe('Patient Header tests', () => {
  let currentPatient;
  let renderedPatientHeader;

  beforeEach(() => {
    currentPatient = mockPatient;

    renderedPatientHeader = shallow(
      <PatientHeader currentPatient={currentPatient} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedPatientHeader).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a currentPatient from store', () => {
    const currentPatient = mockPatient;
    const mockStore = { currentPatient };
    const result = mapStateToProps(mockStore);

    expect(result.currentPatient).toEqual(mockStore.currentPatient);
  });
});
