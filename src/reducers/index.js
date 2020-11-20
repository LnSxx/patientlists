import { ACTION_NAMES } from '../actions/actions';
import { LISTS_DIVISIONS } from '../settings';

export const initialState = {
  patientList: {
    quitting: [],
    quittingListIsLoaded: false,
    present: [],
    presentListIsLoaded: false,
  },
  selectedPatient: {},
  isPatientSelected: false,
  error: null,
};

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_NAMES.PATIENT_LISTS_FETCH_SUCCESS:
      switch (action.division) {
        case LISTS_DIVISIONS.PRESENT_LIST:
          return {
            ...state,
            patientList: {
              ...state.patientList,
              present: action.payload,
              presentListIsLoaded: true,
            },
          };
        case LISTS_DIVISIONS.QUITTING_LIST:
          return {
            ...state,
            patientList: {
              ...state.patientList,
              quitting: action.payload,
              quittingListIsLoaded: true,
            },
          };
        default:
          return state;
      }
    case ACTION_NAMES.PATIENT_LISTS_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION_NAMES.SELECT_PATIENT:
      return {
        ...state,
        selectedPatient: {
          ...action.payload,
        },
        isPatientSelected: true,
      };
    default:
      return state;
  }
}
