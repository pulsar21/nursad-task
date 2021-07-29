import {FC} from "react";
import "../../assets/styles/main/main.scss";

const Main: FC = ({ children }) => {
    return (
        <main className={"main"}>
            {
                children
            }
        </main>
    );
};

export default Main;