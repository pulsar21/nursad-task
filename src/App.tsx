import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import addSvg from "./assets/images/svg/add.svg";
import basketSvg from "./assets/images/svg/basket-regular.svg";
import infoSvg from "./assets/images/svg/info.svg";
import citySvg from "./assets/images/svg/city.svg";
import industriesSvg from "./assets/images/svg/industries.svg";
import descriptionSvg from "./assets/images/svg/description.svg";
import locationSvg from "./assets/images/svg/location.svg";
import Input from "./components/Input/Input";
import ButtonGroup from "./components/ButtonGroup/ButtonGroup";
import Search from "./components/Search/Search";
import Dropdown from "./components/Dropdown/Dropdown";
import Avatar from "./components/Avatar/Avatar";
import avatarPng from "./assets/images/png/avatar.png";
import Rating from "./components/Rating/Rating";
import {ICompany} from "./types/types";
import Card from "./components/Card/Card";
import CardItem from "./components/Card/CardItem";
import TextArea from "./components/TextArea/TextArea";
import Radio from "./components/Radio/Radio";
import Divider from "./components/Divider/Divider";
import Modal from "./components/Modal/Modal";
import {useState} from "react";

const App = () => {
    const [modalActive, setModalActive] = useState<boolean>(false);
    console.log(modalActive)
    const companies: ICompany[] = [
        {
            id: 1,
            name: "Актобе Монтаж Автоматика",
            industries: "Строительная компания",
            city: "Нур-Султан",
            description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
            location: "Астана, ул. Бухар Жырау 30 н.п.6"
        },
        {
            id: 2,
            name: "Актобе Монтаж Автоматика",
            industries: "Строительная компания",
            city: "Нур-Султан",
            description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
            location: "Астана, ул. Бухар Жырау 30 н.п.6"
        },
        {
            id: 3,
            name: "Актобе Монтаж Автоматика",
            industries: "Строительная компания",
            city: "Нур-Султан",
            description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
            location: "Астана, ул. Бухар Жырау 30 н.п.6"
        }
    ];
    return (
        <div className={"app"}>
            <Button>
                Да
            </Button>
            <Button className={"btn-success"} width={209}>
                Начать поиск
            </Button>
            <Button className={"btn-primary"} width={186}>
                <Icon
                    src={addSvg}
                    alt={"add"}
                    width={15}
                    height={15}
                    className={"btn__icon"}
                />
                <span className={"btn__text"}>добавить компанию</span>
            </Button>
            <Button className={"btn-info"} width={180}>
                <Icon
                    src={infoSvg}
                    alt={"info"}
                    width={15}
                    height={15}
                    className={"btn__icon"}
                />
                <span className={"btn__text"}>служба поддержки</span>
            </Button>
            <Button className={"btn-info"} width={32}>
                <Icon src={basketSvg} alt={"basket"} width={22} height={22}/>
            </Button>
            <Input
                type={"text"}
                placeholder={"dsadsa"}
                width={218}
            />
            <ButtonGroup
            >
                <Button
                    width={200}
                >
                    Нет
                </Button>
                <Button
                    className={"btn-primary"}
                    width={200}
                >
                    Да
                </Button>
            </ButtonGroup>
            <Search
                placeholder={"Add .."}
                width={200}
                height={30}
                data={companies}
            />
            <Dropdown
                title={"Все компании"}
                width={217}
                height={172}
            />
            <ButtonGroup

            >
                <Button width={32}>
                    1
                </Button>
                <Button width={32}>
                    2
                </Button>
                <Button width={32}>
                    3
                </Button>
                <Button width={32}>
                    4
                </Button>
                <Button width={32}>
                    5
                </Button>
                <Button width={32} className={"btn-primary"}>
                    5 +
                </Button>
            </ButtonGroup>
            <Avatar src={avatarPng} alt={"avatar"} size={32}/>
            <Rating size={24} count={5} rate={2}/>
            {/*<Card*/}
            {/*    width={656}*/}
            {/*>*/}
            {/*    {*/}
            {/*        companies.map((company) =>*/}
            {/*            <CardItem*/}
            {/*                key={company.id}*/}
            {/*                title={company.name}*/}
            {/*                body={*/}
            {/*                    <div className={"content"}>*/}
            {/*                        <div className={"content__item"}>*/}
            {/*                            <Icon src={industriesSvg} alt={"industries"} width={20} height={16}/>*/}
            {/*                            <p className={"content__text"}>{company.industries}</p>*/}
            {/*                        </div>*/}
            {/*                        <div className={"content__item"}>*/}
            {/*                            <Icon src={citySvg} alt={"city"} width={20} height={16}/>*/}
            {/*                            <p className={"content__text"}>{company.city}</p>*/}
            {/*                        </div>*/}
            {/*                        <div className={"content__item"}>*/}
            {/*                            <Icon src={descriptionSvg} alt={"description"} width={20} height={16}/>*/}
            {/*                            <p className={"content__text"}>{company.description}</p>*/}
            {/*                        </div>*/}
            {/*                        <div className={"content__item"}>*/}
            {/*                            <Icon src={locationSvg} alt={"location"} width={20} height={16}/>*/}
            {/*                            <p className={"content__text"}>{company.location}</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                }*/}
            {/*            />*/}
            {/*        )*/}
            {/*    }*/}
            {/*</Card>*/}
            <TextArea
                name={"text"}
                id={"text"}
                placeholder={"Write Text"}
                width={432}
                height={100}
            />
            <div>
                <Radio
                    title={"One"}
                    name={"one"}
                />
                <Radio
                    title={"two"}
                    name={"one"}
                />
                <Radio
                    title={"three"}
                    disabled={true}
                />
                <Radio
                    title={"four"}
                    disabled={true}
                    checked={true}
                />
            </div>
            <Divider />
            <Button
                className={"btn-primary"}
                onClick={() => setModalActive(true)}
            >
                Modal Open
            </Button>
            <Modal active={modalActive} setActive={setModalActive}/>
        </div>
    );
};

export default App;