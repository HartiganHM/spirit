import React from 'react';
import { Concerns, mapStateToProps } from './Concerns';
import { shallow } from 'enzyme';
import { mockConcern } from '../../data/mockData/mockConcern';

describe('Concerns tests', () => {
  let patientConcerns;
  let renderedConcerns;

  beforeEach(() => {
    patientConcerns = [mockConcern];

    renderedConcerns = shallow(<Concerns patientConcerns={patientConcerns} />);
  });

  it('Should match the snapshot', () => {
    expect(renderedConcerns).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull patientConcerns from store', () => {
    const patientConcerns = [mockConcern];
    const mockStore = { patientConcerns };
    const result = mapStateToProps(mockStore);

    expect(result.patientConcerns).toEqual(mockStore.patientConcerns);
  });
});
