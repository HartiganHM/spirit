import React from 'react';
import ComparisonCard from './ComparisonCard';
import { shallow } from 'enzyme';
import {
  mockDataArray,
  mockTitle,
  mockValues
} from '../../data/mockData/mockComparisonCardData';

describe('ComparisonCard tests', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(
      <ComparisonCard
        dateArray={mockDataArray}
        title={mockTitle}
        values={mockValues}
      />
    );

    expect(renderedApp).toMatchSnapshot();
  });
});
