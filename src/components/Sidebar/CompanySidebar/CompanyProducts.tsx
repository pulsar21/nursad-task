import React, {FC} from 'react';
import Search from "../../Search/Search";
import Card from "../../Card/Card";
import CardItem from "../../Card/CardItem/CardItem";
import Icon from "../../Icon/Icon";
import productPng from "../../../assets/images/png/product.png";
import Button from "../../Button/Button";

interface CompanyProductsProps {

}

interface IProductCardData {
    id: number,
    name: string,
    group: string,
    product_code: string,
    volume: number,
    price: number,
    src: string
}

const CompanyProducts: FC<CompanyProductsProps> = () => {

    const productCardData: IProductCardData[] = [
        {
            id: 1,
            name: "Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.",
            group: "Группа 22-060404 Порожные планки",
            product_code: "22-060404-10001",
            volume: 0,
            price: 2500,
            src: productPng
        },
        {
            id: 1,
            name: "Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.",
            group: "Группа 22-060404 Порожные планки",
            product_code: "22-060404-10001",
            volume: 0,
            price: 2500,
            src: productPng
        },
        {
            id: 2,
            name: "Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.",
            group: "Группа 22-060404 Порожные планки",
            product_code: "22-060404-10001",
            volume: 0,
            price: 2500,
            src: productPng
        },
        {
            id: 3,
            name: "Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.",
            group: "Группа 22-060404 Порожные планки",
            product_code: "22-060404-10001",
            volume: 0,
            price: 2500,
            src: productPng
        },
        {
            id: 4,
            name: "Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.",
            group: "Группа 22-060404 Порожные планки",
            product_code: "22-060404-10001",
            volume: 0,
            price: 2500,
            src: productPng
        },
        {
            id: 5,
            name: "Планка с резиной против скольжения 45 мм А-943 золото, серебро, бронза 2,7 м.",
            group: "Группа 22-060404 Порожные планки",
            product_code: "22-060404-10001",
            volume: 0,
            price: 2500,
            src: productPng
        }
    ]
    return <>
        <div className={"company-info__search"}>
            <Search
                height={30}
                placeholder={"Поиск по наименованию..."}
            />
        </div>
        <Card
            className={"products__card"}
        >
            {
                productCardData.map((product) =>
                    <CardItem
                        className={"products__item"}
                        key={`${Math.random()}${product.id}}`}
                        body={
                            <>
                                <div className={"products__thumb"}>
                                    <Icon
                                        src={productPng}
                                        alt={"product"}
                                    />
                                    <Button
                                        className={"btn-primary"}
                                        width={100}
                                    >
                                        В корзину
                                    </Button>
                                </div>
                                <div className={"products__content"}>
                                    <h3 className={"name"}>
                                        {
                                            product.name
                                        }
                                    </h3>
                                    <p className={"group"}>
                                        {
                                            product.group
                                        }
                                    </p>
                                    <p className={"code"}>
                                        Код товара: {product.product_code}
                                    </p>
                                    <p className={"volume"}>
                                        Минимальный объем: {product.volume} м
                                    </p>
                                    <p className={"price"}>
                                        Цена розничная: {product.price} ₸
                                    </p>
                                </div>
                            </>
                        }
                    />
                )
            }
        </Card>
    </>
};

export default CompanyProducts;