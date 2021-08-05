import {FC} from "react";
import "../../assets/styles/modal/modal.scss";
import Icon from "../Icon/Icon";
import closeSvg from "../../assets/images/svg/close.svg";

interface ModalProps {
    className?: string;
    width?: number;
    active: boolean;
    setActive: (active: boolean) => void;
}

const Modal: FC<ModalProps> = (props) => {
    const {
        children, active, setActive, width,
        className
    } = props;
    return (
        <div
            className={active ? `modal active ${className ? `${className}` : ``}` : `modal ${className ? `${className}` : ``}`}
            onClick={() => setActive(!active)}
        >
            <div
                className={active ? `modal__content active` : `modal__content`}
                onClick={e => e.stopPropagation()}
                style={{
                    width: `${width}px`
                }}
            >
                <Icon
                    className={"modal__close"}
                    src={closeSvg}
                    alt={"close"}
                    width={13}
                    height={13}
                    onClick={() => setActive(!active)}
                />
                {
                    children
                }
            </div>
        </div>
    );
};

export default Modal;