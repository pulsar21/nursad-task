import {FC} from "react";

interface ListItemProps {
    className?: string;
}

const ListItem: FC<ListItemProps> = (props) => {
    const {
        children, className
    } = props;
    return (
        <li className={className ? `list__item ${className}` : `list__item`}>
            {
                children
            }
        </li>
    );
};

export default ListItem;