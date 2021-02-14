import { ACTION_NAMES } from '../actions/actions';

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
    case ACTION_NAMES.PRESENT_LIST_FETCH_SUCCESS:
      return {
        ...state,
        patientList: {
          ...state.patientList,
          present: action.payload,
          presentListIsLoaded: true,
        },
      };
    case ACTION_NAMES.PRESENT_LIST_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    case ACTION_NAMES.QUITTING_LIST_FETCH_SUCCESS:
      return {
        ...state,
        patientList: {
          ...state.patientList,
          quitting: action.payload,
          quittingListIsLoaded: true,
        },
      };
    case ACTION_NAMES.QUITTING_LIST_FETCH_FAIL:
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
