import Card from "../Card/Card";
import CardItem from "../Card/CardItem/CardItem";
import Icon from "../Icon/Icon";
import industriesSvg from "../../assets/images/svg/industries.svg";
import citySvg from "../../assets/images/svg/city.svg";
import descriptionSvg from "../../assets/images/svg/description.svg";
import locationSvg from "../../assets/images/svg/location.svg";
import Empty from "../Empty/Empty";
import {FC, memo, MouseEvent, useEffect} from "react";
import {ICompany} from "../../types/types";
import {useTypeAction} from "../../hooks/useTypedAction";
import {fetchOneCompany} from "../../redux/actions/companyAction";

interface CompanyResultProps {
    companies: ICompany[];
}

const CompanyResult: FC<CompanyResultProps> = memo((props) => {
    const {
        companies
    } = props;

    const { setVisibleCompanyInfo, fetchOneCompany, fetchCompanies } = useTypeAction();

    const companyInfoOpenHandler = (e: MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setVisibleCompanyInfo(true);
    }

    useEffect(() => {
        fetchCompanies();
    }, [])

    return (
        <div className={"company-register__result"}>
            <h3 className={"title"}>
                Найдено: {companies.length} компании
            </h3>
            {
                companies.length > 0 ?
                    <Card
                    >
                        {
                            companies.map((company) =>
                                <CardItem
                                    key={company.id}
                                    title={company.name}
                                    onClick={companyInfoOpenHandler}
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
                    <Empty/>
            }
        </div>
    );
});

export default CompanyResult;