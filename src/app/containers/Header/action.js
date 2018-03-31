//import * as types from '../_constants/ActionTypes';
import { callApi } from '../../../utils/ApiUtils';
import { userSchema } from '../../../constants/Schemas';
import {
    USER_URL,
} from '../../../constants/ApiConstants';

export const search = keyword => async (dispatch) => {
   /* const { json } = await callApi(`${USER_URL}?oauth_token=${oauthToken}`);
    const { result, entities } = normalize(json, userSchema);
    dispatch(fetchSessionUserSuccess(result, entities));*/
};
