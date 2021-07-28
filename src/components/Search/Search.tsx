import {ChangeEventHandler, FC} from "react";
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
    onChange?: () => ChangeEventHandler<HTMLInputElement>;
}

const Search: FC<SearchProps> = (props) => {
    const {
        children, data, placeholder, value,
        width, height, onChange
    } = props;

    return (
        <div
            className={"search"}
        >
            <div
                className={"search__field"}
            >
                <Input
                    type={"search"}
                    placeholder={placeholder}
                    width={width}
                    height={height}
                    value={value}
                    onChange={onChange}
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
            <div
                className={"search__result"}
            >
                {
                    data
                }
            </div>
        </div>
    );
};

export default Search;