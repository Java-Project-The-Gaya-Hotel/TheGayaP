import './App.css';
import MainPage from "./dellMain/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RoutesLayout from "./dellMain/RoutesLayout";
import BeingPage from "./dellMain/BeingPage";
import ReservationPage from "./dellReservation/ReservationPage";

function DellReact(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<RoutesLayout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/menu1"} element={<BeingPage/>}/>
                        <Route path={"/reservation"} element={<ReservationPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default DellReact;