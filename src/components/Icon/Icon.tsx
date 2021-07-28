import {FC, MouseEventHandler, ReactNode} from "react";
import "../../assets/styles/icon/icon.scss";

interface IconProps {
    className?: string;
    style?: {};
    src: string | undefined;
    alt: string | undefined;
    width?: number;
    height?: number;
    onClick?: () => MouseEventHandler<HTMLImageElement>;
};

const Icon: FC<IconProps> = (props) => {
    const {
        children, src, alt, width,
        height, className, style, onClick
    } = props;

    return (
        <img
            className={className ? `icon ${className}` : `icon`}
            style={style}
            src={src}
            alt={alt}
            width={width}
            height={height}
            onClick={onClick}
        />
    );
};

export default Icon;