import {ICompany} from "../../types/types";

export interface CompanyState {
    companies: ICompany[]
};

export enum CompanyActionType {
    FETCH_COMPANIES = "FETCH_COMPANIES",
    FETCH_ONE_COMPANY = "FETCH_ONE_COMPANY"
};

interface fetchCompanies {
    type: CompanyActionType.FETCH_COMPANIES,
    payload: ICompany[]
};

interface fetchOneCompany {
    type: CompanyActionType.FETCH_ONE_COMPANY,
    payload: ICompany[]
}

export type CompanyAction = fetchCompanies | fetchOneCompany;