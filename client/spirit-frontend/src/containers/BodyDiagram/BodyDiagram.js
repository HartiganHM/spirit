/*eslint-disable camelcase*/

import React, { Component } from 'react';
import { bodyDiagram } from '../../language/language';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import * as actions from '../../actions';
import './BodyDiagram.css';

export class BodyDiagram extends Component {
  state = {
    part1: false,
    part2: false,
    part3: false,
    part4: false,
    part5: false,
    part6: false,
    part7: false,
    part8: false,
    hover1: false,
    hover2: false,
    hover3: false,
    hover4: false,
    hover5: false,
    hover6: false,
    hover7: false,
    hover8: false,
    changed: false
  };

  componentDidMount() {
    const { selectedProcess } = this.props;
    const bodyPropertiesArray = [
      'pos_4_core',
      'pos_4_shoulder',
      'pos_4_pelvic',
      'pos_4_head',
      'pos_4_eyes',
      'pos_4_hand',
      'pos_4_lower',
      'pos_4_foot'
    ];

    const matchedComponentValues = bodyPropertiesArray.map(componentName => {
      const matchedComponent = Object.keys(selectedProcess).find(
        component => component === componentName
      );
      const valueFromStore = selectedProcess[matchedComponent];

      if (valueFromStore === 'true' || valueFromStore === true) {
        return true;
      } else {
        return false;
      }
    });

    this.loadComponentValue(matchedComponentValues);
  }

  loadComponentValue = matchedComponentValues => {
    const bodyPartsState = [
      'part1',
      'part2',
      'part3',
      'part4',
      'part5',
      'part6',
      'part7',
      'part8'
    ];

    bodyPartsState.forEach((bodyPart, index) => {
      this.setState({ [bodyPart]: matchedComponentValues[index] });
    });
  };

  hoverMe = number => {
    this.setState({ [`hover${number}`]: true });
  };

  unHoverMe = number => {
    this.setState({ [`hover${number}`]: false });
  };

  togglePart = number => {
    this.setState({ [`part${number}`]: !this.state[`part${number}`] });
    this.setState({ changed: true });
  };

  handleDataUpdate = (p1, p2, p3, p4, p5, p6, p7, p8) => {
    const { changed } = this.state;
    const { updateProcessPerformanceComponent, selectedProcess } = this.props;

    const bodyObject = {
      pos_4_core: p1,
      pos_4_shoulder: p2,
      pos_4_pelvic: p3,
      pos_4_head: p4,
      pos_4_eyes: p5,
      pos_4_hand: p6,
      pos_4_lower: p7,
      pos_4_foot: p8
    };

    if (changed === true) {
      updateProcessPerformanceComponent(selectedProcess.id, bodyObject);
      this.setState({ changed: false });
    }
  };

  checkThreadConnections = () => {
    const { selectedProcess, storedThreadConnections } = this.props;
    const bodyCheck = selectedProcess['pos_4_core'];

    if (bodyCheck !== null) {
      return 'body-key';
    }

    let className;
    const bodyPropertiesArray = [
      'pos_4_core',
      'pos_4_shoulder',
      'pos_4_pelvic',
      'pos_4_head',
      'pos_4_eyes',
      'pos_4_hand',
      'pos_4_lower',
      'pos_4_foot'
    ];

    const matchedConnections = bodyPropertiesArray.map(bodyPart => {
      return { [bodyPart]: storedThreadConnections[bodyPart] };
    });

    const markedValues = matchedConnections.filter(
      object => Object.values(object)[0] !== false
    );

    markedValues.length
      ? (className = 'body-key thread-connection')
      : (className = 'body-key');

    return className;
  };

