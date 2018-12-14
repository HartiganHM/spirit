/*eslint-disable camelcase*/
/*eslint-disable id-length*/

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Range from 'react-range-progress';
import * as actions from '../../actions';
import './TherapyGoals.css';

export class TherapyGoals extends Component {
  constructor(props) {
    super(props);

    this.state = {
      goal: '',
      ot_importance: 0,
      parent_importance: 0,
      ot_performance: 0,
      parent_performance: 0,
      ot_satisfaction: 0,
      parent_satisfaction: 0,
      changed: false
    };
  }

  componentDidMount = () => {
    const type = this.props.category;
    const { selectedTherapyGoal } = this.props;

    this.setState({
      goal: selectedTherapyGoal[`${type}goal`],
      ot_importance: selectedTherapyGoal[`${type}ot_importance`],
      parent_importance: selectedTherapyGoal[`${type}parent_importance`],
      ot_performance: selectedTherapyGoal[`${type}ot_performance`],
      parent_performance: selectedTherapyGoal[`${type}parent_performance`],
      ot_satisfaction: selectedTherapyGoal[`${type}ot_satisfaction`],
      parent_satisfaction: selectedTherapyGoal[`${type}parent_satisfaction`]
    });
  };

  handleRangeChange = (value, type) => {
    this.setState({ [type]: value, changed: true });
  };

  handleGoalsChange = event => {
    this.setState({ goal: event.target.value, changed: true });
  };

  handleTherapyGoalsUpdate = (goal, oti, pi, otp, pp, ots, ps) => {
    const type = this.props.category;
    const { changed } = this.state;
    const { getTherapyGoal, selectedTherapyGoal } = this.props;

    if (changed === true) {
      getTherapyGoal(selectedTherapyGoal.id, {
        [`${type}goal`]: goal,
        [`${type}ot_importance`]: oti,
        [`${type}parent_importance`]: pi,
        [`${type}ot_performance`]: otp,
        [`${type}parent_performance`]: pp,
        [`${type}ot_satisfaction`]: ots,
        [`${type}parent_satisfaction`]: ps
      });

      this.setState({ changed: false });
    }
  };

  render() {
    const {
      goal,
      ot_importance,
      parent_importance,
      ot_performance,
      parent_performance,
      ot_satisfaction,
      parent_satisfaction
    } = this.state;

    const { number, title } = this.props;

    const importanceArray = [
      '-',
      '1 - not at all important',
      '2 - not important',
      '3 - not very important',
      '4 - somewhat important',
      '5 - somewhat important',
      '6 - important',
      '7 - important',
      '8 - very important',
      '9 - very important',
      '10 - extremely important'
    ];

    const performanceArray = [
      '-',
      '1 - unable to perform',
      '2 - limited performance',
      '3 - limited performance',
      '4 - somewhat able to perform',
      '5 - somewhat able to perform',
      '6 - able to perform',
      '7 - able to perform',
      '8 - performs well',
      '9 - performs very well',
      '10 - performs extremely well'
    ];

    const satisfactionArray = [
      '-',
      '1 - not at all satisfied',
      '2 - not satisfied',
      '3 - not very satisfied',
      '4 - somewhat satisfied',
      '5 - somewhat satisfied',
      '6 - satisfied',
      '7 - satisfied',
      '8 - very satisfied',
      '9 - very satisfied',
      '10 - extremely satisfied'
    ];

    return (
      <div
        onMouseLeave={() =>
          this.handleTherapyGoalsUpdate(
            goal,
            ot_importance,
            parent_importance,
            ot_performance,
            parent_performance,
            ot_satisfaction,
            parent_satisfaction
          )
        }
        className="TherapyGoals"
      >
        <div className="therapy-domain">
          <div className="therapy-domain-header">
            <p>{number}</p>

            <h4>{title}</h4>
          </div>

          <textarea
            onChange={event => this.handleGoalsChange(event)}
            value={goal}
            className="modulation-goal"
            placeholder="goal"
          />
        </div>

        <div className="therapy-importance">
          <h4 className="category-title">Importance</h4>

          <h5>OT</h5>

          <p style={ot_importance === 0 ? { opacity: 0 } : null}>
            {importanceArray[ot_importance]}
          </p>

          <Range
            value={ot_importance}
            fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
            trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
            height={6}
            width="100%"
            thumbSize={14}
            thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
            onChange={value => this.handleRangeChange(value, 'ot_importance')}
            min={0}
            max={10}
          />

          <h5>Parent</h5>

          <p style={parent_importance === 0 ? { opacity: 0 } : null}>
            {importanceArray[parent_importance]}
          </p>

          <Range
            value={parent_importance}
            fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
            trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
            height={6}
            width="100%"
            thumbSize={14}
            thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
            onChange={value =>
              this.handleRangeChange(value, 'parent_importance')
            }
            min={0}
            max={10}
          />
        </div>

        <div className="therapy-performance">
          <h4 className="category-title">Performance</h4>

          <h5>OT</h5>

          <p style={ot_performance === 0 ? { opacity: 0 } : null}>
            {performanceArray[ot_performance]}
          </p>

          <Range
            value={ot_performance}
            fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
            trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
            height={6}
            width="100%"
            thumbSize={14}
            thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
            onChange={value => this.handleRangeChange(value, 'ot_performance')}
            min={0}
            max={10}
          />

          <h5>Parent</h5>

          <p style={parent_performance === 0 ? { opacity: 0 } : null}>
            {performanceArray[parent_performance]}
          </p>

          <Range
            value={parent_performance}
            fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
            trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
            height={6}
            width="100%"
            thumbSize={14}
            thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
            onChange={value =>
              this.handleRangeChange(value, 'parent_performance')
            }
            min={0}
            max={10}
          />
        </div>

        <div className="therapy-satisfaction">
          <h4 className="category-title">Satisfaction</h4>

          <h5>OT</h5>

          <p style={ot_satisfaction === 0 ? { opacity: 0 } : null}>
            {satisfactionArray[ot_satisfaction]}
          </p>

          <Range
            value={ot_satisfaction}
            fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
            trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
            height={6}
            width="100%"
            thumbSize={14}
            thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
            onChange={value => this.handleRangeChange(value, 'ot_satisfaction')}
            min={0}
            max={10}
          />

          <h5>Parent</h5>

          <p style={parent_satisfaction === 0 ? { opacity: 0 } : null}>
            {satisfactionArray[parent_satisfaction]}
          </p>

          <Range
            value={parent_satisfaction}
            fillColor={{ r: 167, g: 169, b: 172, a: 1 }}
            trackColor={{ r: 241, g: 242, b: 242, a: 1 }}
            height={6}
            width="100%"
            thumbSize={14}
            thumbColor={{ r: 167, g: 169, b: 172, a: 1 }}
            onChange={value =>
              this.handleRangeChange(value, 'parent_satisfaction')
            }
            min={0}
            max={10}
          />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = store => ({
  selectedTherapyGoal: store.selectedTherapyGoal
});

export const mapDispatchToProps = dispatch => ({
  getTherapyGoal: (id, goalObj) => {
    dispatch(actions.getTherapyGoal(id, goalObj));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TherapyGoals);

TherapyGoals.propTypes = {
  category: PropTypes.string,
  selectedTherapyGoal: PropTypes.object,
  getTherapyGoal: PropTypes.func,
  number: PropTypes.string,
  title: PropTypes.string
};
