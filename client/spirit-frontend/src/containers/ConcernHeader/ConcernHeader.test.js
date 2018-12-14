import React from 'react';
import { ConcernHeader, mapStateToProps } from './ConcernHeader';
import { shallow } from 'enzyme';
import { mockConcern } from '../../data/mockData/mockConcern';

describe('ConcernHeader tests', () => {
  let selectedConcern;
  let renderedConcernHeader;

  beforeEach(() => {
    selectedConcern = mockConcern;

    renderedConcernHeader = shallow(
      <ConcernHeader selectedConcern={selectedConcern} />
    );
  });

  it('Should match the snapshot', () => {
    expect(renderedConcernHeader).toMatchSnapshot();
  });
});

describe('mapStateToProps tests', () => {
  it('Should pull selectedConcern from store', () => {
    const selectedConcern = mockConcern;
    const mockStore = { selectedConcern };
    const result = mapStateToProps(mockStore);

    expect(result.selectedConcern).toEqual(mockStore.selectedConcern);
  });
});
