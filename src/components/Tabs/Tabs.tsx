import {FC} from "react";
import "../../assets/styles/tabs/tabs.scss";
import Tab from "./Tab/Tab";

interface TabsProps {
    className?: string;
    tabs: string[];
    selected: string;
    setSelected: (args: string) => void;
}

const Tabs: FC<TabsProps> = (props) => {
    const {
        tabs, selected, setSelected, className
    } = props;

    return (
        <div className={className ? `tabs ${className}` : `tabs`}>
            <ul className={"tabs__list"}>
                {
                    tabs.map((tab) =>
                        {
                            const active: string = (tab.toLowerCase() === selected.toLowerCase() ? "active" : "");
                            return (
                                <Tab
                                    key={`${Math.random()}${tab}`}
                                    title={tab}
                                    selected={active}
                                    setSelected={setSelected}
                                />
                            )
                        }
                    )
                }
            </ul>
        </div>
    );
};

export default Tabs;