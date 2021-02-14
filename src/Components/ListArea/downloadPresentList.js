import axios from 'axios';
import { presentListFetchFail, presentListFetchSuccess } from '../../actions/actions';

export default function downloadPresentList(presentListJsonUrl) {
  return async (dispatch) => {
    try {
      const presentListResponse = await axios.get(presentListJsonUrl);
      dispatch(presentListFetchSuccess(presentListResponse.data));
    } catch (error) {
      dispatch(presentListFetchFail(error));
    }
  };
}
