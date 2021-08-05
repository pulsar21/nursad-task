import {Dispatch} from "react";
import {CompanyAction, CompanyActionType} from "../types/companyType";
import {ICompany} from "../../types/types";

export const fetchCompanies = () => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        await dispatch({
            type: CompanyActionType.FETCH_COMPANIES,
            payload: [
                {
                    id: 1,
                    name: "Актобе Монтаж Автоматика",
                    industries: "Строительная компания",
                    city: "Нур-Султан",
                    description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
                    location: "Астана, ул. Бухар Жырау 30 н.п.6",
                    bin: "081240010249",
                    phone: ["+7 (777) 123-45-67", "+7 (707) 123-45-67"],
                    email: "valiullovd@gmail.com"
                },
                {
                    id: 2,
                    name: "Актобе Монтаж Автоматика",
                    industries: "Строительная компания",
                    city: "Нур-Султан",
                    description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
                    location: "Астана, ул. Бухар Жырау 30 н.п.6",
                    bin: "081240010249",
                    phone: ["+7 (777) 123-45-67", "+7 (707) 123-45-67"],
                    email: "valiullovd@gmail.com"
                },
                {
                    id: 3,
                    name: "Актобе Монтаж Автоматика",
                    industries: "Строительная компания",
                    city: "Нур-Султан",
                    description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
                    location: "Астана, ул. Бухар Жырау 30 н.п.6",
                    bin: "081240010249",
                    phone: ["+7 (777) 123-45-67", "+7 (707) 123-45-67"],
                    email: "valiullovd@gmail.com"
                },
            ]
        })
    }
}

export const fetchOneCompany = (id: number) => {
    return async (dispatch: Dispatch<CompanyAction>) => {
        const companies: any = fetchCompanies();
        console.log(companies);
        await dispatch({
            type: CompanyActionType.FETCH_ONE_COMPANY,
            payload: companies
        })
    }
}