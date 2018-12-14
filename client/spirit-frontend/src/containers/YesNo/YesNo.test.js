/*eslint-disable camelcase*/

import React from 'react';
import { YesNo, mapStateToProps, mapDispatchToProps } from './YesNo';
import { shallow } from 'enzyme';
import { mockCleanProcess } from '../../data/mockData/mockCleanProcess';
import markedThreadConnections from '../../data/markedThreadConnections';

describe('YesNo tests', () => {
  let selectedProcess;
  let databaseName;
  let updateProcessPerformanceComponent;
  let question;
  let storedThreadConnections;
  let renderedYesNo;

  beforeEach(() => {
    selectedProcess = mockCleanProcess;
    databaseName = 'pos_1_inner';
    updateProcessPerformanceComponent = jest.fn();
    question = 'Inner?';
    storedThreadConnections = markedThreadConnections;

    renderedYesNo = shallow(
      <YesNo
        selectedProcess={selectedProcess}
        databaseName={databaseName}
        updateProcessPerformanceComponent={updateProcessPerformanceComponent}
        question={question}
        storedThreadConnections={storedThreadConnections}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedYesNo).toMatchSnapshot();
  });

  it('Should change state to a yes or no value', () => {
    expect(renderedYesNo.state().yesNo).toEqual(null);

    renderedYesNo.instance().handleChange(true);
    expect(renderedYesNo.state().yesNo).toEqual(true);

    renderedYesNo.instance().handleChange(false);
    expect(renderedYesNo.state().yesNo).toEqual(false);
  });

  it('Should change state if there is an incoming value from store', () => {
    expect(renderedYesNo.state().yesNo).toEqual(null);

    renderedYesNo.instance().loadComponentValue(true);
    expect(renderedYesNo.state().yesNo).toEqual(true);

    renderedYesNo.instance().loadComponentValue(false);
    expect(renderedYesNo.state().yesNo).toEqual(false);
  });

  it('Should change class if there is a thread connection', () => {
    const initialClass = 'YesNo';
    const expectedClass = 'thread-connection-yesno';

    expect(renderedYesNo.hasClass(initialClass)).toEqual(true);
    expect(renderedYesNo.hasClass(expectedClass)).toEqual(false);

    storedThreadConnections[databaseName] = true;
    renderedYesNo = shallow(
      <YesNo
        selectedProcess={selectedProcess}
        databaseName={databaseName}
        updateProcessPerformanceComponent={updateProcessPerformanceComponent}
        question={question}
        storedThreadConnections={storedThreadConnections}
      />
    );

    expect(renderedYesNo.hasClass(initialClass)).toEqual(true);
    expect(renderedYesNo.hasClass(expectedClass)).toEqual(true);
  });

  it('Should not change class if a thread connection AND an incoming value from store', () => {
    const expectedClass = 'YesNo';
    const unwantedClass = 'thread-connection-yesno';

    storedThreadConnections[databaseName] = true;
    renderedYesNo = shallow(
      <YesNo
        selectedProcess={selectedProcess}
        databaseName={databaseName}
        updateProcessPerformanceComponent={updateProcessPerformanceComponent}
        question={question}
        storedThreadConnections={storedThreadConnections}
      />
    );

    expect(renderedYesNo.hasClass(expectedClass)).toEqual(true);
    expect(renderedYesNo.hasClass(unwantedClass)).toEqual(true);

    renderedYesNo.instance().handleChange(true);
    expect(renderedYesNo.state().yesNo).toEqual(true);
    renderedYesNo.update();

    expect(renderedYesNo.hasClass(expectedClass)).toEqual(true);
    expect(renderedYesNo.hasClass(unwantedClass)).toEqual(false);
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedProcess and storedThreadConnections from store', () => {
    const selectedProcess = mockCleanProcess;
    const storedThreadConnections = markedThreadConnections;
    const mockStore = { selectedProcess, storedThreadConnections };
    const result = mapStateToProps(mockStore);

    expect(result.selectedProcess).toEqual(mockStore.selectedProcess);
    expect(result.storedThreadConnections).toEqual(
      mockStore.storedThreadConnections
    );
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when updateProcessPerformanceComponent is called', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [1, { pos_1_inner: true }];
    const result = mapDispatchToProps(mockDispatch);

    result.updateProcessPerformanceComponent(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
