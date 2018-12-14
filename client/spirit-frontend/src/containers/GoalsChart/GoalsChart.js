/*eslint-disable id-blacklist*/
/*eslint-disable id-length*/

import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { VictoryChart, VictoryLine, VictoryLegend, VictoryAxis } from 'victory';
import './GoalsChart.css';

export const GoalsChart = props => {
  const generateLines = () => {
    const lines = props.comparisonData;

    const titleArray = [
      'executive',
      'modulation',
      'posture',
      'sensory',
      'social'
    ];

    const colorsArray = [
      '',
      '',
      '#DFD7E7',
      '#3cd52e',
      '#9E87BA',
      '#5E378C',
      '#a8ed8a'
    ];

    const display = lines.map((line, index) => {
      const title = Object.keys(line);

      if (titleArray.includes(title[0])) {
        return (
          <VictoryLine
            key={index}
            data={line[title[0]]}
            style={{ data: { stroke: colorsArray[index], strokeWidth: 5 } }}
          />
        );
      }
    });

    return display;
  };

  const getTickValues = () => {
    let array = [];
    const length = props.comparisonData[0].created.length;
    for (let i = 0; i < length; i++) {
      array.push(i);
    }
    return array;
  };

  const getTickDates = t => {
    return props.comparisonData[0].created[t].date;
  };

  return (
    <div>
      <VictoryChart domainPadding={{ x: [0, 30] }}>
        <VictoryLegend
          data={[
            {
              name: 'Executive',
              symbol: {
                fill: '#DFD7E7',
                type: 'square'
              },
              labels: {
                fontSize: 10,
                fill: '#DFD7E7',
                fontFamily: 'Josefin Sans',
                padding: 0,
                fontWeight: 100
              }
            },
            {
              name: 'Modulation',
              symbol: {
                fill: '#3cd52e',
                type: 'square'
              },
              labels: {
                fontSize: 10,
                fill: '#3cd52e',
                fontFamily: 'Josefin Sans',
                padding: 0,
                fontWeight: 100
              }
            },
            {
              name: 'Posture',
              symbol: {
                fill: '#9E87BA',
                type: 'square'
              },
              labels: {
                fontSize: 10,
                fill: '#9E87BA',
                fontFamily: 'Josefin Sans',
                padding: 0,
                fontWeight: 100
              }
            },
            {
              name: 'Sensory',
              symbol: {
                fill: '#5E378C',
                type: 'square'
              },
              labels: {
                fontSize: 10,
                fill: '#5E378C',
                fontFamily: 'Josefin Sans',
                padding: 0,
                fontWeight: 100
              }
            },
            {
              name: 'Social',
              symbol: {
                fill: '#a8ed8a',
                type: 'square'
              },
              labels: {
                fontSize: 10,
                fill: '#a8ed8a',
                fontFamily: 'Josefin Sans',
                padding: 0,
                fontWeight: 100
              }
            }
          ]}
          x={380}
        />
        {generateLines()}
        <VictoryAxis
          tickValues={getTickValues()}
          tickFormat={t => getTickDates(t)}
          style={{
            axis: { stroke: '#d1d3d4', strokeWidth: 5 },
            tickLabels: { fill: '#d1d3d4', fontFamily: 'Josefin Sans' }
          }}
        />
        <VictoryAxis
          dependentAxis={true}
          style={{
            axis: { stroke: '#d1d3d4', strokeWidth: 5 },
            tickLabels: { fill: '#d1d3d4', fontFamily: 'Josefin Sans' }
          }}
        />
      </VictoryChart>
    </div>
  );
};

export const mapStateToProps = store => ({
  comparisonData: store.comparisonData
});

export default connect(mapStateToProps, null)(GoalsChart);

GoalsChart.propTypes = {
  comparisonData: PropTypes.array
};
