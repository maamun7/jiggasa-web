import * as types from '../_constants/ActionTypes';
import { callApi } from '../_utils/ApiUtils';
import { userSchema } from '../_constants/Schemas';
import {
    USER_URL,
} from '../_constants/ApiConstants';
import EmptyModal from '../_components/form/ModalEmpty';

export const search = keyword => async (dispatch) => {
   /* const { json } = await callApi(`${USER_URL}?oauth_token=${oauthToken}`);
    const { result, entities } = normalize(json, userSchema);
    dispatch(fetchSessionUserSuccess(result, entities));*/
};


export const openModal = () => {

        return <EmptyModal isOpen={true} />

};