import React from 'react';
import SessionHeader from '../SessionHeader/SessionHeader';
import CategorySliders from '../CategorySliders/CategorySliders';
import { executive } from '../../language/language';
import './Executive.css';

const Executive = () => {
  const { header, columns } = executive;
  return (
    <div className="Executive">
      <SessionHeader title={header.title} headings={[]} />
      <div className="category-content">
        {Object.keys(columns).map(column => {
          const { terms, db } = columns[column];

          return (
            <CategorySliders key={db} slidersArray={terms} databaseNamesArray={db} />
          );
        })}
      </div>
    </div>
  );
};

export default Executive;
