import React from 'react';
import {
  PatientDashboard,
  mapStateToProps,
  mapDispatchToProps
} from './PatientDashboard';
import { shallow } from 'enzyme';
import { mockPatient } from '../../data/mockData/mockPatient';
import { mockConcerns } from '../../data/mockData/mockConcern';

describe('PatientDashboard tests', () => {
  let addConcern;
  let currentPatient;
  let wipeStoreFromPatientDashboard;
  let renderedPatientDashboard;

  beforeEach(() => {
    addConcern = jest.fn();
    currentPatient = mockPatient;
    wipeStoreFromPatientDashboard = jest.fn();

    renderedPatientDashboard = shallow(
      <PatientDashboard
        addConcern={addConcern}
        currentPatient={currentPatient}
        wipeStoreFromPatientDashboard={wipeStoreFromPatientDashboard}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedPatientDashboard).toMatchSnapshot();
  });

  it('should set state when toggleDomain is called', () => {
    expect(renderedPatientDashboard.state('domain1')).toEqual(false);

    renderedPatientDashboard.instance().toggleDomain('domain1');

    expect(renderedPatientDashboard.state('domain1')).toEqual(true);

    renderedPatientDashboard.instance().toggleDomain('domain1');

    expect(renderedPatientDashboard.state('domain1')).toEqual(false);
  });

  it('should set state when handleChange is called', () => {
    const mockEvent = {
      target: { name: 'concernInput', value: 'New Concern'}
    };
    expect(renderedPatientDashboard.state('concernInput')).toEqual('');

    renderedPatientDashboard.instance().handleChange(mockEvent);

    expect(renderedPatientDashboard.state('concernInput')).toEqual('New Concern');
  });

  it('should reset state when clearInputs is called', () => {
    const mockEvent = {
      target: { name: 'notesInput', value: 'Notes'}
    };
    renderedPatientDashboard.instance().toggleDomain('domain2');
    renderedPatientDashboard.instance().handleChange(mockEvent);

    expect(renderedPatientDashboard.state('domain2')).toEqual(true);
    expect(renderedPatientDashboard.state('notesInput')).toEqual('Notes');

    renderedPatientDashboard.instance().clearInputs();

    expect(renderedPatientDashboard.state('domain2')).toEqual(false);
    expect(renderedPatientDashboard.state('notesInput')).toEqual('');
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull patientConcerns and currentPatient from store', () => {
    const patientConcerns = [mockConcerns];
    const currentPatient = mockPatient;
    const mockStore = { patientConcerns, currentPatient };
    const result = mapStateToProps(mockStore);

    expect(result.patientConcerns).toEqual(mockStore.patientConcerns);
    expect(result.currentPatient).toEqual(mockStore.currentPatient);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when addConcern is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [5, mockConcerns];
    const result = mapDispatchToProps(mockDispatch);

    result.addConcern(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });

  it('Should call dispatch when wipeStoreFromPatientDashboard is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);

    result.addConcern();
    expect(mockDispatch).toHaveBeenCalled();
  });
});
