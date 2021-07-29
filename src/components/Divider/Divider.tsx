import {FC} from "react";
import "../../assets/styles/divider/divider.scss";

interface DividerProps {
    className?: string;
    color?: string;
    stretch?: number;
};

const Divider: FC<DividerProps> = (props) => {
    const {
        className, color, stretch
    } = props;

    return (
        <hr
            className={className ? `divider ${className}` : `divider`}
            style={{
                borderTopColor: color,
                marginLeft: `-${stretch}px`,
                marginRight: `-${stretch}px`
            }}
        />
    );
};

export default Divider;