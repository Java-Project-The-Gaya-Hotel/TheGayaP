import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import RoomCondition from "./RoomCondition";
import "../dellMain/dellmainCss/BtnDateChoose.css"
import BeingImg from "../mainImg/pexels-castorly-stock-3761182.jpg"
import "./dellBookingCss/NavColor.css"
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";
import moment from "moment";


function BookingRoom(props) {

    //객실조회
    const [showRoom, setShowRoom] = useState(false);

    //주소 값 받아오기
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    let getSDate = searchParams.get('sDate');
    let getEDate = searchParams.get('eDate');
    const count = searchParams.get('people');
    const hotelName = searchParams.get('hotelName');
    const [hotelRoomList, setHotelRoomList]=useState();

    getSDate=moment().format('YYYY-MM-DD');
    getEDate=moment().format('YYYY-MM-DD');


    useEffect(() => {
        axios.get("http://10.100.204.69:8080/gaya/roomlist", {
            params: {
                hotelName:hotelName,
                sDate:getSDate,
                eDate:getEDate,
                count:count,

            }
        })
            .then((req) => {
                const {data} = req
                setHotelRoomList(data)
                console.log(data)
            })
            .catch(e=>{console.log(e)})

    }, [])

    const roomOpenInfo = (e) => {
        if (!showRoom) {
            setShowRoom(prevState => true);
        } else {
            setShowRoom(prevstate => false);
        }
    }


    return (
        <div>
            {/*Bread crumb*/}
            <div className={"pt-2 pb-4 mb-5 animate__animated animate__fadeInDown"}>
                <section>
                    <nav>
                        <ol className="cd-multi-steps text-top">
                            <li className={"visited fw-lighter"}><em> Booking Condition </em></li>
                            <li className={"current fw-bold"}><a> Room Condition</a></li>
                            <li><em>03</em></li>
                            <li><em>04</em></li>
                        </ol>
                    </nav>
                </section>

                <div>
                    <hr/>
                    <div className={"container text-center"}>
                        선택한 조건라인
                    </div>
                    <hr/>
                </div>

                <div className={"container pt-5 pb-5"} id={"navLikBtnColor"}>
                    <nav>
                        <nav className="nav nav-tabs" id="nav-tab" role="tablist">
                            <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">회원 전용 객실</button>
                            <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">일반 객실</button>
                        </nav>

                        <div className={"p-3 border border-1 m-3"}>
                            정렬 기능
                        </div>

                    </nav>
                    <hr className={"m-4 border-0"}/>

                    {/*tab - Content */}
                    <div className="tab-content" id="nav-tabContent">

                        {/* tab - 1 회원 전용*/}
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                            <div className={"container"}>
                                <hr className={"border-0"}/>
                                <h2>Room Condition</h2>
                                <hr className={"border-0"}/>

                                {/* 객실 묶음 */}
                                <div className={"p-3"}>
                                    <h5 className={"p-2"}>Room Name</h5>
                                    <div className={"row text-center align-items-center"}>
                                        <div className={"col"}><img src={BeingImg}/></div>
                                        <div className={"col"}></div>
                                        <div className={"col"}>
                                            <button className={" btnDate"} onClick={roomOpenInfo}><span className="text">객실찾기</span> reserve</button>
                                        </div>
                                        {/*컴포넌트 3항 연산자  ShowRoom t = Roomcondition : f = 공백 */}
                                        <div>
                                            {showRoom ? <RoomCondition/> : <div></div>}
                                        </div>
                                    </div>
                                </div>
                                <hr/>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                            {/* tab - 2 일반 객실*/}
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                                <div className={"container"}>
                                    <hr className={"border-0"}/>
                                    <h2>Room Condition</h2>
                                    <hr className={"border-0"}/>

                                    {/* 객실 묶음 */}
                                    <div className={"p-3"}>
                                        <h5 className={"p-2"}>Room Name</h5>
                                        <div className={"row text-center align-items-center"}>
                                            <div className={"col"}><img src={BeingImg}/></div>
                                            <div className={"col"}>Information</div>
                                            <div className={"col"}>
                                                <button className={" btnDate"} onClick={roomOpenInfo}><span className="text">객실찾기</span> reserve</button>
                                            </div>
                                            {/*컴포넌트 3항 연산자  ShowRoom t = Roomcondition : f = 공백 */}
                                            <div>
                                                {showRoom ? <RoomCondition/> : <div></div>}
                                            </div>
                                        </div>
                                    </div>
                                    <hr/>
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