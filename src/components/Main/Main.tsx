import {FC} from "react";
import "../../assets/styles/main/main.scss";
import CompanySidebar from "../Sidebar/CompanySidebar/CompanySidebar";
import {useTypedSelector} from "../../hooks/useTypedSelector";


const Main: FC = ({children}) => {
    const { visibleCompanyInfo } = useTypedSelector(state => state.app);

    return (
        <main
            className={visibleCompanyInfo ? "main main-hidden" : "main"}
        >
            <div className={"main__block"}>
                {
                    children
                }
            </div>
            <CompanySidebar companyInfoOpen={visibleCompanyInfo} />
        </main>
    );
};

export default Main;