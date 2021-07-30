import {FC, ReactNode, useState} from "react";
import "../../assets/styles/main/main.scss";
import IconIndustry from "../Icon/IconIndustry/IconIndustry";
import Divider from "../Divider/Divider";
import Avatar from "../Avatar/Avatar";
import Map from "../Map/Map";
import List from "../List/List";
import phoneSvg from "../../assets/images/svg/phone.svg";
import messageSvg from "../../assets/images/svg/message.svg";
import locationSvg from "../../assets/images/svg/location.svg";
import Icon from "../Icon/Icon";
import ListItem from "../List/ListItem/ListItem";
import Card from "../Card/Card";
import avatarPng from "../../assets/images/png/avatar.png";
import profileManPng from "../../assets/images/png/profile-1.png";
import profilePng from "../../assets/images/png/profile-2.png";
import CardItem from "../Card/CardItem/CardItem";
import Rating from "../Rating/Rating";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Modal from "../Modal/Modal";
import Radio from "../Radio/Radio";
import TextArea from "../TextArea/TextArea";

interface IFeedbackData {
    id: number,
    title: string,
    icon: ReactNode
}

interface IFeedbackMessageData {
    id: number,
    name: string,
    rating: number,
    date: string,
    message: string,
    avatar: string
}

interface ITenderData {
    id: number,
    name: string
}

const Main: FC = ({ children }) => {
    const [companyInfoOpen, setCompanyInfoOpen] = useState<boolean>(false);
    const [tenderModalOpen, setTenderModalOpen] = useState<boolean>(false);
    const [feedbackModalOpen, setFeedbackModalOpen] = useState<boolean>(false);
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
    const feedbackData: IFeedbackData[] = [
        {
            id: 1,
            title: "+7 (777) 123-45-67 +7 (707) 123-45-67",
            icon: <Icon src={phoneSvg} alt={"phone"} width={18} height={18}/>
        },
        {
            id: 2,
            title: "valiullovd@gmail.com",
            icon: <Icon src={messageSvg} alt={"profile-man"} width={18} height={18}/>
        },
        {
            id: 3,
            title: "Юридический адрес: Нур-Султан, ул. Бухар Жырау 30 н.п.6 ",
            icon: <Icon src={locationSvg} alt={"profile"} width={18} height={18}/>
        }
    ]

    const feedbackMessageData: IFeedbackMessageData[] = [
        {
            id: 1,
            name: "Алия Тургамбекова",
            date: "21 июня 2021",
            rating: 5,
            avatar: avatarPng,
            message: "Добросовестная компания, качественно справились с поставленной задачей, могу рекомендавать другим работать с ними."
        },
        {
            id: 2,
            name: "Алексей Иванов",
            date: "18 июня 2021",
            rating: 4,
            avatar: profileManPng,
            message: "Могу рекомендовать, отличная компания."
        },
        {
            id: 3,
            name: "ТОО СМАТР-СТРОЙ",
            date: "18 июня 2021",
            rating: 4,
            avatar: profilePng,
            message: "Добросовестные ребята!"
        }
    ]
    const companyInfoOpenHandler = () => {
        setCompanyInfoOpen(!companyInfoOpen);
    }
    return (
        <main className={"main"}>
            <div className={"main__block"}>
                {
                    children
                }
            </div>
            <div className={companyInfoOpen ? "company-info open" : "company-info"}>
                <div className={"company-info__content"}>
                    <div className={"company-info__title"}>
                        <IconIndustry width={20} height={16} color={"#434A54"}/>
                        <h3>Актобе Монтаж Автоматика</h3>
                    </div>
                    <Divider color={"#B9BDC3"}/>
                    <div className={"company-info__data"}>
                        <Avatar size={40}/>
                        <div>
                            <h4>БИН: 081240010249</h4>
                            <p>Строительная компания</p>
                        </div>
                    </div>
                    <div className={"company-info__location"}>
                        <div className={"location-map"}>
                            <h4 className="location-map__title">
                                фактическое расположение
                            </h4>
                            <p className="location-map__name">
                                Нур-Султан, ул. Бухар Жырау 30 н.п.6
                            </p>
                            <Map />
                        </div>
                        <div className={"location-info"}>
                            <h4 className="location-info__title">
                                основная информация
                            </h4>
                            <List
                                className={"location-info__list"}
                                items={feedbackData}
                                renderItem={(item: IFeedbackData) =>
                                    <ListItem key={item.id} className={"location-info__item"}>
                                        {
                                            item.icon
                                        }
                                        <h2>{item.title}</h2>
                                    </ListItem>
                                }
                            />
                        </div>
                        <div className={"location-feedback"}>
                            <h4 className="location-feedback__title">
                                отзывы
                            </h4>
                            <Card
                                className={"location-feedback__card"}
                                width={441}
                            >
                                {
                                    feedbackMessageData.map((feedback) =>
                                        <CardItem
                                            className={"location-feedback__item"}
                                            key={feedback.id}
                                            title={
                                                <>
                                                    <div className={"user"}>
                                                        <Avatar src={feedback.avatar} alt={"avatar"} size={32}/>
                                                        <div>
                                                            <h2>
                                                                {
                                                                    feedback.name
                                                                }
                                                            </h2>
                                                            <time>
                                                                {
                                                                    feedback.date
                                                                }
                                                            </time>
                                                        </div>
                                                    </div>
                                                    <div className={"rating"}>
                                                        <Rating
                                                            count={5}
                                                            rate={feedback.rating}
                                                            size={20}
                                                        />
                                                    </div>
                                                </>
                                            }
                                            body={
                                                <p>
                                                    {
                                                        feedback.message
                                                    }
                                                </p>
                                            }
                                        />
                                    )
                                }
                            </Card>
                        </div>
                        <div className={"location-btn"}>
                            <ButtonGroup>
                                <Button
                                    width={160}
                                    className={"btn-primary"}
                                    onClick={() => setTenderModalOpen(true)}
                                >
                                    пригласить в тендер
                                </Button>
                                <Button
                                    width={147}
                                    className={"btn-ghost"}
                                >
                                    в мои поставщики
                                </Button>
                                <Button
                                    width={128}
                                    className={"btn-ghost"}
                                    onClick={() => setFeedbackModalOpen(true)}
                                >
                                    оставить отзыв
                                </Button>
                            </ButtonGroup>
                        </div>
                    </div>
                </div>
            </div>
            <Modal
                active={tenderModalOpen}
                setActive={setTenderModalOpen}
                width={368}
            >
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
            </Modal>
            <Modal
                active={feedbackModalOpen}
                setActive={setFeedbackModalOpen}
                width={464}
            >
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
            </Modal>
        </main>
    );
};

export default Main;