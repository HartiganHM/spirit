/*eslint-disable camelcase*/
/*eslint-disable id-length*/

const processProcessesData = (processData, withFilterSort) => {
  processData = processData.sort((a, b) => a.id - b.id);

  let cleanExecutive = [
    { title: 'Created Data', dbName: 'created_at', values: [] },
    {
      title: 'Orient EYES-EARS-SELF to GOAL',
      dbName: 'exe_1_orient',
      values: []
    },
    { title: 'Inhibition', dbName: 'exe_1_inhibition', values: [] },
    { title: 'Working Memory', dbName: 'exe_2a_working', values: [] },
    { title: 'Shifting', dbName: 'exe_2a_shifting', values: [] },
    { title: 'Verbal', dbName: 'exe_2b_verbal', values: [] },
    { title: 'Spatial', dbName: 'exe_2b_spatial', values: [] },
    { title: 'General', dbName: 'exe_2b_general', values: [] },
    { title: 'Global/Local', dbName: 'exe_2b_global', values: [] },
    { title: 'Flexibility', dbName: 'exe_2b_flexibility', values: [] },
    { title: 'Initiation', dbName: 'exe_3_initiation', values: [] },
    { title: 'Planning', dbName: 'exe_3_planning', values: [] },
    { title: 'Sequencing', dbName: 'exe_3_sequencing', values: [] },
    { title: 'Monitoring', dbName: 'exe_3_monitoring', values: [] },
    {
      title: 'Future-Oriented/Goal-Directed',
      dbName: 'exe_4a_future',
      values: []
    },
    {
      title: 'Spatial/Temporal Organization',
      dbName: 'exe_4a_spatial',
      values: []
    },
    { title: 'Problem Solving', dbName: 'exe_4a_problem', values: [] },
    { title: 'Reflective Thinking', dbName: 'exe_4a_reflective', values: [] },
    {
      title: 'Internalized Language',
      dbName: 'exe_4a_internalized',
      values: []
    },
    { title: 'Motivational Bias', dbName: 'exe_4b_motivational', values: [] },
    { title: 'Effortful Control', dbName: 'exe_4b_effortful', values: [] },
    { title: 'Self-Control', dbName: 'exe_4b_self_control', values: [] },
    { title: 'Self-Regulation', dbName: 'exe_4b_self_regulation', values: [] },
    { title: 'Self-Compassion', dbName: 'exe_4b_self_compassion', values: [] }
  ];

  let cleanModulation = [
    { title: 'Created Data', dbName: 'created_at', values: [] },
    { title: 'Vestibular', dbName: 'mod_h_vestibular', values: [] },
    { title: 'Proprioception', dbName: 'mod_h_proprioception', values: [] },
    { title: 'Tactile', dbName: 'mod_h_tactile', values: [] },
    { title: 'Auditory', dbName: 'mod_h_auditory', values: [] },
    { title: 'Visual', dbName: 'mod_h_visual', values: [] },
    { title: 'Intero', dbName: 'mod_h_intero', values: [] },
    { title: 'Defensiveness', dbName: 'mod_1_defensiveness', values: [] },
    { title: 'Over', dbName: 'mod_1_over', values: [] },
    { title: 'Under', dbName: 'mod_1_under', values: [] },
    { title: 'Variable', dbName: 'mod_1_variable', values: [] },
    { title: 'Attention', dbName: 'mod_2_attention', values: [] },
    { title: 'Action', dbName: 'mod_2_action', values: [] },
    { title: 'Affect', dbName: 'mod_2_affect', values: [] },
    { title: 'Autonomic', dbName: 'mod_2_autonomic', values: [] },
    { title: 'Arousability', dbName: 'mod_2_arousability', values: [] },
    { title: 'Physiological', dbName: 'mod_3_physiological', values: [] },
    { title: 'Sensory', dbName: 'mod_3_sensory', values: [] },
    { title: 'Motor', dbName: 'mod_3_motor', values: [] },
    { title: 'Emotional', dbName: 'mod_3_emotional', values: [] },
    { title: 'Cognitive', dbName: 'mod_3_cognitive', values: [] },
    { title: 'Social', dbName: 'mod_3_social', values: [] },
    { title: 'Prosocial', dbName: 'mod_3_prosocial', values: [] },
    { title: 'Passive', dbName: 'mod_4a_passive', values: [] },
    { title: 'Co-Regulation', dbName: 'mod_4a_co_regulation', values: [] },
    { title: 'Approach', dbName: 'mod_4a_approach', values: [] },
    { title: 'Adaptive', dbName: 'mod_4a_adaptive', values: [] },
    { title: 'Active', dbName: 'mod_4b_active', values: [] },
    { title: 'Self-Regulation', dbName: 'mod_4b_self_regulation', values: [] },
    { title: 'Avoid', dbName: 'mod_4b_avoid', values: [] },
    { title: 'Maladaptive', dbName: 'mod_4b_maladaptive', values: [] }
  ];

  let cleanPostural = [
    { title: 'Created Data', dbName: 'created_at', values: [] },
    { title: 'Vestibular', dbName: 'pos_h_vestibular', values: [] },
    { title: 'Proprioception', dbName: 'pos_h_proprioception', values: [] },
    { title: 'Tactile', dbName: 'pos_h_tactile', values: [] },
    { title: 'Auditory', dbName: 'pos_h_auditory', values: [] },
    { title: 'Visual', dbName: 'pos_h_visual', values: [] },
    { title: 'Intero', dbName: 'pos_h_intero', values: [] },
    { title: 'Outer Core', dbName: 'pos_1_outer', values: [] },
    { title: 'Inner Core', dbName: 'pos_1_inner', values: [] },
    { title: 'Stability', dbName: 'pos_2_stability', values: [] },
    { title: 'Mobility', dbName: 'pos_2_mobility', values: [] },
    { title: 'Tonic', dbName: 'pos_2_tonic', values: [] },
    { title: 'Phasic', dbName: 'pos_2_phasic', values: [] },
    { title: 'Muscle Tone', dbName: 'pos_2_muscle', values: [] },
    { title: 'Sagittal: Flex/Ext', dbName: 'pos_3_sagittal', values: [] },
    { title: 'Frontal: Lateral', dbName: 'pos_3_frontal', values: [] },
    { title: 'Transverse: Rotational', dbName: 'pos_3_transverse', values: [] },
    { title: 'Midlines of each plane', dbName: 'pos_3_midlines', values: [] },
    { title: 'Core Abdominal Control', dbName: 'pos_4_core', values: [] },
    { title: 'Shoulder Girdle Core', dbName: 'pos_4_shoulder', values: [] },
    { title: 'Pelvic Trunk/LE Core', dbName: 'pos_4_pelvic', values: [] },
    { title: 'Head/Neck to Trunk Core', dbName: 'pos_4_head', values: [] },
    { title: 'Eyes in Head Core', dbName: 'pos_4_eyes', values: [] },
    { title: 'Hand Control', dbName: 'pos_4_hand', values: [] },
    { title: 'Lower Extremity', dbName: 'pos_4_lower', values: [] },
    { title: 'Foot/Base of Support Core', dbName: 'pos_4_foot', values: [] },
    { title: 'Suck/Swallow/Breath', dbName: 'pos_5_suck', values: [] },
    {
      title: 'Ocular within Postural Control',
      dbName: 'pos_5_ocular',
      values: []
    },
    { title: 'Antigravity Control', dbName: 'pos_5_antigravity', values: [] },
    {
      title: 'Reflex Integration/Sensory Motor Patterns',
      dbName: 'pos_5_reflex',
      values: []
    },
    {
      title: 'Alignment/COG over BOS',
      dbName: 'pos_5_alignment_COG',
      values: []
    },
    {
      title: 'Alignment/Orient to Stimulus or Goal',
      dbName: 'pos_5_alignment_orient',
      values: []
    },
    { title: 'Anticipatory Control', dbName: 'pos_5_anticipatory', values: [] },
    {
      title: 'Interactive Oscillator and Imitative Action',
      dbName: 'pos_5_interactive',
      values: []
    },
    { title: 'Push/Pull/Reach', dbName: 'pos_6_push', values: [] },
    {
      title: 'Bilateral Symmetrical/Bilateral Asymmetrical/Unilateral',
      dbName: 'pos_6_bilateral',
      values: []
    },
    { title: 'Grasp/Release', dbName: 'pos_6_grasp', values: [] },
    {
      title: 'Strength/Endurance/Flexibility/BMI',
      dbName: 'pos_6_strength',
      values: []
    },
    { title: 'Effortful Control', dbName: 'pos_6_effortful', values: [] }
  ];

  let cleanSensory = [
    { title: 'Created Data', dbName: 'created_at', values: [] },
    { title: 'Vestibular', dbName: 'sen_h_vestibular', values: [] },
    { title: 'Proprioception', dbName: 'sen_h_proprioception', values: [] },
    { title: 'Tactile', dbName: 'sen_h_tactile', values: [] },
    { title: 'Auditory', dbName: 'sen_h_auditory', values: [] },
    { title: 'Visual', dbName: 'sen_h_visual', values: [] },
    { title: 'Intero', dbName: 'sen_h_intero', values: [] },
    { title: 'Ability to Recognize', dbName: 'sen_1_ability', values: [] },
    { title: 'Match', dbName: 'sen_1_match', values: [] },
    { title: 'Classification', dbName: 'sen_1_classification', values: [] },
    { title: 'Spatial Organization', dbName: 'sen_1_spatial', values: [] },
    { title: 'Figure Ground Perception', dbName: 'sen_1_figure', values: [] },
    {
      title: 'Inferences and Abstractions (logic)',
      dbName: 'sen_1_inferences',
      values: []
    },
    { title: 'Initiation', dbName: 'sen_2_initiation', values: [] },
    {
      title: 'Imitation (mimic or emulate?)',
      dbName: 'sen_2_imitation',
      values: []
    },
    {
      title: 'Affordance-based (obvious, imitative or expands?)',
      dbName: 'sen_2_affordance',
      values: []
    },
    { title: 'Generativity', dbName: 'sen_2_generativity', values: [] },
    { title: 'Sequencing', dbName: 'sen_3_sequencing', values: [] },
    {
      title: 'Sequencing/Gestalt',
      dbName: 'sen_3_sequencing_gestalt',
      values: []
    },
    { title: 'Schema Selection', dbName: 'sen_3_schema_selection', values: [] },
    { title: 'Schema Expansion', dbName: 'sen_3_schema_expansion', values: [] },
    { title: 'Modification', dbName: 'sen_3_modification', values: [] },
    { title: 'Timing', dbName: 'sen_4_timing', values: [] },
    { title: 'Timing/Force', dbName: 'sen_4_timing_force', values: [] },
    { title: 'Spatial', dbName: 'sen_4_spatial', values: [] },
    { title: 'Temporal', dbName: 'sen_4_temporal', values: [] },
    {
      title: 'Control (Postural; FF; FB)',
      dbName: 'sen_4_control',
      values: []
    },
    { title: 'Monitoring', dbName: 'sen_4_monitoring', values: [] },
    { title: 'Oral', dbName: 'sen_5_oral', values: [] },
    { title: 'Ocular', dbName: 'sen_5_ocular', values: [] },
    { title: 'Postural', dbName: 'sen_5_postural', values: [] },
    { title: 'Limb', dbName: 'sen_5_limb', values: [] },
    { title: 'Gross', dbName: 'sen_5_gross', values: [] },
    { title: 'Fine', dbName: 'sen_5_fine', values: [] },
    { title: 'Tool/Object', dbName: 'sen_5_tool', values: [] },
    {
      title: 'Projected Action Sequences',
      dbName: 'sen_5_projected',
      values: []
    },
    { title: 'Somatodyspraxia', dbName: 'sen_6_somatodyspraxia', values: [] },
    { title: 'Visual Dyspraxia', dbName: 'sen_6_visual', values: [] },
    { title: 'Generalized Dyspraxis', dbName: 'sen_6_generalized', values: [] },
    { title: 'BMC/Balance/Sequencing/ML', dbName: 'sen_6_bmc', values: [] },
    { title: 'Praxis on Verbal Command', dbName: 'sen_6_praxis', values: [] }
  ];

  let cleanSocial = [
    { title: 'Created Data', dbName: 'created_at', values: [] },
    { title: 'Regulation', dbName: 'soc_1_regulation', values: [] },
    { title: 'Engagement', dbName: 'soc_1_engagement', values: [] },
    { title: 'Reciprocity', dbName: 'soc_1_reciprocity', values: [] },
    { title: 'Problem Solving', dbName: 'soc_1_problem', values: [] },
    {
      title: 'Representational/Symbolic Thinking',
      dbName: 'soc_1_representation',
      values: []
    },
    { title: 'Triangular Thinking', dbName: 'soc_1_triangular', values: [] },
    { title: 'Comparative Thinking', dbName: 'soc_1_comparative', values: [] },
    { title: 'Reflective', dbName: 'soc_1_reflective', values: [] },
    {
      title: 'Self/Other Awareness',
      dbName: 'soc_2_self_awareness',
      values: []
    },
    { title: 'Joint Attention', dbName: 'soc_2_joint', values: [] },
    {
      title: 'Social Referencing',
      dbName: 'soc_2_social_referencing',
      values: []
    },
    { title: 'Imitation', dbName: 'soc_2_imitation', values: [] },
    {
      title: 'Inferential Thinking/Intention',
      dbName: 'soc_2_inferential',
      values: []
    },
    {
      title: 'Contingent Interaction/Reciprocal Actions',
      dbName: 'soc_2_contingent',
      values: []
    },
    { title: 'Theory of Mind', dbName: 'soc_2_theory', values: [] },
    { title: 'Central Coherence', dbName: 'soc_2_central', values: [] },
    { title: 'Mentalizing', dbName: 'soc_2_mentalizing', values: [] },
    { title: 'Empathy', dbName: 'soc_2_empathy', values: [] },
    {
      title: 'Social Perspective',
      dbName: 'soc_2_social_perspective',
      values: []
    },
    {
      title: 'Social Motivators AAAA',
      dbName: 'soc_2_social_motivators',
      values: []
    },
    {
      title: 'Pro-Social Motivation - Moral',
      dbName: 'soc_2_pro_social',
      values: []
    },
    {
      title: 'Affective/Valence Response',
      dbName: 'soc_3_affective',
      values: []
    },
    {
      title: 'Emotional Contagion',
      dbName: 'soc_3_emotional_contagion',
      values: []
    },
    {
      title: 'Activation of Low-Routes',
      dbName: 'soc_3_activation_low',
      values: []
    },
    {
      title: 'Emotional Cascade',
      dbName: 'soc_3_emotional_cascade',
      values: []
    },
    {
      title: 'Activation of High-Routes',
      dbName: 'soc_3_activation_high',
      values: []
    },
    {
      title: 'Emotional Differentiation',
      dbName: 'soc_3_emotional_differentiation',
      values: []
    },
    {
      title: 'Emotional Association and Memory',
      dbName: 'soc_3_emotional_association',
      values: []
    },
    { title: 'Self-Control', dbName: 'soc_3_self_control', values: [] },
    { title: 'Self-Regulation', dbName: 'soc_3_self_regulation', values: [] },
    { title: 'Self-Compassion', dbName: 'soc_3_self_compassion', values: [] },
    {
      title: 'Mental Health Support Indicated?',
      dbName: 'soc_4_mental',
      values: []
    },
    {
      title: 'Thoughts and/or emotions require intervention or medication?',
      dbName: 'soc_4_thoughts',
      values: []
    },
    {
      title: 'Attachment related care needed?',
      dbName: 'soc_4_attachments',
      values: []
    },
    {
      title: 'Trauma informed care needed?',
      dbName: 'soc_4_trauma',
      values: []
    }
  ];

  processData.forEach(object => {
    cleanExecutive.forEach(cleanObj => {
      cleanObj.values.push(object[cleanObj.dbName]);
    });

    cleanModulation.forEach(cleanObj => {
      cleanObj.values.push(object[cleanObj.dbName]);
    });

    cleanPostural.forEach(cleanObj => {
      cleanObj.values.push(object[cleanObj.dbName]);
    });

    cleanSensory.forEach(cleanObj => {
      cleanObj.values.push(object[cleanObj.dbName]);
    });

    cleanSocial.forEach(cleanObj => {
      cleanObj.values.push(object[cleanObj.dbName]);
    });
  });

  return {
    executive: withFilterSort
      ? sortProcessValues(filterProcessValues(cleanExecutive))
      : cleanExecutive,
    modulation: withFilterSort
      ? sortProcessValues(filterProcessValues(cleanModulation))
      : cleanModulation,
    postural: withFilterSort
      ? sortProcessValues(filterProcessValues(cleanPostural))
      : cleanPostural,
    sensory: withFilterSort
      ? sortProcessValues(filterProcessValues(cleanSensory))
      : cleanSensory,
    social: withFilterSort
      ? sortProcessValues(filterProcessValues(cleanSocial))
      : cleanSocial
  };
};

const sortProcessValues = processArray => {
  const sortingOrder = ['R', 'I', 'A', 'F', 'Yes', 'No'];

  const sortedArray = [];

  sortingOrder.forEach(order => {
    processArray.forEach(process => {
      if (process.values[0].includes(order)) {
        sortedArray.push(process);
      }
    });
  });

  return sortedArray;
};

const filterProcessValues = processArray => {
  const filteredArray = processArray.filter(process => {
    if (process.values[0] !== null && process.dbName !== 'created_at') {
      if (process.values[0] === true || process.values[0] === 'true') {
        process.values[0] = 'Yes';
      } else if (process.values[0] === false || process.values[0] === 'false') {
        process.values[0] = 'No';
      }

      return true;
    }

    return false;
  });

  return filteredArray;
};

export default processProcessesData;
