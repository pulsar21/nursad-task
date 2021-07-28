import {FC} from "react";
import "../../assets/styles/card/card.scss";

interface CardProps {
    className?: string;
    style?: {};
    width?: number;
    height?: number;
}

const Card: FC<CardProps> = (props) => {
    const {
        children, className, style, width,
        height
    } = props;

    return (
        <div
            className={className ? `card ${className}` : `card`}
            style={{
                width: `${width}px`,
                height: `${height}px`
            }}
        >
            {
                children
            }
        </div>
    );
};

export default Card;