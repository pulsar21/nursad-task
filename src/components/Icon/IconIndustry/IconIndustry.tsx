import {FC} from "react";
import "../../../assets/styles/icon/icon-industry/icon-industry.scss";

interface IconIndustryProps {
    color?: string,
    width?: number,
    height?: number
}

const IconIndustry: FC<IconIndustryProps> = (props) => {
    const {
        color, width, height
    } = props;

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 20 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7H15V10H14V14H7C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0ZM7 3C5.93913 3 4.92172 3.42143 4.17157 4.17157C3.42143 4.92172 3 5.93913 3 7C3 8.06087 3.42143 9.07828 4.17157 9.82843C4.92172 10.5786 5.93913 11 7 11C8.06087 11 9.07828 10.5786 9.82843 9.82843C10.5786 9.07828 11 8.06087 11 7C11 5.93913 10.5786 4.92172 9.82843 4.17157C9.07828 3.42143 8.06087 3 7 3ZM15 12H20V14V16H18V14H15V12Z"
                fill={color}

            />
        </svg>
    );
};

export default IconIndustry;