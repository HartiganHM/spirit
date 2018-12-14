import React, { Component } from 'react';
import TreatmentPlanModule from '../../containers/TreatmentPlanModule/TreatmentPlanModule';
import './TreatmentPlans.css';

class TreatmentPlans extends Component {
  constructor() {
    super();

    this.state = {
      currentTab: 'modulation'
    };
  }

  handleTabChange = name => {
    this.setState({ currentTab: name });
  };

  render() {
    const { currentTab } = this.state;
    const tabHeaderTitles = [
      'Sensory Modulation',
      'Postural',
      'Sensory Discrimination',
      'Social/Emotional Development',
      'Executive Functioning'
    ];

    const tabHeaderClass = [
      'modulation',
      'postural',
      'sensory',
      'social',
      'executive'
    ];

    const treatmentModuleTypes = [
      'modulation_',
      'postural_',
      'sensory_discrimination_',
      'social_emotional_',
      'executive_functioning_'
    ];

    const tabHeaders = tabHeaderClass.map((className, index) => {
      return (
        <div
          key={index}
          className={
            currentTab === className
              ? `treatment-header treatment-header-active treatment-header-${className}`
              : `treatment-header treatment-header-${className}`
          }
          onClick={() => this.handleTabChange(className)}
        >
          <h4>{tabHeaderTitles[index]}</h4>
        </div>
      );
    });

    const treatmentModules = treatmentModuleTypes.map((type, index) => {
      return (
        <div
          key={index}
          className={
            currentTab === tabHeaderClass[index]
              ? 'treatment-body'
              : 'treatment-body display-none'
          }
        >
          <TreatmentPlanModule type={type} />
        </div>
      );
    });

    return (
      <div className="TreatmentPlans">
        <div className="treatment-header-tabs">{tabHeaders}</div>

        <div className="module-container">{treatmentModules}</div>
      </div>
    );
  }
}

export default TreatmentPlans;
