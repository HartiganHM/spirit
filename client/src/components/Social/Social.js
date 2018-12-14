import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../../components/CategorySliders/CategorySliders';
import YesNoQuestions from '../../components/YesNoQuestions/YesNoQuestions';
import { social } from '../../language/language';
import './Social.css';

const Social = () => {
  const { header, columns } = social;

  return (
    <div className="Social">
      <SessionHeader
        title={header.title}
        headings={[]}
        databaseNamesArray={[]}
      />

      <div className="category-content">
        {Object.keys(columns).map(column => {
          const { type, title, terms, db } = columns[column];

          if (type) {
            if (type === 'YesNo') {
              <YesNoQuestions
                key={db}
                title={title}
                questionsArray={terms}
                databaseNamesArray={db}
              />;
            }
          }

          return (
            <CategorySliders
              key={db}
              title={title}
              slidersArray={terms}
              databaseNamesArray={db}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Social;
