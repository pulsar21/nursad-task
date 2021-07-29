import "./assets/styles/app/app.scss";
import AppRouter from "./components/Router/AppRouter";
import {FC} from "react";

const App: FC = () => {
    return (
        <div className={"app"}>
            <div className={"app-container"}>
                <AppRouter />
            </div>
        </div>
    );
};

export default App;