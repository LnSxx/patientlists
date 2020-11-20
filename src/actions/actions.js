export const ACTION_NAMES = {
  PATIENT_LISTS_FETCH_SUCCESS: 'PATIENT_LISTS_FETCH_SUCCESS',
  PATIENT_LISTS_FETCH_FAIL: 'PATIENT_LISTS_FETCH_FAIL',
  SELECT_PATIENT: 'SELECT_PATIENT',
};

export const patientListFetchSuccess = (data, division) => ({
  type: ACTION_NAMES.PATIENT_LISTS_FETCH_SUCCESS,
  payload: data,
  division,
});

export const patientListFetchFail = (error) => ({
  type: ACTION_NAMES.PATIENT_LISTS_FETCH_FAIL,
  payload: error,
});

export const selectPatient = (data) => ({
  type: ACTION_NAMES.SELECT_PATIENT,
  payload: data,
});
