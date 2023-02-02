import MainPage from "./dellMain/MainPage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import RoutesLayout from "./dellMain/RoutesLayout";
import BeingPage from "./dellMain/BeingPage";
import BookingPage from "./dellBooking/BookingPage";
import IntroPage from "./dellIntro/IntroPage";
import BookingRoom from "./dellBooking/BookingRoom";
import Login from "./login/Login";
import Join from "./join/Join";
import InquiryMain from "./inquiryBoard/InquiryMain";
import InquiryList from "./inquiryBoard/inquiryListComp/InquiryList";
import InquiryHotelInfo from "./inquiryBoard/InquiryHotelInfo/InquiryHotelInfo";
import InquiryListTable from "./inquiryBoard/inquiryListComp/InquiryListTable";
import InquiryWrite from "./inquiryBoard/InquiryWriteComp/InquiryWrite";
import InquiryDetail from "./inquiryBoard/inquiryDetailComp/inquiryDetail";
import MypageTest from "./test/MypageTest";
import ReservationPageDetail2 from "./skyReservation/ReservationPageDetail2";
import {Component} from "react";
import IntroPageSeoul from "./dellIntro/introSeoul/IntroPageSeoul";
import IntroPageMain from "./dellIntro/introMain/IntroPageMain";
import IntroPageJeju from "./dellIntro/introJeju/introPageJeju";
import IntroPageStay from "./dellIntro/introStay/introPageStay";



function MainReact(props) {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<RoutesLayout/>}>
                        <Route index element={<MainPage/>}/>
                        <Route path={"/reservation"} element={<BookingPage/>}/>
                        <Route path={"/welcome"} element={<IntroPage/>}>
                            <Route index element={<IntroPageMain/>}/>
                            <Route path={"seoul"} element={<IntroPageSeoul/>}/>
                            <Route path={"jeju"} element={<IntroPageJeju/>}/>
                            <Route path={"stay"} element={<IntroPageStay/>}/>
                        </Route>
                        <Route path={"/reservroom"} element={<BookingRoom/>}/>
                        <Route path={"/menu1"} element={<BeingPage/>}/>
                        <Route path={"/login"} element={<Login/>}/>
                        <Route path={"/join"} element={<Join/>}/>
                        <Route path={"/nextreserv"} element={<ReservationPageDetail2/>}/>
                        <Route path={"/qa"} element={<InquiryMain/>}>
                            <Route index element={<InquiryHotelInfo/>}/>
                            <Route path={"list"} element={<InquiryListTable/>}/>
                            <Route path={"write"} element={<InquiryWrite/>}/>
                            <Route path={"list/detail"} element={<InquiryDetail/>}/>
                        </Route>


                        <Route path={"/test"} element={<MypageTest/>}/>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainReact;
