import {FC, ReactNode} from "react";
import "../../assets/styles/button/button.scss";

interface ButtonProps {
    className?: string;
    style?: {};
    value?: string;
    disabled?: boolean;
    autoFocus?: boolean;
    width?: number;
    height?: number;
    icon?: ReactNode;
    onClick?: () => void;
};

const Button: FC<ButtonProps> = (props) => {
    const {
        children, className, style, value,
        disabled, autoFocus, onClick, width,
        height, icon
    } = props;

    return (
        <button
            className={className ? `btn ${className}` : `btn`}
            style={{
                width: `${width}px`,
                height: `${height}px`,
            }}
            disabled={disabled}
            autoFocus={autoFocus}
            onClick={onClick}
        >
            {
                icon
            }
            {
                children ?? value
            }
        </button>
    );
};

export default Button;