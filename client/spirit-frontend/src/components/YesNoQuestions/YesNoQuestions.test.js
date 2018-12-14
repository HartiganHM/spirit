import React from 'react';
import YesNoQuestions from './YesNoQuestions';
import { shallow } from 'enzyme';
import {
  mockTitle,
  mockQuestionsArray,
  mockDatabaseNamesArray
} from '../../data/mockData/mockYesNoQuestionsData';

describe('YesNoQuestions tests', () => {
  it('should match snapshot', () => {
    const renderedApp = shallow(
      <YesNoQuestions
        title={mockTitle}
        questionsArray={mockQuestionsArray}
        databaseNamesArray={mockDatabaseNamesArray}
      />
    );

    expect(renderedApp).toMatchSnapshot();
  });
});
