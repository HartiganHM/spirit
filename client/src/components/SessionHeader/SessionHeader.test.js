import React from 'react';
import SessionHeader from './SessionHeader';
import { shallow } from 'enzyme';
import {
  mockTitle,
  mockHeadings,
  mockDatabaseNamesArray
} from '../../data/mockData/mockSessionHeaderData';

describe('SessionHeader tests', () => {
  it('Should match snapshot', () => {
    const renderedApp = shallow(
      <SessionHeader
        title={mockTitle}
        headings={mockHeadings}
        databaseNamesArray={mockDatabaseNamesArray}
      />
    );

    expect(renderedApp).toMatchSnapshot();
  });

  it('Should match snapshot if some props are empty arrays', () => {
    const renderedApp = shallow(
      <SessionHeader title={mockTitle} headings={[]} databaseNamesArray={[]} />
    );

    expect(renderedApp).toMatchSnapshot();
  });
});
