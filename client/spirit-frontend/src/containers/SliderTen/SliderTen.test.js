/*eslint-disable max-len*/

import React from 'react';
import { SliderTen, mapStateToProps, mapDispatchToProps } from './SliderTen';
import { shallow } from 'enzyme';
import { mockStoredThreadConnections } from '../../data/mockData/mockStoredThreadConnections';
import { mockProcess } from '../../data/mockData/mockProcess';
import {
  mockSliderTitle,
  mockDatabaseName
} from '../../data/mockData/mockCategorySlidersData';

describe('SliderTen tests', () => {
  it('should match the snapshot', () => {
    const renderedApp = shallow(
      <onClickOutide>
        <SliderTen
          selectedProcess={mockProcess}
          storedThreadConnections={mockStoredThreadConnections}
          sliderTitle={mockSliderTitle}
          databaseName={mockDatabaseName}
          reminderAsterisk={'*'}
        />
      </onClickOutide>
    );

    expect(renderedApp).toMatchSnapshot();
  });

  it('should set state when component mounts', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
        sliderTitle={mockSliderTitle}
        databaseName={mockDatabaseName}
      />
    );
    const expectedFair = 'A';
    const expectedValue = '4';

    expect(renderedApp.state('fair')).toEqual(expectedFair);
    expect(renderedApp.state('value')).toEqual(expectedValue);
  });

  it('should set state on change of slider value', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
      />
    );
    const expected = '5';

    renderedApp.instance().onRangeChanged('5');
    expect(renderedApp.state('value')).toEqual(expected);
  });

  it('should set state of previousValue to value and previousFair to fair on update', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
        sliderTitle={mockSliderTitle}
        databaseName={mockDatabaseName}
        updateProcessPerformanceComponent={jest.fn()}
      />
    );
    const expectedFair = 'A';
    const expectedValue = '4';

    renderedApp.instance().handleSliderUpdate('5', 'F');
    expect(renderedApp.state('previousFair')).toEqual(expectedFair);
    expect(renderedApp.state('previousValue')).toEqual(expectedValue);
  });

  it('should set state of fair when chooseFair is called', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
        sliderTitle={mockSliderTitle}
        databaseName={mockDatabaseName}
      />
    );
    const expected = 'R';

    renderedApp.instance().chooseFair('R');
    expect(renderedApp.state('fair')).toEqual(expected);
  });

  it('should toggle displayDefinition state when toggleDefinition is called', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
        sliderTitle={mockSliderTitle}
        databaseName={mockDatabaseName}
      />
    );
    const expected = true;

    renderedApp.instance().toggleDefinition();
    expect(renderedApp.state('displayDefinition')).toEqual(expected);
  });

  it('should return a className with thread-connection when threadConnection is true', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
        sliderTitle={mockSliderTitle}
        databaseName={mockDatabaseName}
      />
    );
    const expected = 'SliderTen thread-connection';

    expect(renderedApp.instance().checkThreadConnection(0, '', true)).toEqual(
      expected
    );
  });

  it('should return a className without thread-connection when threadConnection is false', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
        sliderTitle={mockSliderTitle}
        databaseName={mockDatabaseName}
      />
    );
    const expected = 'SliderTen';

    expect(renderedApp.instance().checkThreadConnection(0, '', false)).toEqual(
      expected
    );
  });

  it('should return a className without thread-connection when slider has been changed', () => {
    const renderedApp = shallow(
      <SliderTen
        selectedProcess={mockProcess}
        storedThreadConnections={mockStoredThreadConnections}
        sliderTitle={mockSliderTitle}
        databaseName={mockDatabaseName}
      />
    );
    const expected = 'SliderTen';

    expect(renderedApp.instance().checkThreadConnection(2, 'A', true)).toEqual(
      expected
    );
  });
});

describe('mapStateToProps tests', () => {
  it('should pull selectedProcess and storedThreadConnections from store', () => {
    const selectedProcess = mockProcess;
    const storedThreadConnections = mockStoredThreadConnections;
    const mockStore = { selectedProcess, storedThreadConnections };
    const result = mapStateToProps(mockStore);

    expect(result.selectedProcess).toEqual(mockStore.selectedProcess);
    expect(result.storedThreadConnections).toEqual(
      mockStore.storedThreadConnections
    );
  });
});

describe('mapDispatchToProps tests', () => {
  it('should call dispatch when updateProcessPerformanceComponent is called', () => {
    const mockDispatch = jest.fn();
    const mockParams = (2, { process: '3A' });
    const result = mapDispatchToProps(mockDispatch);

    result.updateProcessPerformanceComponent(mockParams);
    expect(mockDispatch).toHaveBeenCalled();
  });
});
