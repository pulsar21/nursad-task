import {FC} from "react";
import "../../assets/styles/empty/empty.scss";

interface EmptyProps {
    title?: string;
    description?: string;
}

const Empty: FC<EmptyProps> = (props) => {
    const {
        title, description
    } = props;
    return (
        <div className={"empty"}>
            <h3 className={"empty__title"}>
                {
                    title ?? "Data is empty"
                }
            </h3>
            <p className={"empty__description"}>
                {
                    description
                }
            </p>
        </div>
    );
};

export default Empty;