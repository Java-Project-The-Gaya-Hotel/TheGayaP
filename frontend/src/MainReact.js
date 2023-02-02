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
import ReservationPageDetail2 from "./skyReservation/ReservationPageDetail2";
import MypageNav from "./dellMypage/MypageNav";
import MypageMain from "./dellMypage/MypageMain";
import MyBookingSchedule from "./dellMypage/MyBookingSchedule";
import MyProfile from "./dellMypage/MyProfile";



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
                        <Route path={"/join"} element={<Join/>}/>
                        <Route path={"/nextreserv"} element={<ReservationPageDetail2/>}/>
                        <Route path={"/qa"} element={<InquiryMain/>}>
                            <Route index element={<InquiryHotelInfo/>}/>
                            <Route path={"list"} element={<InquiryListTable/>}/>
                            <Route path={"write"} element={<InquiryWrite/>}/>
                            <Route path={"list/detail"} element={<InquiryDetail/>}/>
                        </Route>
                        <Route path={"/mypage"} element={<MypageNav/>}>
                            <Route index element={<MypageMain/>}/>
                            <Route path={"myBookingSchedule"} element={<MyBookingSchedule/>}/>
                            <Route path={"profilesave"} element={<MyProfile/>}/>
                        </Route>

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default MainReact;
