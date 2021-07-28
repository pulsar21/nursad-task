import {FC, ReactNode} from "react";
import "../../assets/styles/radio/radio.scss";

interface RadioProps {
    name?: string;
    disabled?: boolean;
    checked?: boolean;
    value?: string | number;
    onClick?: () => void;
    title?: string | ReactNode;
};

const Radio: FC<RadioProps> = (props) => {
    const {
        name, disabled, checked, title,
        value, onClick
    } = props;

    return (
        <label className={"radio"}>
            <input
                type={"radio"}
                className={"radio__input"}
                name={name}
                disabled={disabled}
                checked={checked}
                value={value}
                onClick={onClick}
            />
            <span className={"radio__box"}>
            </span>
            <span className={"radio__title"}>
                {
                    title
                }
            </span>
        </label>
    );
};

export default Radio;