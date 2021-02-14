export const ACTION_NAMES = {
  QUITTING_LIST_FETCH_SUCCESS: 'QUITTING_LIST_FETCH_SUCCESS',
  QUITTING_LIST_FETCH_FAIL: 'QUITTING_LIST_FETCH_FAIL',
  PRESENT_LIST_FETCH_SUCCESS: 'PRESENT_LIST_FETCH_SUCCESS',
  PRESENT_LIST_FETCH_FAIL: 'PRESENT_LIST_FETCH_FAIL',
  SELECT_PATIENT: 'SELECT_PATIENT',
};

export const quittingListFetchSuccess = (data) => ({
  type: ACTION_NAMES.QUITTING_LIST_FETCH_SUCCESS,
  payload: data,
});

export const quittingListFetchFail = (error) => ({
  type: ACTION_NAMES.QUITTING_LIST_FETCH_FAIL,
  payload: error,
});

export const presentListFetchSuccess = (data) => ({
  type: ACTION_NAMES.PRESENT_LIST_FETCH_SUCCESS,
  payload: data,
});

export const presentListFetchFail = (error) => ({
  type: ACTION_NAMES.PRESENT_LIST_FETCH_FAIL,
  payload: error,
});

export const selectPatient = (data) => ({
  type: ACTION_NAMES.SELECT_PATIENT,
  payload: data,
});
