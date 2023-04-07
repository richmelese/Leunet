import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Services from "./Pages/Services/Services";

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
    },
    {
        path: "/services",
        name : "services",
        element: <Services />,
        isMainMenu : true
    }
];

const router = createBrowserRouter(routeObject);

export default router;