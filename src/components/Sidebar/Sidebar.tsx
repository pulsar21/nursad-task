import {FC, ReactNode} from "react";
import { NavLink } from "react-router-dom";
import "../../assets/styles/sidebar/sidebar.scss";
import Avatar from "../Avatar/Avatar";
import avatarPng from "../../assets/images/png/avatar.png";
import List from "../List/List";
import IconAdd from "../Icon/IconAdd/IconAdd";
import IconSearch from "../Icon/IconSearch/IconSearch";
import IconOrder from "../Icon/IconOrder/IconOrder";
import IconStarRegular from "../Icon/IconStarRegular/IconStarRegular";
import ListItem from "../List/ListItem/ListItem";

interface ISidebarMenuChildData {
    id: number,
    name: string
};

interface ISidebarData {
    id: number,
    icon: ReactNode,
    name: string,
    child?: ISidebarMenuChildData[]
};

interface SidebarProps {
};

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
            name: "Закупки материалов",
            child: [
                {
                    id: 101,
                    name: "Создать тендер"
                },
                {
                    id: 102,
                    name: "Найти тендер"
                }
            ]
        },
        {
            id: 4,
            icon: <IconOrder color={"#A8A8A8"} width={18} height={18}/>,
            name: "Мои тендеры"
        },
        {
            id: 5,
            icon: <IconSearch color={"#A8A8A8"} width={18} height={18}/>,
            name: "Закупки",
            child: [
                {
                    id: 103,
                    name: "Мои поставщики"
                },
                {
                    id: 104,
                    name: "Данные по тендерам"
                },
                {
                    id: 105,
                    name: "Реестр компаний"
                },
                {
                    id: 106,
                    name: "Прайс листы"
                }
            ]
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
                    className={"menu__list"}
                    items={sidebarData}
                    renderItem={(item: ISidebarData) =>
                        <ListItem key={item.id} className={"menu__item"}>
                            <div>
                                <div className={"item-parent"}>
                                    {
                                        item.icon
                                    }
                                    <h2>{item.name}</h2>
                                </div>
                                {
                                    item.child && <div className={"item-child"}>
                                        {
                                            item.child?.map((childItem: ISidebarMenuChildData) =>
                                                <div key={childItem.id}>
                                                    <h2>
                                                        {
                                                            childItem.name
                                                        }
                                                    </h2>
                                                </div>
                                            )
                                        }
                                    </div>
                                }
                            </div>
                        </ListItem>
                    }
                />
            </div>
        </aside>
    );
};

export default Sidebar;