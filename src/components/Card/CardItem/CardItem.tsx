import {FC, ReactNode} from "react";

interface CardItemProps {
    title?: string;
    body?: string | ReactNode;
    footer?: string | ReactNode;
}

const CardItem: FC<CardItemProps> = (props) => {
    const {
        title, body, footer
    } = props;


    return (
        <div className={"card__item"}>
            <div className={"card__header"}>
                <h2 className={"card__title"}>
                    {
                        title
                    }
                </h2>
            </div>
            <div className={"card__body"}>
                {
                    body
                }
            </div>
            <div className={"card__footer"}>
                {
                    footer
                }
            </div>
        </div>
    );
};

export default CardItem;