/*eslint-disable camelcase*/

const sensoryConnections = {
  sen_1_ability: [
    'executive',
    'sen_2_affordance',
    'exe_2b_global',
    'sen_6_visual'
  ],
  sen_1_classification: ['sen_1_ability', 'executive'],
  sen_1_figure: ['sen_1_ability', 'sen_6_visual'],
  sen_1_inferences: ['sen_2_affordance'],
  sen_1_match: ['sen_1_ability'],
  sen_1_spatial: ['executive', 'exe_4a_spatial', 'sen_6_visual'],
  sen_2_affordance: ['sen_1_inferences'],
  sen_2_generativity: ['executive'],
  sen_2_imitation: [
    'postural',
    'social',
    'pos_5_interactive',
    'sen_2_imitation',
    'soc_2_imitation'
  ],
  sen_2_initiation: ['executive', 'exe_3_initiation'],
  sen_3_modification: ['executive', 'exe_3_monitoring'],
  sen_3_schema_expansion: ['sen_2_generativity', 'executive'],
  sen_3_schema_selection: ['executive'],
  sen_3_sequencing: ['executive', 'exe_3_sequencing'],
  sen_3_sequencing_gestalt: ['executive', 'exe_2b_global'],
  sen_4_control: ['postural'],
  sen_4_monitoring: ['executive', 'exe_3_monitoring', 'sen_3_modification'],
  sen_4_spatial: ['executive', 'exe_4a_spatial'],
  sen_4_temporal: ['executive', 'exe_4a_spatial'],
  sen_4_timing: ['executive', 'exe_4a_spatial', 'postural'],
  sen_4_timing_force: ['postural'],
  sen_5_fine: [
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder',
    'sen_5_postural',
    'sen_5_limb'
  ],
  sen_5_gross: [
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder'
  ],
  sen_5_limb: [
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder',
    'sen_5_gross',
    'sen_5_fine',
    'sen_5_postural'
  ],
  sen_5_ocular: [
    'exectuive',
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder',
    'exe_1_orient'
  ],
  sen_5_oral: [
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder',
    'pos_5_suck'
  ],
  sen_5_postural: [
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder'
  ],
  sen_5_projected: [
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder'
  ],
  sen_5_tool: [
    'postural',
    'pos_4_core',
    'pos_4_eyes',
    'pos_4_foot',
    'pos_4_hand',
    'pos_4_head',
    'pos_4_lower',
    'pos_4_pelvic',
    'pos_4_shoulder',
    'sen_5_postural',
    'sen_5_limb'
  ],
  sen_6_bmc: [
    'postural',
    'sen_h_vestibular',
    'sen_h_proprioception',
    'sen_h_tactile'
  ],
  sen_6_generalized: ['postural', 'executive'],
  sen_6_praxis: ['executive'],
  sen_6_somatodyspraxia: [
    'postural',
    'sen_h_vestibular',
    'sen_h_proprioception',
    'sen_h_tactile'
  ],
  sen_6_visual: [
    'postural',
    'sen_1_ability',
    'sen_1_match',
    'sen_1_classification',
    'sen_1_spatial'
  ],
  sen_h_auditory: ['modulation', 'postural', 'social', 'executive'],
  sen_h_intero: ['modulation', 'postural', 'social', 'executive'],
  sen_h_proprioception: ['modulation', 'postural', 'social', 'executive'],
  sen_h_tactile: ['modulation', 'postural', 'social', 'executive'],
  sen_h_vestibular: ['modulation', 'postural', 'social', 'executive'],
  sen_h_visual: ['modulation', 'postural', 'social', 'executive']
};

export default sensoryConnections;
