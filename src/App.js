import { RouterProvider } from "react-router-dom";
import Footer from "./Components/Footer";
import MainMenu from "./Components/MainMenu";
import router from "./router";

function App() {
    return (
        <div className="App">
            <MainMenu />
            <div className="main-container">
                <RouterProvider router={router} />
            </div>
            {/* <Footer /> */}
        </div>
    );
}

export default App;
