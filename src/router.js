import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home/Home";

export const routeObject = [
    {
        path: "/",
        name : "Home",
        element: <Home />,
        isMainMenu : true
    },
];

const router = createBrowserRouter(routeObject);

export default router;