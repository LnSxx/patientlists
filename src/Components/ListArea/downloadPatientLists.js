import axios from 'axios';
import { patientListFetchSuccess, patientListFetchFail } from '../../actions/actions';
import { LISTS_DIVISIONS, REACT_APP_PRESENT_LIST_JSON_URL, REACT_APP_QUITTING_LIST_JSON_URL } from '../../settings';

export default function downloadPatientLists() {
  return async (dispatch) => {
    try {
      const presentListResponse = await axios.get(REACT_APP_PRESENT_LIST_JSON_URL);
      dispatch(patientListFetchSuccess(presentListResponse.data, LISTS_DIVISIONS.PRESENT_LIST));
      const quittingListResponse = await axios.get(REACT_APP_QUITTING_LIST_JSON_URL);
      dispatch(patientListFetchSuccess(quittingListResponse.data, LISTS_DIVISIONS.QUITTING_LIST));
    } catch (error) {
      dispatch(patientListFetchFail(error));
    }
  };
}
