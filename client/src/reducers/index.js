import { combineReducers } from 'redux';
import clinic from './clinic/clinic';
import user from './user/user';
import patientList from './patientList/patientList';
import currentPatient from './currentPatient/currentPatient';
import patientConcerns from './patientConcerns/patientConcerns';
import selectedConcern from './selectedConcern/selectedConcern';
import sessions from './sessions/sessions';
import selectedSession from './selectedSession/selectedSession';
import selectedProcess from './selectedProcess/selectedProcess';
import selectedTherapyGoal from './selectedTherapyGoal/selectedTherapyGoal';
import selectedTreatmentPlan from './selectedTreatmentPlan/selectedTreatmentPlan';
import storedThreadConnections from './storedThreadConnections/storedThreadConnections';
import definitions from './definitions/definitions';
import comparisonData from './comparisonData/comparisonData';
import processesData from './processesData/processesData';

const rootReducer = combineReducers({
  clinic,
  user,
  patientList,
  currentPatient,
  patientConcerns,
  selectedConcern,
  sessions,
  selectedSession,
  selectedProcess,
  selectedTherapyGoal,
  selectedTreatmentPlan,
  storedThreadConnections,
  definitions,
  comparisonData,
  processesData
});

export default rootReducer;
