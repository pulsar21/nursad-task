import {ReactNode} from "react";
import "../../assets/styles/list/list.scss";

interface IListProps<T> {
    className?: string;
    items: T[];
    renderItem: (item: T) => ReactNode;
};

export default function List<T>(props: IListProps<T>) {
    const {
        items, renderItem, className
    } = props;
    return (
        <ul className={className ? `list ${className}` : `list`}>
            {
                items.map(renderItem)
            }
        </ul>
    );
};