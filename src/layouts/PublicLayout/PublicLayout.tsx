import {FC, useState, MouseEvent} from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import Main from "../../components/Main/Main";

const PublicLayout: FC = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState<boolean>(false);

    const sidebarOpenHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setSidebarOpen(sidebarOpen => !sidebarOpen);
    };

    return <>
        <Navbar sidebarOpenHandler={sidebarOpenHandler}/>
        <Main>
            {
                children
            }
        </Main>
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    </>
};

export default PublicLayout;