import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {PostPage} from "pages/PostPage";
import {AppRoutes} from "shared/model";

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.POST]: ':postId',
}

export const routeConfig: Array<RouteProps> = [
    {
        path: RoutePath.main,
        element: <MainPage/>
    },
    {
        path: RoutePath.post,
        element: <PostPage/>
    },
]