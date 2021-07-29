import {FC} from "react";
import "../../assets/styles/company-register/company-register.scss";
import Divider from "../../components/Divider/Divider";
import Dropdown from "../../components/Dropdown/Dropdown";
import {ICompany} from "../../types/types";
import ButtonGroup from "../../components/ButtonGroup/ButtonGroup";
import Button from "../../components/Button/Button";
import Search from "../../components/Search/Search";
import Card from "../../components/Card/Card";
import CardItem from "../../components/Card/CardItem/CardItem";
import Icon from "../../components/Icon/Icon";
import industriesSvg from "../../assets/images/svg/industries.svg";
import citySvg from "../../assets/images/svg/city.svg";
import descriptionSvg from "../../assets/images/svg/description.svg";
import locationSvg from "../../assets/images/svg/location.svg";
import Empty from "../../components/Empty/Empty";

interface CompanyRegister {

}

const CompanyRegister: FC<CompanyRegister> = () => {
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
        <section className={"company-register"}>
            <h1 className={"company-register__title"}>
                Реестр компаний
            </h1>
            <p className={"company-register__description"}>
                Тысячи поставщиков со всего Казахстана в едином реестре.<br/>
                Находите компании, оценивайте благонадежность и приглашайте в тендер.
            </p>
            <div className={"company-register__filters"}>
                <div className={"region"}>
                    <h3 className={"title"}>Регион</h3>
                    <Dropdown
                        width={218}
                        title={"Весь Казахстан"}
                        data={companies}
                    />
                </div>
                <div className={"activity"}>
                    <h3 className={"title"}>Сфера деятельности</h3>
                    <Dropdown
                        width={218}
                        title={"Все категории"}
                        data={companies}
                    />
                </div>
                <div className={"years"}>
                    <h3 className={"title"}>Сфера деятельности</h3>
                    <ButtonGroup>
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
                        <Button width={48} className={"btn-primary"}>
                            5 +
                        </Button>
                    </ButtonGroup>
                </div>
                <div className={"bin"}>
                    <h3 className={"title"}>Сфера деятельности</h3>
                    <Search
                        placeholder={"Начните набирать..."}
                        width={218}
                        height={30}
                        data={companies}
                    />
                </div>
                <div className={"name"}>
                    <h3 className={"title"}>Сфера деятельности</h3>
                    <Search
                        placeholder={"Начните набирать..."}
                        width={218}
                        height={30}
                        data={companies}
                    />
                </div>
                <div className={"feedback"}>
                    <h3 className={"title"}>Сфера деятельности</h3>
                    <ButtonGroup
                    >
                        <Button
                            width={109}
                        >
                            Нет
                        </Button>
                        <Button
                            className={"btn-primary"}
                            width={109}
                        >
                            Да
                        </Button>
                    </ButtonGroup>
                </div>
                <div className={"rating"}>
                    <h3 className={"title"}>Сфера деятельности</h3>
                    <Dropdown
                        width={218}
                        title={"Все компании"}
                        data={companies}
                    />
                </div>
                <div className={"search"}>
                    <Button className={"btn-success"} width={209}>
                        Начать поиск
                    </Button>
                </div>
            </div>
            <Divider color={"#B9BDC3"} stretch={25}/>
            <div className={"company-register__result"}>
                <h3 className={"title"}>
                    Найдено: { companies.length } компании
                </h3>
                {
                    companies.length > 0 ?
                        <Card
                            width={656}
                        >
                            {
                                companies.map((company) =>
                                    <CardItem
                                        key={company.id}
                                        title={company.name}
                                        body={
                                            <div className={"content"}>
                                                <div className={"content__item"}>
                                                    <Icon src={industriesSvg} alt={"industries"} width={20} height={16}/>
                                                    <p className={"content__text"}>{company.industries}</p>
                                                </div>
                                                <div className={"content__item"}>
                                                    <Icon src={citySvg} alt={"city"} width={20} height={16}/>
                                                    <p className={"content__text"}>{company.city}</p>
                                                </div>
                                                <div className={"content__item"}>
                                                    <Icon src={descriptionSvg} alt={"description"} width={20} height={16}/>
                                                    <p className={"content__text"}>{company.description}</p>
                                                </div>
                                                <div className={"content__item"}>
                                                    <Icon src={locationSvg} alt={"location"} width={20} height={16}/>
                                                    <p className={"content__text"}>{company.location}</p>
                                                </div>
                                            </div>
                                        }
                                    />
                                )
                            }
                        </Card> :
                        <Empty />
                }
            </div>
        </section>
    );
};

export default CompanyRegister;