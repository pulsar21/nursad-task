import {FC} from "react";
import Icon from "../Icon/Icon";
import closeSvg from "../../assets/images/svg/close.svg";

interface BasketCardProps {
}

const BasketCard: FC<BasketCardProps> = () => {
    return (
        <div className={"basket__card"}>
            <table className={"table basket__table"}>
                <thead className={"thead"}>
                <tr className={"row"}>
                    <th className={"head"}>Наименование товара</th>
                    <th className={"head"}>розничная цена</th>
                    <th className={"head"}>кол-во товара</th>
                </tr>
                </thead>
                <tbody className={"tbody"}>
                <tr className={"row"}>
                    <td className={"column name"}>
                        Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.
                        <Icon src={closeSvg} alt={"close"} width={16} height={16}/>
                    </td>
                    <td className={"column price"}>2 500 ₸</td>
                    <td className={"column quantity"}>Укажите количество товара</td>
                </tr>
                <tr className={"row"}>
                    <td className={"column name"}>
                        Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.
                        <Icon src={closeSvg} alt={"close"} width={16} height={16}/>
                    </td>
                    <td className={"column price"}>2 500 ₸</td>
                    <td className={"column quantity"}>Укажите количество товара</td>
                </tr>
                <tr className={"row"}>
                    <td className={"column name"}>
                        Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.
                        <Icon src={closeSvg} alt={"close"} width={16} height={16}/>
                    </td>
                    <td className={"column price"}>2 500 ₸</td>
                    <td className={"column quantity"}>Укажите количество товара</td>
                </tr>
                <tr className={"row"}>
                    <td className={"column name"}>
                        Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.
                        <Icon src={closeSvg} alt={"close"} width={16} height={16}/>
                    </td>
                    <td className={"column price"}>2 500 ₸</td>
                    <td className={"column quantity"}>Укажите количество товара</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default BasketCard;