import {FC} from "react";
import "../../assets/styles/button-group/button-group.scss";

interface ButtonGroupProps {
    className?: string;
    style?: {},
    vertical?: boolean;
};

const ButtonGroup: FC<ButtonGroupProps> = (props) => {
    const {
        children, className, style, vertical,
        ...attrs
    } = props;

    return (
        <div
            className={className ? `btn-group ${className}` : `btn-group`}
            { ...attrs }
        >
            {
                children ?? null
            }
        </div>
    );
};

export default ButtonGroup;