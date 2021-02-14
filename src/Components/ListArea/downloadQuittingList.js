import axios from 'axios';
import { quittingListFetchFail, quittingListFetchSuccess } from '../../actions/actions';

export default function downloadQuittingList(quittingListJsonUrl) {
  return async (dispatch) => {
    try {
      const quittingListResponse = await axios.get(quittingListJsonUrl);
      dispatch(quittingListFetchSuccess(quittingListResponse.data));
    } catch (error) {
      dispatch(quittingListFetchFail(error));
    }
  };
}
