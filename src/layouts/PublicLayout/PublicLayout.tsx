import {FC} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";

const PublicLayout: FC = ({ children }) => {
    return <>
        <Navbar />
        <main className={"main"}>
            {
                children
            }
        </main>
        <Sidebar />
    </>
};

export default PublicLayout;