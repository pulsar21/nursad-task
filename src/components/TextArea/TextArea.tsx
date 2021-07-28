import {FC} from "react";
import "../../assets/styles/textarea/textarea.scss";

interface TextAreaProps {
    className?: string;
    style?: {};
    name: string;
    id: string;
    cols?: number;
    rows?: number;
    disabled?: boolean;
    readOnly?: boolean;
    maxLength?: number;
    placeholder?: string;
    width?: number;
    height?: number;
    value?: string;
    onChange?: () => void;
};

const TextArea: FC<TextAreaProps> = (props) => {
    const {
        children, className, style, name,
        id, cols, rows, value,
        onChange, disabled, readOnly, maxLength,
        placeholder, width, height
    } = props;

    return (
        <textarea
            className={className ? `textarea ${className}` : `textarea`}
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
            name={name}
            id={id}
            cols={cols}
            rows={rows}
            disabled={disabled}
            readOnly={readOnly}
            maxLength={maxLength}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        >
            {
                children
            }
        </textarea>
    );
};

export default TextArea;