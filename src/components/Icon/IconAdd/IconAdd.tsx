import {FC} from "react";
import "../../../assets/styles/icon/icon-add/icon-add.scss";

interface IconAddProps {
    color?: string,
    width?: number,
    height?: number
};

const IconAdd: FC<IconAddProps> = (props) => {
    const {
        color, width, height
    } = props;

    return (
        <svg
            className={"icon-add"}
            width={width}
            height={height}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.16715 8.83333V15.5H8.83382V8.83333H15.5005V7.16667H8.83382V0.5L7.16715 0.5V7.16667H0.500488L0.500488 8.83333H7.16715Z"
                fill={color}
            />
        </svg>
    );
};

export default IconAdd;