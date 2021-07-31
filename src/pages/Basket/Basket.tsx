import {FC} from "react";
import "../../assets/styles/basket/basket.scss";
import Button from "../../components/Button/Button";
import BasketCard from "../../components/Basket/BasketCard";

const Basket: FC = () => {
    return (
        <section className={"basket"}>
            <h1 className={"basket__title"}>
                Корзина
            </h1>
            <BasketCard />
            <Button
                className={"btn-success basket__btn"}
                width={137}
                height={48}
            >
                заказать
            </Button>
        </section>
    );
};

export default Basket;