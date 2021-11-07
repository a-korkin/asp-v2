import { NavigationModel } from "../../models/public/NavigationModel";
import { ActionType } from "../action-types";

interface FetchNavigationsAction {
    type: ActionType.FETCH_NAVIGATIONS;
}

interface FetchNavigationsSuccessAction {
    type: ActionType.FETCH_NAVIGATIONS_SUCCESS;
    payload: NavigationModel[];
}

interface FetchNavigationsErrorAction {
    type: ActionType.FETCH_NAVIGATIONS_ERROR;
    payload: string;
}

export type Action = 
    FetchNavigationsAction | 
    FetchNavigationsSuccessAction | 
    FetchNavigationsErrorAction;
    