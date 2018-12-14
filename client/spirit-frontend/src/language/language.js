/*eslint-disable max-len*/
export const landing = {
  descriptor: `A clinical reasoning model for ensuring best practice in pediatric occupational therapy.`
};

export const userDashboard = {
  otDash: name => `${name} - OT Dashboard`,
  welcome: `Welcome to SpIRiT, `,
  seeClinic: `SEE CLINIC INFO`,
  addJoinClinic: `ADD/JOIN A CLINIC`,
  newPatients: `New Patients`,
  submit: `SUBMIT`,
  addNewPatientDetails: `Add NEW patient with 2 patient initials`,
  currentPatients: `Current Patients`,
  welcomeDirections1: `To start tracking your patients through SpIRiT, add a new clinic or join an existing one below.`,
  welcomeDirections2: `Joining an existing clinic will require a passcode which you can obtain from your your administrator.`,
  patientDirections1: `Each patient name is a combination of your clinic abbreviation, the patient's first and last initial, and a unique number identifier (ie CLI + AB + 10).`,
  patientDirections2: `Please keep this abstracted name in your personal patient records for future reference.`
};

export const createClinic = {
  addDirections1: `To add a new clinic, you must provide a clinic name and three letter abbreviation. This abbreviation will be used to abstract your patient's real name when adding them to SpIRiT©.`,
  addDirections2: `After submission, you will be provided with a passcode. This passcode will be used by other members in order to join your clinic.`,
  clinicNameError: `Please enter a clinic name and abbreviation`,
  clinicAbbreviationError: `Clinic abbreviation must be three characters long`,
  addClinicSuccess: passcode =>
    `Clinic successfully added! Your clinic passcode is ${passcode}.`,
  currentClinic: `Your Current Clinic`,
  memberOfClinic: `You are a member of: `,
  clinicAbbreviation: `Clinic Abbreviation: `,
  clinicPasscode: `Clinic Passcode: `,
  newClinicPlaceholder: `New Clinic Name`,
  clinicAbbreviationPlaceholder: `Choose a 3-letter abbreviation for your clinic`,
  submitClinic: `SUBMIT`,
  joinClinic: `JOIN EXISTING CLINIC`
};

export const joinClinic = {
  directions1: `To join an existing clinic on SpIRiT©, you must use a clinic's eight digit passcode. If you do not know your clinic's passcode, please contact your SpIRiT© administrator.`,
  directions2: `If your clinic has not been registered, click 'CREATE NEW CLINIC' below to learn how you can add your clinic and start using SpIRiT©.`
};

export const modulation = {
  header: {
    title: `Modulation Capacities: Sensory Modulation to Self-Regulation`,
    terms: [
      'Vestibular',
      'Proprioception',
      'Tactile',
      'Auditory',
      'Visual',
      'Intero'
    ],
    db: [
      'mod_h_vestibular',
      'mod_h_proprioception',
      'mod_h_tactile',
      'mod_h_auditory',
      'mod_h_visual',
      'mod_h_intero'
    ]
  },
  columns: {
    column1: {
      title: 'Capacities',
      terms: ['Defensiveness', 'Over', 'Under', 'Variable'],
      db: [
        'mod_1_defensiveness',
        'mod_1_over',
        'mod_1_under',
        'mod_1_variable'
      ],
      reminderPlacement: [null, '*', '*', '*', '*'],
      reminder: '* If selected, remember to make a hypothesized arousal chart'
    },
    column2: {
      title: 'Capacities',
      terms: ['Attention', 'Action', 'Affect', 'Autonomic', 'Arousability'],
      db: [
        'mod_2_attention',
        'mod_2_action',
        'mod_2_affect',
        'mod_2_autonomic',
        'mod_2_arousability'
      ],
      reminderPlacement: [null, null, null, null, '*']
    },
    column3: {
      title: 'Self-Regulation',
      terms: [
        'Physiological',
        'Sensory',
        'Motor',
        'Emotional',
        'Cognitive',
        'Social',
        'Prosocial'
      ],
      db: [
        'mod_3_physiological',
        'mod_3_sensory',
        'mod_3_motor',
        'mod_3_emotional',
        'mod_3_cognitive',
        'mod_3_social',
        'mod_3_prosocial'
      ]
    },
    column4A: {
      title: 'Regulatory Capacities',
      terms: ['Passive', 'Co-Regulation', 'Approach', 'Adaptive'],
      db: [
        'mod_4a_passive',
        'mod_4a_co_regulation',
        'mod_4a_approach',
        'mod_4a_adaptive'
      ]
    },
    column4B: {
      title: 'Regulatory Capacities',
      terms: ['Active', 'Self-Regulation', 'Avoid', 'Maladaptive'],
      db: [
        'mod_4b_active',
        'mod_4b_self_regulation',
        'mod_4b_avoid',
        'mod_4b_maladaptive'
      ]
    }
  }
};

