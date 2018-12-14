import React from 'react';
import TreatmentPlans from './TreatmentPlans';
import { shallow } from 'enzyme';

describe('TreatmentPlans tests', () => {
  it('Should match snapshot', () => {
    const renderedTreatmentPlans = shallow(<TreatmentPlans />);

    expect(renderedTreatmentPlans).toMatchSnapshot();
  });

  it('Should change state when a new tab is clicked', () => {
    const renderedTreatmentPlans = shallow(<TreatmentPlans />);
    const tabHeaders = [
      'postural',
      'sensory',
      'social',
      'executive',
      'modulation'
    ];

    expect(renderedTreatmentPlans.state().currentTab).toEqual('modulation');

    tabHeaders.forEach(tab => {
      renderedTreatmentPlans.instance().handleTabChange(tab);
      expect(renderedTreatmentPlans.state().currentTab).toEqual(tab);
    });
  });
});
