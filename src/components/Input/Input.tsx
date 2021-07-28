import {ChangeEventHandler, FC} from "react";
import "../../assets/styles/input/input.scss";

interface InputProps {
    className?: string,
    style?: {},
    type: string;
    placeholder?: string;
    value?: string;
    readOnly?: boolean;
    disabled?: boolean;
    width?: number;
    height?: number;
    onChange?: () => ChangeEventHandler<HTMLInputElement>;
};

const Input: FC<InputProps> = (props) => {
    const {
        className, style, type, placeholder,
        value, readOnly, disabled, onChange,
        width, height
    } = props;

    return (
        <input
            className={className ? `input ${className}` : `input`}
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
            type={type}
            placeholder={placeholder}
            value={value}
            readOnly={readOnly}
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default Input;