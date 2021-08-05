import {FC, MouseEvent} from 'react';
import "../../assets/styles/burger/burger.scss";

interface BurgerProps {
    className?: string;
    sidebarOpenHandler: (e: MouseEvent<HTMLDivElement>) => void;
}

const Burger: FC<BurgerProps> = (props) => {
    const {
        sidebarOpenHandler, className
    } = props;

    return (
        <div
            className={className ? `burger ${className}` : `burger`}
            onClick={sidebarOpenHandler}
        >
            <span></span>
        </div>
    );
};

export default Burger;