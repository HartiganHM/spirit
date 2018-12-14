/*eslint-disable max-len*/

const formatTherapyGoalData = (rawData) => {

  rawData = rawData.sort((aa, bb) => aa.id - bb.id);

  let therapyGoals = [
    { title: 'Modulation Goal', dbName: 'modulation_goal', value: null },
    { title: 'Modulation Importance - OT', dbName: 'modulation_ot_importance', value: null },
    { title: 'Modulation Importance - Parent', dbName: 'modulation_parent_importance', value: null },
    { title: 'Modulation Performance - OT', dbName: 'modulation_ot_performance', value: null },
    { title: 'Modulation Performance - Parent', dbName: 'modulation_parent_performance', value: null },
    { title: 'Modulation Satisfaction - OT', dbName: 'modulation_ot_satisfaction', value: null },
    { title: 'Modulation Satisfaction - Parent', dbName: 'modulation_parent_satisfaction', value: null },
    { title: 'Posture Goal', dbName: 'posture_goal', value: null },
    { title: 'Posture Importance - OT', dbName: 'posture_ot_importance', value: null },
    { title: 'Posture Importance - Parent', dbName: 'posture_parent_importance', value: null },
    { title: 'Posture Performance - OT', dbName: 'posture_ot_performance', value: null },
    { title: 'Posture Performance - Parent', dbName: 'posture_parent_performance', value: null },
    { title: 'Posture Satisfaction - OT', dbName: 'posture_ot_satisfaction', value: null },
    { title: 'Posture Satisfaction - Parent', dbName: 'posture_parent_satisfaction', value: null },
    { title: 'Sensory Discrimination Goal', dbName: 'sensory_discrimination_goal', value: null },
    { title: 'Sensory Discrimination Importance - OT', dbName: 'sensory_discrimination_ot_importance', value: null },
    { title: 'Sensory Discrimination Importance - Parent', dbName: 'sensory_discrimination_parent_importance', value: null },
    { title: 'Sensory Discrimination Performance - OT', dbName: 'sensory_discrimination_ot_performance', value: null },
    { title: 'Sensory Discrimination Performance - Parent', dbName: 'sensory_discrimination_parent_performance', value: null },
    { title: 'Sensory Discrimination Satisfaction - OT', dbName: 'sensory_discrimination_ot_satisfaction', value: null },
    { title: 'Sensory Discrimination Satisfaction - Parent', dbName: 'sensory_discrimination_parent_satisfaction', value: null },
    { title: 'Social/Emotional Goal', dbName: 'social_emotional_goal', value: null },
    { title: 'Social/Emotional Importance - OT', dbName: 'social_emotional_ot_importance', value: null },
    { title: 'Social/Emotional Importance - Parent', dbName: 'social_emotional_parent_importance', value: null },
    { title: 'Social/Emotional Performance - OT', dbName: 'social_emotional_ot_performance', value: null },
    { title: 'Social/Emotional Performance - Parent', dbName: 'social_emotional_parent_performance', value: null },
    { title: 'Social/Emotional Satisfaction - OT', dbName: 'social_emotional_ot_satisfaction', value: null },
    { title: 'Social/Emotional Satisfaction - Parent', dbName: 'social_emotional_parent_satisfaction', value: null },
    { title: 'Executive Functioning Goal', dbName: 'executive_functioning_goal', value: null },
    { title: 'Executive Functioning Importance - OT', dbName: 'executive_functioning_ot_importance', value: null },
    { title: 'Executive Functioning Importance - Parent', dbName: 'executive_functioning_parent_importance', value: null },
    { title: 'Executive Functioning Performance - OT', dbName: 'executive_functioning_ot_performance', value: null },
    { title: 'Executive Functioning Performance - Parent', dbName: 'executive_functioning_parent_performance', value: null },
    { title: 'Executive Functioning Satisfaction - OT', dbName: 'executive_functioning_ot_satisfaction', value: null },
    { title: 'Executive Functioning Satisfaction - Parent', dbName: 'executive_functioning_parent_satisfaction', value: null }
  ];

  rawData.forEach(object => {
    therapyGoals.forEach(cleanObj => {
      cleanObj.value = object[cleanObj.dbName];
    });
  });

  return therapyGoals;
};

export default formatTherapyGoalData;