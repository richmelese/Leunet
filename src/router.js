import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Services from "./Pages/Services/Services";
import Solutions from "./Pages/Solutions/Solutions";
import ServicesSubServiceList from "./Pages/Services/ServicesSubServiceList";
import ServicesSubServiceDetail from "./Pages/Services/ServicesSubServiceDetail";

export const routeObject = [
    {
        path: "/",
        name: "Home",
        element: <Home />,
        isMainMenu: true,
    },
    {
        path: "/about",
        name: "about",
        element: <About />,
        isMainMenu: true,
    },
    {
        path: "/services",
        name: "services",
        element: <Services />,
        isMainMenu: true,
    },
    {
        path: "/services/:serviceId",
        name: "servicesList",
        element: <ServicesSubServiceList />, 
        isMainMenu: false,
    },
    {
        path: "/services/:serviceId/:subServiceId",
        name: "subServiceDetail",
        element : <ServicesSubServiceDetail />,
        isMainMenu : false
    },
    {
        path: "/products",
        name: "products",
        element: <Products />,
        isMainMenu: true,
    },
    {
        path: "/solutions",
        name: "solutions",
        element: <Solutions />,
        isMainMenu: true,
    },
    {
        path: "/contact-us",
        name: "contact us",
        element: <ContactUs />,
        isMainMenu: true,
    },
];

const router = createBrowserRouter(routeObject);

export default router;
