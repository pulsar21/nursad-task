import {FC, useState} from "react";
import "../../assets/styles/rating/rating.scss";
import Star from "../Icon/Star/Star";
import Input from "../Input/Input";

interface RatingProps {
    rate?: number;
    count?: number;
    size?: number;
    disabled?: boolean;
    readonly?: boolean;
};

const Rating: FC<RatingProps> = (props) => {
    const {
        size, count, rate, disabled,
        readonly
    } = props;

    const [rating, setRating] = useState<number>(rate ?? 0);

    return (
        <div className={"rating"}>
            {
                [...Array(count ?? 5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                        <label
                            key={index}
                            className={"rating__label"}
                        >
                            <Input
                                type={"radio"}
                                name={"rating"}
                                value={ratingValue}
                                readOnly={readonly}
                                disabled={disabled}
                                onClick={() => setRating(ratingValue)}
                            />
                            <Star
                                width={size}
                                height={size}
                                color={ratingValue <= rating ? "1" : "0.2"}
                            />
                        </label>
                    );
                })
            }
        </div>
    );
};

export default Rating;