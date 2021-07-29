import {FC} from "react";
import "../../assets/styles/map/map.scss";

interface MapProps {
    className?: string;
    width?: number;
    height?: number;
};

const Map: FC<MapProps> = (props) => {
    const {
        className, width, height
    } = props;

    return (
        <div className={className ? `map ${className}` : `map`}>
            <iframe
                className={"map__iframe"}
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d82466.69082116103!2d73.14719538706055!3d49.76567520507093!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skz!4v1627581786922!5m2!1sru!2skz"
                width={width}
                height={height}
                style={{border: 0}}
                allowFullScreen={false}
                loading="lazy"
            >
            </iframe>
        </div>
    );
};

export default Map;