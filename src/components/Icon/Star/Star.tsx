import {FC} from "react";
import starSvg from "../../../assets/images/svg/star.svg";
import "../../../assets/styles/icon/star/star.scss";

interface StarProps {
    width?: number;
    height?: number;
    color?: string;
    onClick?: () => void;
};

const Star: FC<StarProps> = (props) => {
    const {
        width, height, onClick, color
    } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onClick}
            className={"star"}
        >
            <path
                d="M10 0L12.31 6.82056L19.5106 6.90983L13.7377 11.2144L15.8779 18.0902L10 13.93L4.12215 18.0902L6.26235 11.2144L0.489435 6.90983L7.69 6.82056L10 0Z"
                fill="#FFA000"
                fillOpacity={color}
            />
        </svg>
    );
};

export default Star;