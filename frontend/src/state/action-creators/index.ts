import { Dispatch } from "redux";
import { ActionType } from "../action-types";
import { Action } from "../actions";
import $api from "../../http";
import { NavigationModel } from "../../models/admin/NavigationModel";

export const fetchNavigations = () => async (dispatch: Dispatch<Action>) => {
    dispatch({
        type: ActionType.FETCH_NAVIGATIONS
    });

    try {
        const { data } = await $api.get<NavigationModel[]>("/navigations");
        dispatch({
            type: ActionType.FETCH_NAVIGATIONS_SUCCESS,
            payload: data
        });
    } catch (error: any) {
        dispatch({
            type: ActionType.FETCH_NAVIGATIONS_ERROR,
            payload: error
        });
    }
}
