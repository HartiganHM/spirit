import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../CategorySliders/CategorySliders';
import { sensory } from '../../language/language';
import './Sensory.css';

const Sensory = () => {
  const { header, columns } = sensory;

  return (
    <div className="Sensory">
      <SessionHeader
        key={header.db}
        title={header.title}
        headings={header.terms}
        databaseNamesArray={header.db}
      />

      <div className="category-content">
        {Object.keys(columns).map(column => {
          const { title, terms, db } = columns[column];

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

export default Sensory;
