import MainPage from "./dellMain/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RoutesLayout from "./dellMain/RoutesLayout";
import BeingPage from "./dellMain/BeingPage";
import ReservationPage from "./dellReservation/ReservationPage";
import ReservationPageDetail from "./ reservation/ReservationPageDetail";

function DellReact(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<RoutesLayout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/menu1"} element={<BeingPage/>}/>
                        <Route path={"/reservation"} element={<ReservationPage/>}/>
                        <Route path={"/reservationPage"} element={<ReservationPageDetail/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>

        </div>
    );
}

export default DellReact;
