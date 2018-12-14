/*eslint-disable camelcase*/

const modulationConnects = {
  mod_1_defensiveness: ['social', 'soc_1_engagement'],
  mod_1_over: ['social', 'soc_1_engagement'],
  mod_1_under: ['social', 'soc_1_engagement'],
  mod_1_variable: ['social', 'soc_1_engagement'],
  mod_2_action: ['postural', 'social'],
  mod_2_affect: ['social', 'mod_3_emotional'],
  mod_2_arousability: [
    'social',
    'executive',
    'exe_1_inhibition',
    'exe_4b_motivational'
  ],
  mod_2_attention: [
    'social',
    'soc_1_engagement',
    'soc_1_problem',
    'executive',
    'exe_2a_shifting'
  ],
  mod_2_autonomic: ['mod_3_physiological', 'mod_h_intero'],
  mod_3_cognitive: ['executive'],
  mod_3_emotional: ['social'],
  mod_3_motor: ['postural'],
  mod_3_physiological: ['mod_2_autonomic', 'mod_h_intero'],
  mod_3_prosocial: [
    'social',
    'soc_3_affective',
    'soc_2_self_awareness',
    'executive'
  ],
  mod_3_sensory: [
    'sensory',
    'mod_h_vestibular',
    'mod_h_proprioception',
    'mod_h_tactile',
    'mod_h_intero'
  ],
  mod_3_social: ['social'],
  mod_4a_adaptive: ['mod_4b_self_regulation'],
  mod_4a_approach: ['mod_4b_self_regulation'],
  mod_4a_co_regulation: [
    'social',
    'mod_4b_self_regulation',
    'soc_1_engagement',
    'soc_1_engagement',
    'soc_1_reciprocity',
    'soc_2_self_awareness'
  ],
  mod_4a_passive: ['mod_4b_self_regulation'],
  mod_4b_active: ['mod_4b_self_regulation'],
  mod_4b_avoid: ['mod_4b_self_regulation'],
  mod_4b_maladaptive: ['mod_4b_self_regulation'],
  mod_4b_self_regulation: [
    'social',
    'executive',
    'soc_3_self_regulation',
    'exe_4b_self_regulation'
  ],
  mod_h_auditory: ['postural', 'sensory', 'social', 'executive'],
  mod_h_intero: ['postural', 'sensory', 'social', 'executive'],
  mod_h_proprioception: ['postural', 'sensory', 'social', 'executive'],
  mod_h_tactile: ['postural', 'sensory', 'social', 'executive'],
  mod_h_vestibular: ['postural', 'sensory', 'social', 'executive'],
  mod_h_visual: ['postural', 'sensory', 'social', 'executive']
};

export default modulationConnects;
