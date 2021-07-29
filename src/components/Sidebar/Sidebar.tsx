import {FC, ReactNode} from "react";
import "../../assets/styles/sidebar/sidebar.scss";
import Avatar from "../Avatar/Avatar";
import avatarPng from "../../assets/images/png/avatar.png";
import List from "../List/List";
import IconAdd from "../Icon/IconAdd/IconAdd";
import IconSearch from "../Icon/IconSearch/IconSearch";
import IconOrder from "../Icon/IconOrder/IconOrder";
import IconStarRegular from "../Icon/IconStarRegular/IconStarRegular";
import ListItem from "../List/ListItem/ListItem";

interface ISidebarData {
    id: number,
    icon: ReactNode,
    name: string
}

interface SidebarProps {

}

const Sidebar: FC<SidebarProps> = () => {
    const sidebarData: ISidebarData[] = [
        {
            id: 1,
            icon: <IconAdd color={"#A8A8A8"} width={18} height={18}/>,
            name: "Создать тендер"
        },
        {
            id: 2,
            icon: <IconSearch color={"#A8A8A8"} width={18} height={18}/>,
            name: "Найти тендер"
        },
        {
            id: 3,
            icon: <IconSearch color={"#A8A8A8"} width={18} height={18}/>,
            name: "Закупки материалов"
        },
        {
            id: 4,
            icon: <IconOrder color={"#A8A8A8"} width={18} height={18}/>,
            name: "Мои тендеры"
        },
        {
            id: 5,
            icon: <IconSearch color={"#A8A8A8"} width={18} height={18}/>,
            name: "Закупки"
        },
        {
            id: 6,
            icon: <IconStarRegular color={"#A8A8A8"} width={18} height={18}/>,
            name: "Создать тендер"
        },
    ];
    return (
        <aside className={"sidebar"}>
            <div className={"sidebar__title"}>
                <Avatar
                    src={avatarPng}
                    alt={"avatar"}
                    size={32}
                />
                <h2>
                    ИП Ибрагимова И. К.
                </h2>
            </div>
            <div className={"sidebar__menu"}>
                <List
                    items={sidebarData}
                    renderItem={(item: ISidebarData) =>
                        <ListItem key={item.id}>
                            {
                                item.icon
                            }
                            <h2>{item.name}</h2>
                        </ListItem>
                    }
                />
            </div>
        </aside>
    );
};

export default Sidebar;