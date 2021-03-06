import {FC} from "react";
import "../../../assets/styles/icon/icon-search/icon-search.scss";

interface IconSearchProps {
    color?: string,
    width?: number,
    height?: number
};

const IconSearch: FC<IconSearchProps> = (props) => {
    const {
        color, width, height
    } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.4813 7.88667C13.4813 11.1534 10.8946 13.8017 7.70361 13.8017C4.51267 13.8017 1.9259 11.1534 1.9259 7.88667C1.9259 4.61991 4.51267 1.97167 7.70361 1.97167C10.8946 1.97167 13.4813 4.61991 13.4813 7.88667ZM12.5848 13.9885C11.2559 15.1039 9.55613 15.7733 7.70361 15.7733C3.44902 15.7733 0 12.2424 0 7.88667C0 3.53098 3.44902 0 7.70361 0C11.9582 0 15.4072 3.53098 15.4072 7.88667C15.4072 9.63521 14.8514 11.2508 13.9108 12.5585L18.0002 16.5777L16.6665 18L12.5848 13.9885Z"
                fill={color}
            />
        </svg>

    );
};

export default IconSearch;