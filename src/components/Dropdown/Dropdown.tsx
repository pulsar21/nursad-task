import {FC, useState, MouseEvent} from "react";
import {ICompany} from "../../types/types";
import dropdownArrowSvg from "../../assets/images/svg/dropdown-arrow.svg";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import "../../assets/styles/dropdown/dropdown.scss";
import successSvg from "../../assets/images/svg/success.svg";

interface DropdownProps {
    title?: string;
    width?: number;
    height?: number;
    data?: ICompany[];
}

const Dropdown: FC<DropdownProps> = (props) => {
    const {
        title, data, width, height
    } = props;

    const [isListOpen, setIsListOpen] = useState<boolean>(false);


    return (
        <div className={"dropdown"}>
            <Button
                className={"dropdown__header"}
                width={width}
                onClick={() => setIsListOpen(!isListOpen)}
            >
                <span className={"dropdown__title"}>
                    {
                        title
                    }
                </span>
                <Icon
                    src={dropdownArrowSvg}
                    className={"dropdown__icon"}
                    alt={"dropdown"}
                    width={10}
                    height={10}
                />
            </Button>
            {
                isListOpen && (
                    <div
                        className={"dropdown__list"}
                        style={{
                            width: width,
                            height: height
                        }}
                    >
                        <div className={"dropdown__item"}>
                            <Button
                                className={"dropdown__btn active"}
                                onClick={() => setIsListOpen(!isListOpen)}
                            >
                                {
                                    title
                                }
                                <Icon
                                    src={successSvg}
                                    alt={"success"}
                                />
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Строительная компания
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Грузоперевозка
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Грузоперевозка
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Грузоперевозка
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Грузоперевозка
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Грузоперевозка
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Грузоперевозка
                            </Button>
                        </div>
                        <div className={"dropdown__item"}>
                            <Button className={"dropdown__btn"}>
                                Грузоперевозка
                            </Button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Dropdown;