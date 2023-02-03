import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import RoomCondition from "./RoomCondition";
import "../dellMain/dellmainCss/BtnDateChoose.css"
import "./dellBookingCss/NavColor.css"
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import moment from "moment";


function BookingRoom() {

    //객실조회


    //주소 값 받아오기
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const count = searchParams.get('count');
    const childCount = searchParams.get('childCount')
    const personnel = searchParams.get('total')
    const hotelName = searchParams.get('hotelName');
    const [hotelRoomList, setHotelRoomList] = useState([]);
    let startDate = searchParams.get('sDate');
    let endDate = searchParams.get('eDate');
    const [roomCode , setRoomCode] =useState([]);

    startDate = moment().format('YYYY-MM-DD')
    endDate = moment().format('YYYY-MM-DD')


    //date moment 설정하기



    useEffect(() => {
        axios.get("http://localhost:8080/gaya/roomlist", {
            params: {
                hotelName: hotelName,
                sDate: startDate,
                eDate: endDate,
                count: count,
                childCount:childCount,
                total:personnel,
                roomCode:roomCode

            }
        })
            .then((req) => {
                const {data} = req
                setHotelRoomList(data)
                console.log(data)
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
                            <li className={"visited fw-lighter"}><a> Room Condition</a></li>
                            <li className={"current fw-bold"}><a> Find Room </a></li>
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
                                        hotelRoomList.map((room) => {
                                            return (
                                                <div>
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
