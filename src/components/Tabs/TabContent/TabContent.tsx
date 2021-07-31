import {FC} from "react";

interface TabContentProps {
    className?: string;
}

const TabContent: FC<TabContentProps> = (props) => {
    const {
        children, className
    } = props;

    return (
        <div className={className ? `tab-content ${className}` : `tab-content`}>
            {
                children
            }
        </div>
    );
};

export default TabContent;