import './App.css';
import MainPage from "./main/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RoutesLayout from "./main/RoutesLayout";
import BeingPage from "./main/BeingPage";

function App(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<RoutesLayout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/menu1"} element={<BeingPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default App;
