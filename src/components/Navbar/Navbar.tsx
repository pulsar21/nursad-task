import {FC} from "react";
import "../../assets/styles/navbar/navbar.scss";
import Icon from "../Icon/Icon";
import basketSvg from "../../assets/images/svg/basket.svg";
import basketRegularSvg from "../../assets/images/svg/basket-regular.svg";
import infoSvg from "../../assets/images/svg/info.svg";
import addSvg from "../../assets/images/svg/add.svg";
import Button from "../Button/Button";
import { useHistory } from "react-router-dom";
import {BASKET_ROUTE, COMPANY_REGISTER_ROUTE} from "../../utils/consts";

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {
    const history = useHistory<{}>();

    return (
        <nav className={"navbar"}>
            <div className={"navbar__title"}>
                <Icon
                    src={basketSvg}
                    alt={"Register of all companies"}
                />
                <h2
                    onClick={() => history.push(COMPANY_REGISTER_ROUTE)}
                >
                    Реестр всех компаний
                </h2>
            </div>
            <div className={"navbar__navigation"}>
                <Button className={"btn-info"} width={180}>
                    <Icon
                        src={infoSvg}
                        alt={"info"}
                        width={15}
                        height={15}
                        className={"btn__icon"}
                    />
                    <span className={"btn__text"}>служба поддержки</span>
                </Button>
                <Button className={"btn-primary"} width={186}>
                    <Icon
                        src={addSvg}
                        alt={"add"}
                        width={15}
                        height={15}
                        className={"btn__icon"}
                    />
                    <span className={"btn__text"}>
                        добавить компанию
                    </span>
                </Button>
                <Button
                    className={"btn-info"}
                    width={32}
                    onClick={() => history.push(BASKET_ROUTE)}
                >
                    <Icon
                        src={basketRegularSvg}
                        alt={"basket"}
                        width={22}
                        height={22}
                    />
                </Button>
            </div>
        </nav>
    );
};

export default Navbar;