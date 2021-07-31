import {FC, useState} from "react";
import "../../assets/styles/main/main.scss";
import CompanySidebar from "../Sidebar/CompanySidebar/CompanySidebar";


const Main: FC = ({children}) => {
    const [companyInfoOpen, setCompanyInfoOpen] = useState<boolean>(false);

    const companyInfoOpenHandler = () => {
        setCompanyInfoOpen(!companyInfoOpen);
    }
    return (
        <main className={"main"}>
            <div className={"main__block"}>
                {
                    children
                }
            </div>
            <CompanySidebar companyInfoOpen={companyInfoOpen} />
        </main>
    );
};

export default Main;