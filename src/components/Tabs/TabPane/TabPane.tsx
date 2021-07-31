import {FC} from "react";

interface TabPaneProps {
    isSelected: boolean;
}

const TabPane: FC<TabPaneProps> = (props) => {
    const {
        children, isSelected
    } = props;

    return (
        <>
            {
                isSelected ?
                    <div className={"tab-pane"}>
                        {
                            children
                        }
                    </div> :
                    null
            }
        </>
    );
};

export default TabPane;