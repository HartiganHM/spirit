import React from 'react';
import { Finish, mapStateToProps } from './Finish';
import { shallow } from 'enzyme';
import { mockSession } from '../../data/mockData/mockSession';
import { mockConcern } from '../../data/mockData/mockConcern';

describe('Finish tests', () => {
  let selectedSession;
  let selectedConcern;
  let updateSession;
  let renderedFinish;

  beforeEach(() => {
    selectedSession = mockSession;
    selectedConcern = mockConcern;
    updateSession = jest.fn();

    renderedFinish = shallow(
      <Finish
        selectedSession={selectedSession}
        selectedConcern={selectedConcern}
        updateSession={updateSession}
      />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedFinish).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedSession and selectedConcern from store', () => {
    const selectedSession = mockSession;
    const selectedConcern = mockConcern;
    const mockStore = { selectedSession, selectedConcern };
    const result = mapStateToProps(mockStore);

    expect(result.selectedSession).toEqual(mockStore.selectedSession);
    expect(result.selectedConcern).toEqual(mockStore.selectedConcern);
  });
});
