import {FC} from "react";
import "../../assets/styles/company-register/company-register.scss";
import Divider from "../../components/Divider/Divider";
import {ICompany} from "../../types/types";
import CompanyFilters from "../../components/CompanyRegister/CompanyFilters";
import CompanyResult from "../../components/CompanyRegister/CompanyResult";
import {useTypedSelector} from "../../hooks/useTypedSelector";

interface CompanyRegister {

}

const CompanyRegister: FC<CompanyRegister> = () => {

    const { companies } = useTypedSelector(state => state.company);
    console.log(companies)
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
            <Divider color={"#B9BDC3"} />
            <CompanyResult companies={companies}/>
        </section>
    );
};

export default CompanyRegister;