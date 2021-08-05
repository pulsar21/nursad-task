import { combineReducers } from "redux";
import {appReducer} from "./appReducer";
import {companyReducer} from "./companyReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    company: companyReducer
});

export type RootState = ReturnType<typeof rootReducer>;