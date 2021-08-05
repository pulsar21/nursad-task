import {AppAction, AppActionType} from "../types/appType";
import {Dispatch} from "react";

export const setVisibleCompanyInfo = (isVisible: boolean) => {
    return (dispatch: Dispatch<AppAction>) => {
        try {
            dispatch({
                type: AppActionType.SET_VISIBLE_COMPANY_INFO,
                payload: isVisible
            })
        } catch (e) {
            console.log(e);
        }
    }
}