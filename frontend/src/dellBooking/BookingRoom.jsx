import React, {useState} from "react";
import MainFooter from "../dellMain/MainFooter";
import styled from 'styled-components'
import RoomCondition from "./RoomCondition";

//styled components area
const tabBtn = styled.button`
color : #000000;
`



function BookingRoom(props) {

    return (
        <div>
            {/*Bread crumb*/}
            <p className={"pt-4 pb-4"}></p>
            <div className={"pt-4 pb-4 mt-5 mb-5 animate__animated animate__fadeInDown"}>
                <section>
                    <nav>
                        <ol className="cd-multi-steps text-top">
                            {/*<li className="visited"><a>01</a></li>*/}
                            {/*<li className="current"><em>02</em></li>*/}
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

                <div className={"container pt-5 pb-5"}>
                    <nav>
                        <nav className="nav nav-tabs" id="nav-tab" role="tablist">
                            <tabBtn className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">회원 전용</tabBtn>
                            <tabBtn className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">객실</tabBtn>
                        </nav>

                        <div className={"p-3 border border-1 m-3"}>
                            정렬 기능
                        </div>

                    </nav>
                    <hr className={"m-5 border-0"}/>

                    <div className="tab-content" id="nav-tabContent">
                        {/*1번 회원 전용 tab*/}
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                            {/*DB에서 가져오는 반복문 area */}
                            <div className={"container"}>
                                <div className={"row align-items-center"}>
                                    <div className={"col"}>사진</div>
                                    <div className={"col"}>정보</div>
                                    <button type={"button"} className={"col"}> reserve</button>
                                    {/*    Room Condition Table Area  */}
                                </div>
                                <hr/>
                            </div>
                        </div>

                        {/*2번 객실 */}
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                            ...
                        </div>

                    </div>
                </div>
            </div>


            <MainFooter/>
        </div>
    )
}

export default BookingRoom;