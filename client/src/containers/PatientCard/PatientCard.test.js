import React from 'react';
import { PatientCard, mapDispatchToProps } from './PatientCard';
import { shallow } from 'enzyme';

describe('PatientCard tests', () => {
  let getPatientConerns;
  let abstractedName;
  let lastAppt;
  let id;
  let renderedPatientCard;

  beforeEach(() => {
    getPatientConerns = jest.fn();
    abstractedName = 'DFXAB01';
    lastAppt = '2/3/2018';
    id = 3;
    renderedPatientCard = shallow(
      <PatientCard
        getPatientConerns={getPatientConerns}
        lastAppt={lastAppt}
        abstractedName={abstractedName}
        id={id}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedPatientCard).toMatchSnapshot();
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getPatientConcerns is called', () => {
    const mockDispatch = jest.fn();
    const result = mapDispatchToProps(mockDispatch);
    const mockParameters = 5;

    result.getPatientConcerns(mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
