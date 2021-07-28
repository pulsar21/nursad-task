import {ChangeEvent, ChangeEventHandler, FC, MouseEvent, MouseEventHandler, SetStateAction, useState} from "react";
import "../../assets/styles/search/search.scss";
import {ICompany} from "../../types/types";
import Input from "../Input/Input";
import Icon from "../Icon/Icon";
import searchSvg from "../../assets/images/svg/search.svg";
import closeSvg from "../../assets/images/svg/close.svg";

interface SearchProps {
    data?: ICompany[];
    placeholder?: string;
    value?: string;
    width?: number;
    height?: number;
}

const Search: FC<SearchProps> = (props) => {
    const {
        children, data, placeholder, value,
        width, height
    } = props;

    const [filteredData, setFilteredData] = useState<ICompany[]>([]);

    return (
        <div
            className={"search"}
        >
            <div
                className={"search__field"}
            >
                <Input
                    type={"text"}
                    placeholder={placeholder}
                    width={width}
                    height={height}
                    value={value}
                />
                <div
                    className={"search__icon"}
                >
                    <Icon
                        src={closeSvg}
                        alt={"close"}
                        width={10}
                        height={10}
                    />
                </div>
            </div>
            {
                filteredData.length !== 0 && (
                    <div
                        className={"search__list"}
                        style={{
                            width: `${width}px`
                        }}
                    >
                        {
                            data?.map(({id, name}) =>
                                <div className={"search__item"} key={id}>
                                    <a href="#" className={"search__link"}>
                                        {
                                            name
                                        }
                                    </a>
                                </div>
                            )
                        }
                    </div>
                )
            }
        </div>
    );
};

export default Search;