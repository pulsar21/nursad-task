import Dropdown from "../Dropdown/Dropdown";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import Button from "../Button/Button";
import Search from "../Search/Search";
import {FC} from "react";
import {ICompany} from "../../types/types";

interface CompanyFiltersProps {
    companies: ICompany[];
}

const CompanyFilters: FC<CompanyFiltersProps> = (props) => {
    const {
        companies
    } = props;

    return (
        <div className={"company-register__filters"}>
            <div className={"region"}>
                <h3 className={"title"}>Регион</h3>
                <Dropdown
                    height={263}
                    title={"Весь Казахстан"}
                    data={companies}
                />
            </div>
            <div className={"activity"}>
                <h3 className={"title"}>Сфера деятельности</h3>
                <Dropdown
                    height={198}
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
                    height={30}
                    data={companies}
                />
            </div>
            <div className={"name"}>
                <h3 className={"title"}>Сфера деятельности</h3>
                <Search
                    placeholder={"Начните набирать..."}
                    height={30}
                    data={companies}
                />
            </div>
            <div className={"feedback"}>
                <h3 className={"title"}>Сфера деятельности</h3>
                <ButtonGroup
                >
                    <Button
                    >
                        Нет
                    </Button>
                    <Button
                        className={"btn-primary"}
                    >
                        Да
                    </Button>
                </ButtonGroup>
            </div>
            <div className={"rating"}>
                <h3 className={"title"}>Сфера деятельности</h3>
                <Dropdown
                    title={"Все компании"}
                    data={companies}
                />
            </div>
            <div className={"search"}>
                <Button className={"btn-success"}>
                    Начать поиск
                </Button>
            </div>
        </div>
    );
};

export default CompanyFilters;