  render() {
    const {
      part1,
      part2,
      part3,
      part4,
      part5,
      part6,
      part7,
      part8
    } = this.state;

    const {
      hover1,
      hover2,
      hover3,
      hover4,
      hover5,
      hover6,
      hover7,
      hover8
    } = this.state;

    return (
      <div
        className="BodyDiagram"
        onMouseLeave={() =>
          this.handleDataUpdate(
            part1,
            part2,
            part3,
            part4,
            part5,
            part6,
            part7,
            part8
          )
        }
      >
        <h4 className="category-title">{bodyDiagram.title}</h4>
        <div className={this.checkThreadConnections()}>
          <h6
            className={part1 || hover1 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(1)}
            onMouseOver={() => this.hoverMe(1)}
            onMouseOut={() => this.unHoverMe(1)}
          >
            {bodyDiagram.coreAbdominal}
          </h6>
          <h6
            className={part2 || hover2 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(2)}
            onMouseOver={() => this.hoverMe(2)}
            onMouseOut={() => this.unHoverMe(2)}
          >
            {bodyDiagram.shoulder}
          </h6>
          <h6
            className={part3 || hover3 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(3)}
            onMouseOver={() => this.hoverMe(3)}
            onMouseOut={() => this.unHoverMe(3)}
          >
            {bodyDiagram.pelvic}
          </h6>
          <h6
            className={part4 || hover4 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(4)}
            onMouseOver={() => this.hoverMe(4)}
            onMouseOut={() => this.unHoverMe(4)}
          >
            {bodyDiagram.head}
          </h6>
          <h6
            className={part5 || hover5 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(5)}
            onMouseOver={() => this.hoverMe(5)}
            onMouseOut={() => this.unHoverMe(5)}
          >
            {bodyDiagram.eyes}
          </h6>
          <h6
            className={part6 || hover6 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(6)}
            onMouseOver={() => this.hoverMe(6)}
            onMouseOut={() => this.unHoverMe(6)}
          >
            {bodyDiagram.hand}
          </h6>
          <h6
            className={part7 || hover7 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(7)}
            onMouseOver={() => this.hoverMe(7)}
            onMouseOut={() => this.unHoverMe(7)}
          >
            {bodyDiagram.lower}
          </h6>
          <h6
            className={part8 || hover8 ? 'hover-purple-color' : null}
            onClick={() => this.togglePart(8)}
            onMouseOver={() => this.hoverMe(8)}
            onMouseOut={() => this.unHoverMe(8)}
          >
            {bodyDiagram.foot}
          </h6>

          <div
            onClick={() => this.togglePart(1)}
            onMouseOver={() => this.hoverMe(1)}
            onMouseOut={() => this.unHoverMe(1)}
            className={
              part1 || hover1 ? 'parts part1 hover-purple-bg' : 'parts part1'
            }
          >
            <p>1</p>
          </div>
          <div
            onClick={() => this.togglePart(2)}
            onMouseOver={() => this.hoverMe(2)}
            onMouseOut={() => this.unHoverMe(2)}
            className={
              part2 || hover2 ? 'parts part2 hover-purple-bg' : 'parts part2'
            }
          >
            <p>2</p>
          </div>
          <div
            onClick={() => this.togglePart(3)}
            onMouseOver={() => this.hoverMe(3)}
            onMouseOut={() => this.unHoverMe(3)}
            className={
              part3 || hover3 ? 'parts part3 hover-purple-bg' : 'parts part3'
            }
          >
            <p>3</p>
          </div>
          <div
            onClick={() => this.togglePart(4)}
            onMouseOver={() => this.hoverMe(4)}
            onMouseOut={() => this.unHoverMe(4)}
            className={
              part4 || hover4 ? 'parts part4 hover-purple-bg' : 'parts part4'
            }
          >
            <p>4</p>
          </div>
          <div
            onClick={() => this.togglePart(5)}
            onMouseOver={() => this.hoverMe(5)}
            onMouseOut={() => this.unHoverMe(5)}
            className={
              part5 || hover5 ? 'parts part5 hover-purple-bg' : 'parts part5'
            }
          >
            <p>5</p>
          </div>
          <div
            onClick={() => this.togglePart(6)}
            onMouseOver={() => this.hoverMe(6)}
            onMouseOut={() => this.unHoverMe(6)}
            className={
              part6 || hover6 ? 'parts part6 hover-purple-bg' : 'parts part6'
            }
          >
            <p>6</p>
          </div>
          <div
            onClick={() => this.togglePart(7)}
            onMouseOver={() => this.hoverMe(7)}
            onMouseOut={() => this.unHoverMe(7)}
            className={
              part7 || hover7 ? 'parts part7 hover-purple-bg' : 'parts part7'
            }
          >
            <p>7</p>
          </div>
          <div
            onClick={() => this.togglePart(8)}
            onMouseOver={() => this.hoverMe(8)}
            onMouseOut={() => this.unHoverMe(8)}
            className={
              part8 || hover8 ? 'parts part8 hover-purple-bg' : 'parts part8'
            }
          >
            <p>8</p>
          </div>
        </div>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BodyDiagram);

BodyDiagram.propTypes = {
  selectedProcess: PropTypes.object,
  updateProcessPerformanceComponent: PropTypes.func,
  storedThreadConnections: PropTypes.object
};
