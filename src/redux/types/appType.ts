export interface AppState {
    visibleCompanyInfo: boolean
};

export enum AppActionType {
    SET_VISIBLE_COMPANY_INFO = "SET_VISIBLE_COMPANY_INFO"
};

interface setVisibleCompanyInfo {
    type: AppActionType.SET_VISIBLE_COMPANY_INFO,
    payload: boolean
}

export type AppAction = setVisibleCompanyInfo;

