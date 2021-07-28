import {ChangeEvent, ChangeEventHandler, FC, MouseEventHandler} from "react";
import "../../assets/styles/input/input.scss";
import {ICompany} from "../../types/types";

interface InputProps {
    className?: string,
    style?: {},
    name?: string;
    type: string;
    placeholder?: string;
    value?: string | number;
    readOnly?: boolean;
    disabled?: boolean;
    width?: number;
    height?: number;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick?: () => void;
};

const Input: FC<InputProps> = (props) => {
    const {
        className, style, type, placeholder,
        value, readOnly, disabled, onChange,
        width, height, name, onClick
    } = props;

    return (
        <input
            className={className ? `input ${className}` : `input`}
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
            type={type}
            name={name}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
            disabled={disabled}
            onChange={onChange}
            onClick={onClick}
        />
    );
};

export default Input;