import { ActionType } from "../../action-types";
import { Action } from "../../actions";
import { NavigationModel } from "../../models/auth/NavigationModel";


interface NavigationState {
    isLoading: boolean;
    error: string | null;
    data: NavigationModel[];
}

const initialState: NavigationState = {
    isLoading: false,
    error: null,
    data: []
}

const navigationReducer = (state: NavigationState = initialState, action: Action): NavigationState => {
    switch (action.type) {
        case ActionType.FETCH_NAVIGATIONS:
            return {...state, isLoading: true, error: null};
        case ActionType.FETCH_NAVIGATIONS_SUCCESS:
            return {...state, isLoading: false, error: null, data: action.payload};            
        case ActionType.FETCH_NAVIGATIONS_ERROR:
            return {...state, isLoading: false, error: action.payload};            
        default:
            return state;
    }
}

export default navigationReducer;
