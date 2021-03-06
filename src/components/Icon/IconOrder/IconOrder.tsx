import {FC} from "react";
import "../../../assets/styles/icon/icon-order/icon-order.scss";

interface IconOrderProps {
    color?: string,
    width?: number,
    height?: number
}

const IconOrder: FC<IconOrderProps> = (props) => {
    const {
        color, width, height
    } = props;

    return (
        <svg
            className={"icon-order"}
            width={width}
            height={height}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <rect
                x="4"
                y="3"
                width="15.5"
                height="19"
                rx="1"
                stroke={color}
                strokeWidth="2"
            />
            <path
                d="M7.375 7.25C7.375 6.76675 7.76675 6.375 8.25 6.375H15.25C15.7332 6.375 16.125 6.76675 16.125 7.25C16.125 7.73325 15.7332 8.125 15.25 8.125H8.25C7.76675 8.125 7.375 7.73325 7.375 7.25Z"
                fill={color}
            />
            <path
                d="M7.375 11.625C7.375 11.1418 7.76675 10.75 8.25 10.75H13.5C13.9832 10.75 14.375 11.1418 14.375 11.625C14.375 12.1082 13.9832 12.5 13.5 12.5H8.25C7.76675 12.5 7.375 12.1082 7.375 11.625Z"
                fill={color}
            />
            <path
                d="M7.375 16C7.375 15.5168 7.76675 15.125 8.25 15.125H13.5C13.9832 15.125 14.375 15.5168 14.375 16C14.375 16.4832 13.9832 16.875 13.5 16.875H8.25C7.76675 16.875 7.375 16.4832 7.375 16Z"
                fill={color}
            />
        </svg>

    );
};

export default IconOrder;