export const postural = {
  header: {
    title: 'Postural/Core Movement Capacities',
    terms: [
      'Vestibular',
      'Proprioception',
      'Tactile',
      'Auditory',
      'Visual',
      'Intero'
    ],
    db: [
      'pos_h_vestibular',
      'pos_h_proprioception',
      'pos_h_tactile',
      'pos_h_auditory',
      'pos_h_visual',
      'pos_h_intero'
    ]
  },
  columns: {
    column1: {
      type: 'YesNo',
      title: 'Core Development',
      terms: ['Outer Core', 'Inner Core'],
      db: ['pos_1_outer', 'pos_1_inner']
    },
    column2: {
      title: 'Quality of Movement',
      terms: ['Stability', 'Mobility', 'Tonic', 'Phasic', 'Muscle Tone'],
      db: [
        'pos_2_stability',
        'pos_2_mobility',
        'pos_2_tonic',
        'pos_2_phasic',
        'pos_2_muscle'
      ]
    },
    column3: {
      title: 'Planes of Movement',
      terms: [
        'Sagittal: Flex/Ext',
        'Frontal: Lateral',
        'Transverse: Rotational',
        'Midlines of each plane'
      ],
      db: [
        'pos_3_sagittal',
        'pos_3_frontal',
        'pos_3_transverse',
        'pos_3_midlines'
      ]
    },
    column4: {
      type: 'BodyDiagram'
    },
    column5: {
      title: 'Automatic Actions',
      terms: [
        'Suck/Swallow/Breath',
        'Ocular within Postural Control',
        'Antigravity Control',
        'Reflex Integration/Sensory Motor Patterns',
        'Alignment/COG over BOS',
        'Alignment/Orient to Stimulus or Goal',
        'Anticipatory Control',
        'Interactive Oscillator and Imitative Action'
      ],
      db: [
        'pos_5_suck',
        'pos_5_ocular',
        'pos_5_antigravity',
        'pos_5_reflex',
        'pos_5_alignment_COG',
        'pos_5_alignment_orient',
        'pos_5_anticipatory',
        'pos_5_interactive'
      ]
    },
    column6: {
      title: 'Voluntary Actions',
      terms: [
        'Push/Pull/Reach',
        'Bilateral Symmetrical/Bilateral Asymmetrical/Unilateral',
        'Grasp/Release',
        'Strength/Endurance/Flexibility/BMI',
        'Effortful Control'
      ],
      db: [
        'pos_6_push',
        'pos_6_bilateral',
        'pos_6_grasp',
        'pos_6_strength',
        'pos_6_effortful'
      ]
    }
  }
};

