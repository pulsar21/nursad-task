import {AppAction, AppActionType, AppState} from "../types/appType";

const initialState: AppState = {
    visibleCompanyInfo: false
};

export const appReducer = (state=initialState, action: AppAction): AppState => {
    switch (action.type) {
        case AppActionType.SET_VISIBLE_COMPANY_INFO:
            return {
                ...state,
                visibleCompanyInfo: action.payload
            }
        default:
            return state;
    }
};