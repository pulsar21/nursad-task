import {FC, MouseEvent} from "react";

interface TabProps {
    title: string;
    selected: string;
    setSelected: (args: string) => void;
}

const Tab: FC<TabProps> = (props) => {
    const {
        title, selected, setSelected
    } = props;

    const selectTabHandler = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        e.stopPropagation();
        setSelected(title);
    }

    return (
        <li className={selected ? `tab__item ${selected}` : `tab__item`}>
            <a
                className={"tab__link"}
                onClick={selectTabHandler}
            >
                {
                    title
                }
            </a>
        </li>
    );
};

export default Tab;