/*eslint-disable id-length*/
/*eslint-disable camelcase*/

import moment from 'moment';

const processSessionGoals = sessionData => {
  sessionData = sessionData.sort((a, b) => a.id - b.id);

  let cleanObj = [
    { created: [] },
    { session_id: [] },
    { executive: [] },
    { modulation: [] },
    { posture: [] },
    { sensory: [] },
    { social: [] }
  ];

  sessionData.forEach((goals, index) => {
    const exeTotal =
      goals.executive_functioning_ot_importance +
      goals.executive_functioning_ot_performance +
      goals.executive_functioning_ot_satisfaction;
    const modTotal =
      goals.modulation_ot_importance +
      goals.modulation_ot_performance +
      goals.modulation_ot_satisfaction;
    const posTotal =
      goals.posture_ot_importance +
      goals.posture_ot_performance +
      goals.posture_ot_satisfaction;
    const senTotal =
      goals.sensory_discrimination_ot_importance +
      goals.sensory_discrimination_ot_performance +
      goals.sensory_discrimination_ot_satisfaction;
    const socTotal =
      goals.social_emotional_ot_importance +
      goals.social_emotional_ot_performance +
      goals.social_emotional_ot_satisfaction;

    cleanObj[0].created.unshift({ date: moment(goals.created_at).format('l') });
    cleanObj[1].session_id.unshift({ id: goals.session_id });
    cleanObj[2].executive.unshift({
      x: index,
      y: exeTotal > 0 ? exeTotal : null
    });
    cleanObj[3].modulation.unshift({
      x: index,
      y: modTotal > 0 ? modTotal : null
    });
    cleanObj[4].posture.unshift({
      x: index,
      y: posTotal > 0 ? posTotal : null
    });
    cleanObj[5].sensory.unshift({
      x: index,
      y: senTotal > 0 ? senTotal : null
    });
    cleanObj[6].social.unshift({ x: index, y: socTotal > 0 ? socTotal : null });
  });

  return cleanObj;
};

export default processSessionGoals;
