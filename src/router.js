import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

export const routeObject = [
    {
        path: "/",
        name : "Home",
        element: <Home />,
        isMainMenu : true
    },
    {
        path: "/about",
        name: "about",
        element : <About />,
        isMainMenu: true
    }
];

const router = createBrowserRouter(routeObject);

export default router;