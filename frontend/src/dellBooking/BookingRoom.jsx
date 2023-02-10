import React, {useEffect, useState} from "react";
import RoomCondition from "./RoomCondition";
import "../dellMain/dellmainCss/BtnDateChoose.css"
import "./dellBookingCss/NavColor.css"
import {useLocation} from "react-router-dom";
import axios from "axios";


function BookingRoom() {

    //객실조회


    //주소 값 받아오기
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    // const adultCount = searchParams.get('adultCount');
    // const childCount = searchParams.get('childCount')
    // const totalCount = searchParams.get('total')
    // const hotelName = searchParams.get('hotelName');
    const [hotelRoomList, setHotelRoomList] = useState([]);
    // const startDate = searchParams.get('sDate');
    // const endDate = searchParams.get('eDate');




    //date moment 설정하기


    // 받아온 정보들로 axios 통신하여 예약이 중첩되지 않은 방을 가져오는 코드
    useEffect(() => {

        axios.get("http://localhost:8080/gaya/roomlist", {

            params: {
                hotelNum: searchParams.get('hotelNum'),
                sDate: searchParams.get('sDate'),
                eDate: searchParams.get('eDate'),
                adultCount:searchParams.get('adultCount'),
            }
        })
            .then((req) => {
                const {data} = req
                setHotelRoomList(data)
            })
            .catch(e => {
                console.log(e)
            })


    }, [])


    return (
        <div>
            {/*Bread crumb*/}
            <div className={"pt-2 pb-4 mb-5 animate__animated animate__fadeInDown"}>
                <section>
                    <nav>
                        <ol className="cd-multi-steps text-top">
                            <li className={"visited fw-lighter"}><em> Booking Condition </em></li>
                            <li className={"current fw-bolder"}><a> Room Condition</a></li>
                            <li><em>Payment Information</em></li>
                        </ol>
                    </nav>
                </section>

                {/*<div>*/}
                {/*    <hr/>*/}
                {/*    <div className={"container text-center"}>*/}
                {/*        선택한 조건라인*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*</div>*/}

                <div className={"container pt-5 pb-5"} id={"navLikBtnColor"}>
                    <nav>
                        <nav className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">회원 전용 객실</button>
                            {/*<button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">일반 객실</button>*/}
                        </nav>

                    </nav>
                    <hr className={"m-4 border-0"}/>

                    {/*tab - Content */}
                    <div className="tab-content" id="nav-tabContent">

                        {/* tab - 1 회원 전용*/}

                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                            <div>
                                <div className={"container"}>
                                        <hr className={"border-0"}/>
                                    <h2 className={"fw-bold"}>Room Condition</h2>
                                    <hr className={"border-0"}/>

                                    {/* 객실 묶음 */}



                                    {
                                        hotelRoomList.map((room, index) => {
                                            return (
                                                <div key={index}>
                                                    <RoomCondition value={room}/>
                                                </div>
                                            )
                                        })
                                    }



                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </div>

    )
}


export default BookingRoom;
