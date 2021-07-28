import {FC} from "react";
import Icon from "../Icon/Icon";
import "../../assets/styles/avatar/avatar.scss";

enum Shape {
    square= "square",
    circle= "circle"
};

interface AvatarProps {
    className?: string;
    style?: {};
    size?: number;
    shape?: Shape;
    src?: string;
    alt?: string;
};

const Avatar: FC<AvatarProps> = (props) => {
    const {
        className, style, size, shape,
        src, alt
    } = props;

    return (
        <Icon
            src={src}
            alt={alt}
            width={size}
            height={size}
            className={className ? `avatar ${className}` : `avatar`}
            style={style}
        />
    );
};

export default Avatar;