import {FC, ReactNode} from "react";

interface CardItemProps {
    className?: string;
    title?: string | ReactNode;
    body?: string | ReactNode;
    footer?: string | ReactNode;
    onClick?: () => void;
}

const CardItem: FC<CardItemProps> = (props) => {
    const {
        title, body, footer, onClick,
        className
    } = props;


    return (
        <div
            className={className ? `card__item ${className}` : `card__item`}
            onClick={onClick}
        >
            {
                title ? <div className={"card__header"}>
                    {
                        typeof title === "string" ?
                            <h2 className={"card__title"}>
                                {
                                    title
                                }
                            </h2> :
                            title
                    }
                </div> : null
            }
            {
                body ? <div className={"card__body"}>
                    {
                        body
                    }
                </div> : null
            }
            {
                footer ?  <div className={"card__footer"}>
                    {
                        footer
                    }
                </div> : null
            }
        </div>
    );
};

export default CardItem;