import {CompanyAction, CompanyActionType, CompanyState} from "../types/companyType";

const initialState: CompanyState = {
    companies: []
};

export const companyReducer = (state=initialState, action: CompanyAction): CompanyState => {
    switch (action.type) {
        case CompanyActionType.FETCH_COMPANIES:
            return  {
                ...state,
                companies: action.payload
            };
        case CompanyActionType.FETCH_ONE_COMPANY:
            return  {
                ...state,
                companies: action.payload
            }
        default:
            return state;
    }
}