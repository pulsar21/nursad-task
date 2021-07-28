import {FC} from "react";
import "../../assets/styles/divider/divider.scss";

interface DividerProps {
    className?: string;
    color?: string;
};

const Divider: FC<DividerProps> = (props) => {
    const {
        className, color
    } = props;

    return (
        <hr
            className={className ? `divider ${className}` : `divider`}
            style={{
                borderTopColor: color
            }}
        />
    );
};

export default Divider;