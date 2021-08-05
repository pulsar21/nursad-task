import {Dispatch, FC, ReactNode, SetStateAction} from "react";
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
import {BASKET_ROUTE} from "../../utils/consts";

interface ISidebarMenuChildData {
    id: number,
    name: string,
    route?: string,
};

interface ISidebarData {
    id: number,
    icon: ReactNode,
    name: string,
    route?: string,
    child?: ISidebarMenuChildData[]
};

interface SidebarProps {
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidebar: FC<SidebarProps> = (props) => {
    const {
        sidebarOpen, setSidebarOpen
    } = props;

    const sidebarData: ISidebarData[] = [
        {
            id: 1,
            icon: <IconAdd color={"#A8A8A8"} width={18} height={18}/>,
            name: "Создать тендер",
            route: "#"
        },
        {
            id: 2,
            icon: <IconSearch color={"#A8A8A8"} width={18} height={18}/>,
            name: "Найти тендер",
            route: "#",
        },
        {
            id: 3,
            icon: <IconSearch color={"#A8A8A8"} width={18} height={18}/>,
            name: "Закупки материалов",
            route: "#",
            child: [
                {
                    id: 101,
                    name: "Создать тендер",
                    route: "#"
                },
                {
                    id: 102,
                    name: "Найти тендер",
                    route: "#"
                }
            ]
        },
        {
            id: 4,
            icon: <IconOrder color={"#A8A8A8"} width={18} height={18}/>,
            name: "Мои тендеры",
            route: "#"
        },
        {
            id: 5,
            icon: <IconSearch color={"#A8A8A8"} width={18} height={18}/>,
            name: "Закупки",
            route: BASKET_ROUTE,
            child: [
                {
                    id: 103,
                    name: "Мои поставщики",
                    route: "#"
                },
                {
                    id: 104,
                    name: "Данные по тендерам",
                    route: "#"
                },
                {
                    id: 105,
                    name: "Реестр компаний",
                    route: "#"
                },
                {
                    id: 106,
                    name: "Прайс листы",
                    route: "#"
                }
            ]
        },
        {
            id: 6,
            icon: <IconStarRegular color={"#A8A8A8"} width={18} height={18}/>,
            name: "Создать тендер",
            route: "#"
        },
    ];
    return (
        <aside className={sidebarOpen ? `sidebar sidebar-open` : `sidebar`}>
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
                                    <NavLink to={{
                                        pathname: item.route
                                    }}>
                                        {item.name}
                                    </NavLink>
                                </div>
                                {
                                    item.child && <div className={"item-child"}>
                                        {
                                            item.child?.map((childItem: ISidebarMenuChildData) =>
                                                <div key={childItem.id}>
                                                    <NavLink to={{
                                                        pathname: childItem.route
                                                    }}>
                                                        {childItem.name}
                                                    </NavLink>
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