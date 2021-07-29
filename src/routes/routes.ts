import {BASKET_ROUTE, COMPANY_REGISTER_ROUTE} from "../utils/consts";
import CompanyRegister from "../pages/CompanyRegister/CompanyRegister";
import {FC} from "react";
import Basket from "../pages/Basket/Basket";

interface IRoutes {
    path: string,
    Component: FC
}

const publicRoutes: IRoutes[] = [
    {
        path: COMPANY_REGISTER_ROUTE,
        Component: CompanyRegister
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    }
]

export {
    publicRoutes
}