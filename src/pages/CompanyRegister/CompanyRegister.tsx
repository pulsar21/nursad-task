import {FC} from "react";
import "../../assets/styles/company-register/company-register.scss";
import Divider from "../../components/Divider/Divider";
import {ICompany} from "../../types/types";
import CompanyFilters from "../../components/CompanyRegister/CompanyFilters";
import CompanyResult from "../../components/CompanyRegister/CompanyResult";

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
        },
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
            <CompanyFilters companies={companies}/>
            <Divider color={"#B9BDC3"} stretch={25}/>
            <CompanyResult companies={companies}/>
        </section>
    );
};

export default CompanyRegister;