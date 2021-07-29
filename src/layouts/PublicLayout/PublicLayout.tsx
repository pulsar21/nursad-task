import {FC} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";

const PublicLayout: FC = ({ children }) => {
    return <>
        <Navbar />
        <Main>
            {
                children
            }
        </Main>
        <Sidebar />
    </>
};

export default PublicLayout;