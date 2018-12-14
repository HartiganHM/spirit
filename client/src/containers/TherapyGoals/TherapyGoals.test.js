import React from 'react';
import {
  TherapyGoals,
  mapStateToProps,
  mapDispatchToProps
} from './TherapyGoals';
import { shallow } from 'enzyme';
import { mockTherapyGoal } from '../../data/mockData/mockTherapyGoal';

describe('TherapyGoals tests', () => {
  let category;
  let selectedTherapyGoal;
  let getTherapyGoal;
  let number;
  let title;
  let renderedTherapyGoal;

  beforeEach(() => {
    category = 'Sensory';
    selectedTherapyGoal = mockTherapyGoal;
    getTherapyGoal = jest.fn();
    number = '1';
    title = 'Title';

    renderedTherapyGoal = shallow(
      <TherapyGoals
        category={category}
        selectedTherapyGoal={selectedTherapyGoal}
        getTherapyGoal={getTherapyGoal}
        number={number}
        title={title}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedTherapyGoal).toMatchSnapshot();
  });

  it('Should save a value by type and set changed to true', () => {
    const expectedType = 'ot_importance';
    const expectedValue = 8;

    expect(renderedTherapyGoal.state(expectedType)).not.toEqual(expectedValue);
    expect(renderedTherapyGoal.state('changed')).toEqual(false);

    renderedTherapyGoal
      .instance()
      .handleRangeChange(expectedValue, expectedType);
    expect(renderedTherapyGoal.state(expectedType)).toEqual(expectedValue);
    expect(renderedTherapyGoal.state('changed')).toEqual(true);
  });

  it('Should capture a goal value and set changed to true', () => {
    const mockGoalEvent = {
      target: { value: "Be more aware of other people's emotions" }
    };
    const expected = "Be more aware of other people's emotions";

    expect(renderedTherapyGoal.state('goal')).not.toEqual(expected);
    expect(renderedTherapyGoal.state('changed')).toEqual(false);

    renderedTherapyGoal.instance().handleGoalsChange(mockGoalEvent);
    expect(renderedTherapyGoal.state('goal')).toEqual(expected);
    expect(renderedTherapyGoal.state('changed')).toEqual(true);
  });

  it('Should not try to save any data if changed is false', () => {
    expect(renderedTherapyGoal.state('changed')).toEqual(false);

    renderedTherapyGoal.instance().handleTherapyGoalsUpdate();
    expect(getTherapyGoal).not.toHaveBeenCalled();
  });

  it('Should set changed to false after sending data if changed is true', () => {
    const mockProps = [
      "Be more aware of other people's emotions",
      10,
      6,
      5,
      5,
      6,
      7
    ];

    const mockGoalEvent = {
      target: { value: "Be more aware of other people's emotions" }
    };

    renderedTherapyGoal.instance().handleGoalsChange(mockGoalEvent);
    expect(renderedTherapyGoal.state('changed')).toEqual(true);

    renderedTherapyGoal.instance().handleTherapyGoalsUpdate(...mockProps);
    expect(getTherapyGoal).toHaveBeenCalled();

    renderedTherapyGoal.update();
    expect(renderedTherapyGoal.state('changed')).toEqual(false);
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull a selectedTherapyGoal from store', () => {
    const selectedTherapyGoal = mockTherapyGoal;
    const mockStore = { selectedTherapyGoal };
    const result = mapStateToProps(mockStore);

    expect(result.selectedTherapyGoal).toEqual(mockStore.selectedTherapyGoal);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when getTherapyGoal is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [
      5,
      {
        title: 'Sensory',
        notes: 'Should be more aware'
      }
    ];
    const result = mapDispatchToProps(mockDispatch);

    result.getTherapyGoal(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
