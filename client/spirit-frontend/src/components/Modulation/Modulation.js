import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../CategorySliders/CategorySliders';
import { modulation } from '../../language/language';
import './Modulation.css';

const Modulation = () => {
  const { header, columns } = modulation;

  return (
    <div className="Modulation">
      <SessionHeader
        title={header.title}
        headings={header.terms}
        databaseNamesArray={header.db}
      />

      <div className="category-content">
        {Object.keys(columns).map(column => {
          const { title, terms, db, reminderPlacement, reminder } = columns[column];

          return (
            <CategorySliders
              key={db}
              title={title}
              slidersArray={terms}
              databaseNamesArray={db}
              reminderAsterisk={reminderPlacement && reminderPlacement}
              reminder={reminder}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Modulation;
