/*eslint-disable id-length*/

import React, { Component } from 'react';
import Range from 'react-range-progress';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Definition from '../Definition/Definition';
import * as actions from '../../actions';
import onClickOutside from 'react-onclickoutside';
import './SliderTen.css';

export class SliderTen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 0,
      previousValue: 0,
      fair: '',
      previousFair: '',
      displayDefinition: false
    };
  }

  componentDidMount() {
    const { selectedProcess, databaseName } = this.props;
    const matchedComponentValue =
      selectedProcess[
        Object.keys(selectedProcess).find(
          component => component === databaseName
        )
      ];

    this.loadComponentValue(matchedComponentValue);
  }

  handleClickOutside = () => {
    this.setState({displayDefinition: false});
  };

  loadComponentValue = matchedComponentValue => {
    if (matchedComponentValue) {
      const valueArray = matchedComponentValue.split('');
      const value = valueArray[0];
      const previousValue = valueArray[0];
      const fair = valueArray[1];
      const previousFair = valueArray[1];

      this.setState({ value, previousValue, fair, previousFair });
    }
  };

  onRangeChanged = value => {
    this.setState({ value });
  };

  handleSliderUpdate = (previousValue, previousFair) => {
    const { value, fair } = this.state;
    const {
      updateProcessPerformanceComponent,
      selectedProcess,
      databaseName
    } = this.props;

    if (value !== previousValue || fair !== previousFair) {
      updateProcessPerformanceComponent(selectedProcess.id, {
        [databaseName]: value.toString() + fair
      });
    }

    this.setState({ previousValue: value, previousFair: fair });
  };

  chooseFair = letter => {
    this.setState({ fair: letter.toUpperCase() });
  };

  toggleDefinition = () => {
    const { displayDefinition } = this.state;

    this.setState({ displayDefinition: !displayDefinition });
  };

  checkThreadConnection = (value, fair, threadConnection) => {
    if (threadConnection && value !== 0 && fair !== '') {
      return 'SliderTen';
    } else if (threadConnection) {
      return 'SliderTen thread-connection';
    } else {
      return 'SliderTen';
    }
  };

  render() {
    const {
      value,
      previousValue,
      fair,
      previousFair,
      displayDefinition
    } = this.state;

    const {
      sliderTitle,
      reminderAsterisk,
      databaseName,
      storedThreadConnections
    } = this.props;

    return (
      <div
        className={this.checkThreadConnection(
          value,
          fair,
          storedThreadConnections[databaseName]
        )}
        onMouseLeave={() =>
          this.handleSliderUpdate(previousValue, previousFair)
        }
      >
        <div
          className="slider-heading"
        >
          <img
            className="definition-image"
            src="/assets/mag-glass.svg"
            onClick={() => this.toggleDefinition()}
            alt="definition"
          />

          <div
            className={
              displayDefinition === true
                ? 'definition-holder display-definition'
                : 'definition-holder'
            }
          >
            <Definition title={sliderTitle} />
          </div>

          <h5>{sliderTitle}</h5>

          <h5>{reminderAsterisk}</h5>
        </div>

        <p className="slider-number" style={value === 0 ? { opacity: 0 } : null}>{value}</p>

        <div className="range-container">
          <Range
            value={parseInt(value)}
            fillColor={{
              r: 180,
              g: 180,
              b: 180,
              a: 1
            }}
            trackColor={{
              r: 220,
              g: 220,
              b: 220,
              a: 1
            }}
            height={6}
            width="100%"
            thumbSize={14}
            thumbColor={{ r: 200, g: 200, b: 200, a: 1 }}
            onChange={this.onRangeChanged}
            min={0}
            max={10}
          />
        </div>

        <h2>
          <span
            onClick={() => this.chooseFair('F')}
            className={
              fair === 'F' ? 'button-fair button-active' : 'button-fair'
            }
          >
            F
          </span>

          <span
            onClick={() => this.chooseFair('A')}
            className={
              fair === 'A' ? 'button-fair button-active' : 'button-fair'
            }
          >
            A
          </span>

          <span
            onClick={() => this.chooseFair('I')}
            className={
              fair === 'I' ? 'button-fair button-active' : 'button-fair'
            }
          >
            I
          </span>

          <span
            onClick={() => this.chooseFair('R')}
            className={
              fair === 'R' ? 'button-fair button-active' : 'button-fair'
            }
          >
            R
          </span>
        </h2>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  selectedProcess: store.selectedProcess,
  storedThreadConnections: store.storedThreadConnections
});

export const mapDispatchToProps = dispatch => ({
  updateProcessPerformanceComponent: (processId, updatedProcess) => {
    dispatch(
      actions.updateProcessPerformanceComponent(processId, updatedProcess)
    );
  }
});

const wrappedSliderTen = onClickOutside(SliderTen);
export default connect(mapStateToProps, mapDispatchToProps)(wrappedSliderTen);

SliderTen.propTypes = {
  selectedProcess: PropTypes.object,
  databaseName: PropTypes.string,
  updateProcessPerformanceComponent: PropTypes.func,
  sliderTitle: PropTypes.string,
  reminderAsterisk: PropTypes.string,
  storedThreadConnections: PropTypes.object
};