export const sensory = {
  header: {
    title: 'Sensory Discrimination Capacities',
    terms: [
      'Vestibular',
      'Proprioception',
      'Tactile',
      'Auditory',
      'Visual',
      'Intero'
    ],
    db: [
      'sen_h_vestibular',
      'sen_h_proprioception',
      'sen_h_tactile',
      'sen_h_auditory',
      'sen_h_visual',
      'sen_h_intero'
    ]
  },
  columns: {
    column1: {
      title: 'Sensory Discrimination / Perceptual Skills',
      terms: [
        'Ability to Recognize',
        'Match',
        'Classification',
        'Spatial Organization',
        'Figure Ground Perception',
        'Inferences and Abstractions (logic)'
      ],
      db: [
        'sen_1_ability',
        'sen_1_match',
        'sen_1_classification',
        'sen_1_spatial',
        'sen_1_figure',
        'sen_1_inferences'
      ]
    },
    column2: {
      title: 'Ideation',
      terms: [
        'Initiation',
        'Imitation (mimic or emulate?)',
        'Affordance-based (obvious, imitative or expands?)',
        'Generativity'
      ],
      db: [
        'sen_2_initiation',
        'sen_2_imitation',
        'sen_2_affordance',
        'sen_2_generativity'
      ]
    },
    column3: {
      title: 'Planning',
      terms: [
        'Sequencing',
        'Sequencing/Gestalt',
        'Schema Selection',
        'Schema Expansion',
        'Modification'
      ],
      db: [
        'sen_3_sequencing',
        'sen_3_sequencing_gestalt',
        'sen_3_schema_selection',
        'sen_3_schema_expansion',
        'sen_3_modification'
      ]
    },
    column4: {
      title: 'Execution',
      terms: [
        'Timing',
        'Timing/Force',
        'Spatial',
        'Temporal',
        'Control (Postural; FF; FB)',
        'Monitoring'
      ],
      db: [
        'sen_4_timing',
        'sen_4_timing_force',
        'sen_4_spatial',
        'sen_4_temporal',
        'sen_4_control',
        'sen_4_monitoring'
      ]
    },
    column5: {
      title: 'Skill Domain',
      terms: [
        'Oral',
        'Ocular',
        'Postural',
        'Limb',
        'Gross',
        'Fine',
        'Tool/Object',
        'Projected Action Sequences'
      ],
      db: [
        'sen_5_oral',
        'sen_5_ocular',
        'sen_5_postural',
        'sen_5_limb',
        'sen_5_gross',
        'sen_5_fine',
        'sen_5_tool',
        'sen_5_projected'
      ]
    },
    column6: {
      title: `Ayres' Factors`,
      terms: [
        'Somatodyspraxia',
        'Visual Dyspraxia',
        'Generalized Dyspraxis',
        'BMC/Balance/Sequencing/ML',
        'Praxis on Verbal Command'
      ],
      db: [
        'sen_6_somatodyspraxia',
        'sen_6_visual',
        'sen_6_generalized',
        'sen_6_bmc',
        'sen_6_praxis'
      ]
    }
  }
};

