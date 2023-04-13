import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// Layout
const DefaultLayout = lazy(() => import("../components").then(module => ({ default: module.DefaultLayout })));

// Pages
const Home = lazy(() => import("../pages").then(module => ({ default: module.Home })));
const NotFound = lazy(() => import("../pages").then(module => ({ default: module.NotFound })));
const DemoOne = lazy(() => import("../pages").then(module => ({ default: module.DemoOne })));

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/demo1",
                element: <DemoOne />,
            }
        ],
    }
]);

export { router }