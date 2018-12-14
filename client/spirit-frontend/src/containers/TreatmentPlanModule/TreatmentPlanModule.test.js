import React from 'react';
import {
  TreatmentPlanModule,
  mapStateToProps,
  mapDispatchToProps
} from './TreatmentPlanModule';
import { shallow } from 'enzyme';
import { mockCleanTreatmentPlan } from '../../data/mockData/mockCleanTreatmentPlan';

describe('TreatmentPlanModule tests', () => {
  let selectedTreatmentPlan;
  let getTreatmentPlan;
  let type;
  let renderedTreatmentPlanModule;

  beforeEach(() => {
    selectedTreatmentPlan = mockCleanTreatmentPlan;
    getTreatmentPlan = jest.fn();
    type = 'Sensory';

    renderedTreatmentPlanModule = shallow(
      <TreatmentPlanModule
        selectedTreatmentPlan={selectedTreatmentPlan}
        type={type}
        getTreatmentPlan={getTreatmentPlan}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedTreatmentPlanModule).toMatchSnapshot();
  });

  it('Should change a targeted areas value in state and set changed to true', () => {
    const expected1 = 'Work on walking in a line';
    const expected2 = 'Follow a line on the floor';
    const mockSensoryEvent = {
      target: { name: 'sensory', value: 'Work on walking in a line' }
    };

    const mockTaskEvent = {
      target: { name: 'task', value: 'Follow a line on the floor' }
    };

    expect(renderedTreatmentPlanModule.state('sensory')).toEqual(undefined);
    expect(renderedTreatmentPlanModule.state('task')).toEqual(undefined);
    expect(renderedTreatmentPlanModule.state('changed')).toEqual(false);

    renderedTreatmentPlanModule.instance().handleChange(mockSensoryEvent);
    renderedTreatmentPlanModule.instance().handleChange(mockTaskEvent);

    expect(renderedTreatmentPlanModule.state('sensory')).toEqual(expected1);
    expect(renderedTreatmentPlanModule.state('task')).toEqual(expected2);
    expect(renderedTreatmentPlanModule.state('changed')).toEqual(true);
  });

  it('Should not try to save any data if changed is false', () => {
    const mockType = 'sensory';
    expect(renderedTreatmentPlanModule.state('changed')).toEqual(false);

    renderedTreatmentPlanModule.instance().handleSave(mockType);
    expect(getTreatmentPlan).not.toHaveBeenCalled();
  });

  it('Should set changed to false after sending data if changed is true', () => {
    const mockType = 'sensory';
    const mockSensoryEvent = {
      target: { name: 'sensory', value: 'Work on walking in a line' }
    };

    expect(renderedTreatmentPlanModule.state('changed')).toEqual(false);

    renderedTreatmentPlanModule.instance().handleChange(mockSensoryEvent);
    renderedTreatmentPlanModule.update();
    expect(renderedTreatmentPlanModule.state('changed')).toEqual(true);

    renderedTreatmentPlanModule.instance().handleSave(mockType);
    expect(getTreatmentPlan).toHaveBeenCalled();
    renderedTreatmentPlanModule.update();
    expect(renderedTreatmentPlanModule.state('changed')).toEqual(false);
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a selectedTreatmentPlan from store', () => {
    const selectedTreatmentPlan = mockCleanTreatmentPlan;
    const mockStore = { selectedTreatmentPlan };
    const result = mapStateToProps(mockStore);

    expect(result.selectedTreatmentPlan).toEqual(
      mockStore.selectedTreatmentPlan
    );
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getTreatmentPlan is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [
      5,
      {
        title: 'Sensory',
        note: 'Sensory treatment plan notes'
      }
    ];
    const result = mapDispatchToProps(mockDispatch);

    result.getTreatmentPlan(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
