import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions/index';
import './ConcernRow.css';

export class ConcernRow extends Component {
  state = {
    hover: false
  };

  selectEnter = () => {
    this.setState({ hover: true });

    let activeDomains = Object.keys(this.props).reduce((accum, prop) => {
      if (prop.length === 2 && this.props[prop]) {
        const activeDomain = [...prop].pop();
        accum.push(activeDomain);
      }
      return accum;
    }, []);

    const samDots = [].slice.call(document.querySelectorAll('.sam-dots'));
    samDots.forEach((dot, index) => {
      if (activeDomains.includes((index + 1).toString())) {
        document
          .querySelector(`.sam-dot-${index + 1}`)
          .classList.add('sam-hover');
      }
    });
  };

  selectLeave = () => {
    this.setState({ hover: false });

    const samDots = [].slice.call(document.querySelectorAll('.sam-dots'));
    samDots.forEach(dot => {
      dot.classList.remove('sam-hover');
    });
  };

  determineDomainClass = (domain, hover) => {
    if (!domain) {
      return 'domains';
    } else if (!hover) {
      return 'domains domains-true';
    } else {
      return 'domains domains-true domains-hover';
    }
  };

  render() {
    const { id, concern, d1, d2, d3, d4, d5, d6, notes } = this.props;
    const { hover } = this.state;

    return (
      <div className="ConcernRow">
        <p className="concern-left">{concern}</p>

        <p>
          <span className={this.determineDomainClass(d1, hover)}>1</span>
          <span className={this.determineDomainClass(d2, hover)}>2</span>
          <span className={this.determineDomainClass(d3, hover)}>3</span>
          <span className={this.determineDomainClass(d4, hover)}>4</span>
          <span className={this.determineDomainClass(d5, hover)}>5</span>
          <span className={this.determineDomainClass(d6, hover)}>6</span>
        </p>

        <p className="concern-notes">{notes}</p>

        <Link to={`/spirit/concerns/${id}/sessions`}>
          <button
            className="select-concern-button"
            onClick={() => this.props.getConcern(id)}
            onMouseEnter={() => this.selectEnter()}
            onMouseOut={() => this.selectLeave()}
          >
            Start Process
          </button>
        </Link>
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getConcern: concernId => dispatch(actions.getConcern(concernId))
});

export default connect(
  null,
  mapDispatchToProps
)(ConcernRow);

ConcernRow.propTypes = {
  id: PropTypes.number,
  concern: PropTypes.string,
  d1: PropTypes.bool,
  d2: PropTypes.bool,
  d3: PropTypes.bool,
  d4: PropTypes.bool,
  d5: PropTypes.bool,
  d6: PropTypes.bool,
  notes: PropTypes.string,
  getConcern: PropTypes.func
};
