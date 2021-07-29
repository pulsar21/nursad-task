import {FC} from "react";
import {publicRoutes} from "../../routes/routes";
import {Switch, Route} from "react-router-dom";
import PublicLayout from "../../layouts/PublicLayout/PublicLayout";

interface AppRouterProps {

};

const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Switch>
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} exact>
                        <PublicLayout>
                            <Component/>
                        </PublicLayout>
                    </Route>
                )
            }
        </Switch>
    );
};

export default AppRouter;