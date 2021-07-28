import {FC, ReactNode} from "react";
import "../../assets/styles/radio/radio.scss";

interface RadioProps {
    name?: string;
    disabled?: boolean;
    checked?: boolean;
    title?: string | ReactNode;
};

const Radio: FC<RadioProps> = (props) => {
    const {
        name, disabled, checked, title
    } = props;

    return (
        <label className={"radio"}>
            <input
                type={"radio"}
                className={"radio__input"}
                name={name}
                disabled={disabled}
                checked={checked}
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