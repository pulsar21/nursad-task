import {FC, ReactNode} from 'react';
import Avatar from "../../Avatar/Avatar";
import Map from "../../Map/Map";
import List from "../../List/List";
import ListItem from "../../List/ListItem/ListItem";
import Card from "../../Card/Card";
import CardItem from "../../Card/CardItem/CardItem";
import Rating from "../../Rating/Rating";
import Icon from "../../Icon/Icon";
import phoneSvg from "../../../assets/images/svg/phone.svg";
import messageSvg from "../../../assets/images/svg/message.svg";
import locationSvg from "../../../assets/images/svg/location.svg";
import avatarPng from "../../../assets/images/png/avatar.png";
import profileManPng from "../../../assets/images/png/profile-1.png";
import profilePng from "../../../assets/images/png/profile-2.png";

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

interface CompanyAboutProps {

}

const CompanyAbout: FC<CompanyAboutProps> = (props) => {
    const {

    } = props;

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

    return <>
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
                <Map/>
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
        </div>
    </>
};

export default CompanyAbout;