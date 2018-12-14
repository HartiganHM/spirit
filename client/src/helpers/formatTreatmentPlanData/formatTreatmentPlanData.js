/*eslint-disable max-len*/

const formatTreatmentPlanData = (rawData) => {
  rawData = rawData.sort((aa, bb) => aa.id - bb.id);

  let treatmentPlans = [
    { title: 'Modulation - Sensory', dbName: 'modulation_sensory', value: null },
    { title: 'Modulation - Task', dbName: 'modulation_task', value: null },
    { title: 'Modulation - Environment', dbName: 'modulation_environment', value: null },
    { title: 'Modulation - Predictability', dbName: 'modulation_predictability', value: null },
    { title: 'Modulation - Self Regulation', dbName: 'modulation_self_regulation', value: null },
    { title: 'Modulation - Interaction', dbName: 'modulation_interaction', value: null },
    { title: 'Modulation - JRC/AR Notes', dbName: 'modulation_JRC_AR_notes', value: null },
    { title: 'Posture - Sensory', dbName: 'posture_sensory', value: null },
    { title: 'Posture - Task', dbName: 'posture_task', value: null },
    { title: 'Posture - Environment', dbName: 'posture_environment', value: null },
    { title: 'Posture - Predictability', dbName: 'posture_predictability', value: null },
    { title: 'Posture - Self Regulation', dbName: 'posture_self_regulation', value: null },
    { title: 'Posture - Interaction', dbName: 'posture_interaction', value: null },
    { title: 'Posture - JRC/AR Notes', dbName: 'posture_JRC_AR_notes', value: null },
    { title: 'Sensory Discrimination - Sensory', dbName: 'sensory_discrimination_sensory', value: null },
    { title: 'Sensory Discrimination - Task', dbName: 'sensory_discrimination_task', value: null },
    { title: 'Sensory Discrimination - Environment', dbName: 'sensory_discrimination_environment', value: null },
    { title: 'Sensory Discrimination - Predictability', dbName: 'sensory_discrimination_predictability', value: null },
    { title: 'Sensory Discrimination - Self Regulation', dbName: 'sensory_discrimination_self_regulation', value: null },
    { title: 'Sensory Discrimination - Interaction', dbName: 'sensory_discrimination_interaction', value: null },
    { title: 'Sensory Discrimination - JRC/AR Notes', dbName: 'sensory_discrimination_JRC_AR_notes', value: null },
    { title: 'Social/Emotional - Sensory', dbName: 'social_emotional_sensory', value: null },
    { title: 'Social/Emotional - Task', dbName: 'social_emotional_task', value: null },
    { title: 'Social/Emotional - Environment', dbName: 'social_emotional_environment', value: null },
    { title: 'Social/Emotional - Predictability', dbName: 'social_emotional_predictability', value: null },
    { title: 'Social/Emotional - Self Regulation', dbName: 'social_emotional_self_regulation', value: null },
    { title: 'Social/Emotional - Interaction', dbName: 'social_emotional_interaction', value: null },
    { title: 'Social/Emotional - JRC/AR Notes', dbName: 'social_emotional_JRC_AR_notes', value: null },
    { title: 'Executive Functioning - Sensory', dbName: 'executive_functioning_sensory', value: null },
    { title: 'Executive Functioning - Task', dbName: 'executive_functioning_task', value: null },
    { title: 'Executive Functioning - Environment', dbName: 'executive_functioning_environment', value: null },
    { title: 'Executive Functioning - Predictability', dbName: 'executive_functioning_predictability', value: null },
    { title: 'Executive Functioning - Self Regulation', dbName: 'executive_functioning_self_regulation', value: null },
    { title: 'Executive Functioning - Interaction', dbName: 'executive_functioning_interaction', value: null },
    { title: 'Executive Functioning - JRC/AR Notes', dbName: 'executive_functioning_JRC_AR_notes', value: null }
  ];

  rawData.forEach(object => {
    treatmentPlans.forEach(cleanObj => {
      cleanObj.value = object[cleanObj.dbName];
    });
  });

  return treatmentPlans;
};

export default formatTreatmentPlanData;
