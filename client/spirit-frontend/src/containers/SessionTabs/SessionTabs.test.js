import React from 'react';
import {
  SessionTabs,
  mapStateToProps,
  mapDispatchToProps
} from './SessionTabs';
import { shallow } from 'enzyme';
import { mockStoredThreadConnections } from '../../data/mockData/mockStoredThreadConnections';
import { mockSession } from '../../data/mockData/mockSession';
import { mockLocation } from '../../data/mockData/mockLocation';

describe('SessionTabs tests', () => {
  let storedThreadConnections;
  let selectedSession;
  let updateThreadDomain;
  let location;
  let renderedSessionTabs;

  beforeEach(() => {
    storedThreadConnections = mockStoredThreadConnections;
    selectedSession = mockSession;
    updateThreadDomain = jest.fn();
    location = mockLocation;

    renderedSessionTabs = shallow(
      <SessionTabs
        storedThreadConnections={storedThreadConnections}
        selectedSession={selectedSession}
        updateThreadDomain={updateThreadDomain}
        location={location}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedSessionTabs).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull storedThreadConnections and selectedSession from store', () => {
    const storedThreadConnections = mockStoredThreadConnections;
    const selectedSession = mockSession;
    const mockStore = { storedThreadConnections, selectedSession };
    const result = mapStateToProps(mockStore);

    expect(result.storedThreadConnections).toEqual(
      mockStore.storedThreadConnections
    );
    expect(result.selectedSession).toEqual(mockStore.selectedSession);
  });
});

describe('mapDispatchToProps tests', () => {
  it('Should call dispatch when updateThreadDomain is called', () => {
    const mockDispatch = jest.fn();
    const mockParams = 'Sensory';
    const result = mapDispatchToProps(mockDispatch);

    result.updateThreadDomain(mockParams);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
