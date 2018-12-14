/*eslint-disable camelcase*/

import React from 'react';
import {
  BodyDiagram,
  mapStateToProps,
  mapDispatchToProps
} from './BodyDiagram';
import { shallow } from 'enzyme';
import { mockProcess } from '../../data/mockData/mockProcess';
import { mockStoredThreadConnections } from '../../data/mockData/mockStoredThreadConnections';

describe('BodyDiagram tests', () => {
  let selectedProcess;
  let updateProcessPerformanceComponent;
  let storedThreadConnections;
  let renderedBodyDiagram;

  beforeEach(() => {
    selectedProcess = mockProcess;
    updateProcessPerformanceComponent = jest.fn();
    storedThreadConnections = mockStoredThreadConnections;

    renderedBodyDiagram = shallow(
      <BodyDiagram
        selectedProcess={selectedProcess}
        updateProcessPerformanceComponent={updateProcessPerformanceComponent}
        storedThreadConnections={storedThreadConnections}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedBodyDiagram).toMatchSnapshot();
  });

  it('should set state for hover on mouseover', () => {
    expect(renderedBodyDiagram.state('hover1')).toEqual(false);
    renderedBodyDiagram.instance().hoverMe(1);

    expect(renderedBodyDiagram.state('hover1')).toEqual(true);
  });

  it('should set state for hover on mouseleave', () => {
    renderedBodyDiagram.instance().hoverMe(1);
    renderedBodyDiagram.instance().unHoverMe(1);

    expect(renderedBodyDiagram.state('hover1')).toEqual(false);
  });

  it('should toggle state for part on click', () => {
    expect(renderedBodyDiagram.state('part1')).toEqual(false);
    renderedBodyDiagram.instance().togglePart(1);

    expect(renderedBodyDiagram.state('part1')).toEqual(true);
    renderedBodyDiagram.instance().togglePart(1);

    expect(renderedBodyDiagram.state('part1')).toEqual(false);
  });

  it('should load existing part values into state when component mounts', () => {
    expect(renderedBodyDiagram.state('part1')).toEqual(false);
    expect(renderedBodyDiagram.state('part2')).toEqual(true);
  });

  it('loadComponentValue should set states for parts when called', () => {
    renderedBodyDiagram.instance().loadComponentValue([true, true, true]);

    expect(renderedBodyDiagram.state('part1')).toEqual(true);
    expect(renderedBodyDiagram.state('part2')).toEqual(true);
    expect(renderedBodyDiagram.state('part3')).toEqual(true);
  });

  it('should set state of changed to true when a value is changed', () => {
    renderedBodyDiagram.instance().togglePart(1);

    expect(renderedBodyDiagram.state('changed')).toEqual(true);
  });

  it('should set state of changed to false when handleDataUpdate is called', () => {
    renderedBodyDiagram.instance().togglePart(1);
    expect(renderedBodyDiagram.state('changed')).toEqual(true);

    renderedBodyDiagram.instance().handleDataUpdate(1);
    expect(renderedBodyDiagram.state('changed')).toEqual(false);
  });

  it('check thread connections should return a string', () => {
    expect(renderedBodyDiagram.instance().checkThreadConnections()).toEqual('body-key');
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedProcess from store', () => {
    const selectedProcess = mockProcess;
    const mockStore = { selectedProcess };
    const result = mapStateToProps(mockStore);

    expect(result.selectedProcess).toEqual(mockStore.selectedProcess);
  });

  it('Should pull storedThreadConnections from store', () => {
    const storedThreadConnections = mockStoredThreadConnections;
    const mockStore = { storedThreadConnections };
    const result = mapStateToProps(mockStore);

    expect(result.storedThreadConnections).toEqual(
      mockStore.storedThreadConnections
    );
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when updateProcessPerformanceComponent is call', () => {
    const mockDispatch = jest.fn();
    const mockParameters = [{ pos_4_body: true }, 5];
    const result = mapDispatchToProps(mockDispatch);

    result.updateProcessPerformanceComponent(...mockParameters);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