export const social = {
  header: {
    title: `Social/Emotional Developmental Capacities`
  },
  columns: {
    column1: {
      title: `DIR FEDLS's ©`,
      terms: [
        'Regulation',
        'Engagement',
        'Reciprocity',
        'Problem Solving',
        'Representational/Symbolic Thinking',
        'Triangular Thinking',
        'Comparative Thinking',
        'Reflective'
      ],
      db: [
        'soc_1_regulation',
        'soc_1_engagement',
        'soc_1_reciprocity',
        'soc_1_problem',
        'soc_1_representation',
        'soc_1_triangular',
        'soc_1_comparative',
        'soc_1_reflective'
      ]
    },
    column2: {
      title: 'Implicit/Explicit',
      terms: [],
      db: []
    },
    column3: {
      title: 'Social Cognition Core Components',
      terms: [
        'Self/Other Awareness',
        'Joint Attention',
        'Social Referencing',
        'Imitation',
        'Inferential Thinking/Intention',
        'Contingent Interaction/Reciprocal Actions',
        'Theory of Mind',
        'Central Coherence',
        'Mentalizing',
        'Empathy',
        'Social Perspective',
        'Social Motivators AAAA',
        'Pro-Social Motivation - Moral'
      ],
      db: [
        'soc_2_self_awareness',
        'soc_2_joint',
        'soc_2_social_referencing',
        'soc_2_imitation',
        'soc_2_inferential',
        'soc_2_contingent',
        'soc_2_theory',
        'soc_2_central',
        'soc_2_mentalizing',
        'soc_2_empathy',
        'soc_2_social_perspective',
        'soc_2_social_motivators',
        'soc_2_pro_social'
      ]
    },
    column4: {
      title: 'Emotional Processing',
      terms: [
        'Affective/Valence Response',
        'Emotional Contagion',
        'Activation of Low-Routes',
        'Emotional Cascade',
        'Activation of High-Routes',
        'Emotional Differentiation',
        'Emotional Association and Memory',
        'Self-Control',
        'Self-Regulation',
        'Self-Compassion'
      ],
      db: [
        'soc_3_affective',
        'soc_3_emotional_contagion',
        'soc_3_activation_low',
        'soc_3_emotional_cascade',
        'soc_3_activation_high',
        'soc_3_emotional_differentiation',
        'soc_3_emotional_association',
        'soc_3_self_control',
        'soc_3_self_regulation',
        'soc_3_self_compassion'
      ]
    },
    column5: {
      type: 'YesNo',
      title: 'Other Questions',
      terms: [
        'Mental Health Support Indicated?',
        'Thoughts and/or emotions require intervention or medication?',
        'Attachment related care needed?',
        'Trauma informed care needed?'
      ],
      db: [
        'soc_4_mental',
        'soc_4_thoughts',
        'soc_4_attachments',
        'soc_4_trauma'
      ]
    }
  }
};

export const executive = {
  header: { title: `Executive Functioning Capacities` },
  columns: {
    column1: {
      terms: ['Orient EYES-EARS-SELF to GOAL', 'Inhibition'],
      db: ['exe_1_orient', 'exe_1_inhibition']
    },
    column2A: {
      terms: ['Working Memory', 'Shifting'],
      db: ['exe_2a_working', 'exe_2a_shifting']
    },
    column2B: {
      terms: ['Verbal', 'Spatial', 'General', 'Global/Local', 'Flexibility'],
      db: [
        'exe_2b_verbal',
        'exe_2b_spatial',
        'exe_2b_general',
        'exe_2b_global',
        'exe_2b_flexibility'
      ]
    },
    column3: {
      terms: ['Initiation', 'Planning', 'Sequencing', 'Monitoring'],
      db: [
        'exe_3_initiation',
        'exe_3_planning',
        'exe_3_sequencing',
        'exe_3_monitoring'
      ]
    },
    column4A: {
      terms: [
        'Future-Oriented/Goal-Directed',
        'Spatial/Temporal Organization',
        'Problem Solving',
        'Reflective Thinking',
        'Internalized Language'
      ],
      db: [
        'exe_4a_future',
        'exe_4a_spatial',
        'exe_4a_problem',
        'exe_4a_reflective',
        'exe_4a_internalized'
      ]
    },
    column4B: {
      terms: [
        'Motivational Bias',
        'Effortful Control',
        'Self-Control',
        'Self-Regulation',
        'Self-Compassion'
      ],
      db: [
        'exe_4b_motivational',
        'exe_4b_effortful',
        'exe_4b_self_control',
        'exe_4b_self_regulation',
        'exe_4b_self_compassion'
      ]
    }
  }
};

export const bodyDiagram = {
  title: `Body Parts`,
  coreAbdominal: `1. Core Abdominal Control`,
  shoulder: `2. Shoulder Girdle Core`,
  pelvic: `3. Pelvic Trunk/LE Core`,
  head: `4. Head/Neck to Trunk Core`,
  eyes: `5. Eyes in Head Core`,
  hand: `6. Hand Control`,
  lower: `7. Lower Extremity`,
  foot: `8. Foot/Base of Support Core`
};

export const finish = {
  recommend:
    'We recommend reviewing your session results before writing plans and goals',
  stepsi: 'S.T.E.P.S.I. ©',
  copm: 'Modified from the C.O.P.M.'
};
