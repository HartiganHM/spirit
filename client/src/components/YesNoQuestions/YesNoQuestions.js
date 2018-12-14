import React from 'react';
import YesNo from '../../containers/YesNo/YesNo';
import { PropTypes } from 'prop-types';
import './YesNoQuestions.css';

const YesNoQuestions = ({ title, questionsArray, databaseNamesArray }) => {
  const display = questionsArray.map((question, index) => {
    return (
      <YesNo
        question={question}
        databaseName={databaseNamesArray[index]}
        key={index}
      />
    );
  });

  return (
    <div className="YesNoQuestions">
      <h4 className="category-title">{title}</h4>
      {display}
    </div>
  );
};

export default YesNoQuestions;

YesNoQuestions.propTypes = {
  title: PropTypes.string,
  questionsArray: PropTypes.array,
  databaseNamesArray: PropTypes.array
};
