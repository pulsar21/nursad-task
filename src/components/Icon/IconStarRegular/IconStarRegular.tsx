import {FC} from "react";
import "../../../assets/styles/icon/icon-star-regular/icon-star-regular.scss";

interface IconStarRegularProps {
    color?: string,
    width?: number,
    height?: number
}

const IconStarRegular: FC<IconStarRegularProps> = (props) => {
    const {
        color, width, height
    } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 22 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M8.63573 7.63735L11 1.95297L13.3643 7.63735C13.5443 8.07015 13.9513 8.36586 14.4185 8.40332L20.5553 8.8953L15.8797 12.9004C15.5237 13.2054 15.3683 13.6838 15.477 14.1398L16.9055 20.1282L11.6516 16.9191C11.2515 16.6748 10.7485 16.6748 10.3484 16.9191L5.0945 20.1282L6.52297 14.1398C6.63173 13.6838 6.47626 13.2054 6.12028 12.9004L1.44471 8.8953L7.58147 8.40332C8.04871 8.36586 8.45572 8.07014 8.63573 7.63735ZM4.58155 20.4415C4.58173 20.4414 4.58191 20.4413 4.58209 20.4412L4.58155 20.4415Z"
                stroke={color}
                strokeWidth="1.5"
            />
        </svg>
    );
};

export default IconStarRegular;