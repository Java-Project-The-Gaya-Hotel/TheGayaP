import MainPage from "./dellMain/MainPage";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import RoutesLayout from "./dellMain/RoutesLayout";
import BeingPage from "./dellMain/BeingPage";
import BookingPage from "./dellBooking/BookingPage";
import IntroPage from "./dellIntro/IntroPage";
import BookingRoom from "./dellBooking/BookingRoom";
import Login from "./login/Login";
import Join1 from "./join/Join1";
import InquiryList from "./inquiryBoard/InquiryList";


function MainReact(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<RoutesLayout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/reservation"} element={<BookingPage/>}/>
                        <Route path={"/welcome"} element={<IntroPage/>}/>
                        <Route path={"/reservroom"} element={<BookingRoom/>}/>
                        <Route path={"/menu1"} element={<BeingPage/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/join"} element={<Join1/>}/>
                        <Route path={"/qa"} element={<InquiryList/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainReact;
