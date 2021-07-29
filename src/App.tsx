import {ICompany} from "./types/types";
import "./assets/styles/app/app.scss";
import AppRouter from "./components/Router/AppRouter";

const App = () => {
    const companies: ICompany[] = [
        {
            id: 1,
            name: "Актобе Монтаж Автоматика",
            industries: "Строительная компания",
            city: "Нур-Султан",
            description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
            location: "Астана, ул. Бухар Жырау 30 н.п.6"
        },
        {
            id: 2,
            name: "Актобе Монтаж Автоматика",
            industries: "Строительная компания",
            city: "Нур-Султан",
            description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
            location: "Астана, ул. Бухар Жырау 30 н.п.6"
        },
        {
            id: 3,
            name: "Актобе Монтаж Автоматика",
            industries: "Строительная компания",
            city: "Нур-Султан",
            description: "Инженерные работы, в том числе электромонтажные и вентиляционные",
            location: "Астана, ул. Бухар Жырау 30 н.п.6"
        }
    ];
    return (
        <div className={"app"}>
            <div className={"app-container"}>
                <AppRouter />
            </div>
        </div>
    );
};

export default App;