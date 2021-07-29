import {ReactNode} from "react";
import "../../assets/styles/list/list.scss";

interface IListProps<T> {
    items: T[];
    renderItem: (item: T) => ReactNode;
};

export default function List<T>(props: IListProps<T>) {
    const {
        items, renderItem
    } = props;
    return (
        <ul className={"list"}>
            {
                items.map(renderItem)
            }
        </ul>
    );
};