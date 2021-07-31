import React, {FC} from 'react';
import Divider from "../../Divider/Divider";
import List from "../../List/List";
import ListItem from "../../List/ListItem/ListItem";
import Radio from "../../Radio/Radio";
import ButtonGroup from "../../ButtonGroup/ButtonGroup";
import Button from "../../Button/Button";

interface ITenderData {
    id: number,
    name: string
}

interface TenderModalProps {
    setTenderModalOpen: (arg: boolean) => void;
}

const TenderModal: FC<TenderModalProps> = (props) => {
    const {
        setTenderModalOpen
    } = props;

    const tenderData: ITenderData[] = [
        {
            id: 1,
            name: "На закупки цемента"
        },
        {
            id: 2,
            name: "Услуги штукатурщиков"
        },
        {
            id: 3,
            name: "Тендер на закуп кирпичей"
        },
        {
            id: 4,
            name: "На закупки металлопроката"
        }
    ]
    return (
        <div className={"tender-modal"}>
            <div className={"tender-modal__header"}>
                <h3 className={"tender-modal__title"}>Пригласить в тендер</h3>
            </div>
            <Divider stretch={16}/>
            <List
                className={"tender-modal__list"}
                items={tenderData}
                renderItem={(tender: ITenderData) =>
                    <ListItem
                        key={tender.id}
                        className={"tender-modal__item"}
                    >
                        <Radio
                            className={"tender-modal__radio"}
                            title={tender.name}
                            name={"tender"}
                        />
                    </ListItem>
                }
            />
            <ButtonGroup
                className={"tender-modal__btn"}
            >
                <Button
                    className={"btn-primary"}
                    width={160}
                >
                    пригласить в тендер
                </Button>
                <Button
                    className={"btn-ghost"}
                    width={72}
                    onClick={() => setTenderModalOpen(false)}
                >
                    Отмена
                </Button>
            </ButtonGroup>
        </div>
    );
};

export default TenderModal;