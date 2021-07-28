import {FC, useState} from "react";
import starSvg from "../../assets/images/svg/star.svg";
import Icon from "../Icon/Icon";
import "../../assets/styles/rating/rating.scss";

interface RatingProps {
    size?: number;
};

const Rating: FC<RatingProps> = (props) => {
    const {
        size
    } = props;

    const stars = Array(5).fill(0);
    const [currentValue, setCurrentValue] = useState<number>(0);
    const [hoverValue, setHoverValue] = useState<any>(null);


    return (
        <div className={"rating"}>
            {
                stars.map((_, index) =>
                    <Icon
                        width={size}
                        height={size}
                        key={index}
                        src={starSvg}
                        alt={"rating"}
                    />
                )
            }
        </div>
    );
};

export default Rating;