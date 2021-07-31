import {FC} from "react";
import TextArea from "../../TextArea/TextArea";
import Rating from "../../Rating/Rating";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import Button from "../../Button/Button";

interface FeedbackModalProps {
    setFeedbackModalOpen: (arg: boolean) => void;
}

const FeedbackModal: FC<FeedbackModalProps> = (props) => {
    const {
        setFeedbackModalOpen
    } = props;

    return (
        <div className={"feedback-modal"}>
            <div className={"feedback-modal__header"}>
                <h3 className={"feedback-modal__title"}>
                    Отзыв о компании Актобе Монтаж<br/>Автоматика
                </h3>
            </div>
            <div className={"feedback-modal__text"}>
                <h4>
                    Напишите отзыв о компании
                </h4>
                <TextArea
                    name={"feedback-textarea"}
                    id={"feedback-textarea"}
                    placeholder={"Напишите комментарии..."}
                    width={434}
                    height={120}
                />
            </div>
            <div className={"feedback-modal__rating"}>
                <h4>
                    Напишите отзыв о компании
                </h4>
                <Rating count={5} rate={4} size={20}/>
            </div>
            <ButtonGroup
                className={"feedback-modal__btn"}
            >
                <Button
                    className={"btn-ghost"}
                    width={72}
                    onClick={() => setFeedbackModalOpen(false)}
                >
                    Отмена
                </Button>
                <Button
                    className={"btn-primary"}
                    width={136}
                >
                    отправить отзыв
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default FeedbackModal;