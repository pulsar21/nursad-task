import { useDispatch } from "react-redux";
import { AnyAction, bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
import ActionCreators from '../redux/actions/actions';

type State = { a: string };
export type AppDispatch = ThunkDispatch<State, any, AnyAction>;

export const useTypeAction = () => {
    const dispatch: AppDispatch = useDispatch();
    return bindActionCreators(ActionCreators, dispatch);
};
