import {Route, Routes} from "react-router-dom";
import React from "react";
import BaseLayout from "./layouts/BaseLayout";
import {routeConfig} from "./config/routerConfig";


export const Routing = () => {

    return (
        <Routes>
            {routeConfig.map(({element, path}) => (
                <Route
                    key={path}
                    path={path}
                    element={
                        <BaseLayout>
                            {element}
                        </BaseLayout>
                    }
                />
            ))}
        </Routes>
    );
};
