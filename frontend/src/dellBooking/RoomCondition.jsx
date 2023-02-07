import React, {useEffect, useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import Swal from "sweetalert2";
import 'animate.css';
import styled from 'styled-components'
import "../dellMain/dellmainCss/BtnDateChoose.css"
import {forEach} from "react-bootstrap/ElementChildren";

//stay, hotel component 명명 위해 나눠둠.
const HotelArea = styled.div`
  margin: 1px;
`
const StayArea = styled.div`
  margin: 1px;
`
const styles = {
    formCheck: {
        float: "none"
    }
}


function RoomCondition(props) {

// ------------------ 변수 선언 --------------------------
    const data = props.value;

    const [cOpen, setCOpen] = useState(false);


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const adultCount = searchParams.get('adultCount');
    const childCount = searchParams.get('childCount')
    const totalCount = searchParams.get('total')
    const hotelName = searchParams.get('hotelName');
    const hotelNum = searchParams.get('hotelNum')
    let startDate = searchParams.get('sDate');
    let endDate = searchParams.get('eDate');
    const [costSum, setCostSum] = useState(0);
    const [weekDay, setWeekDay] = useState(0);
    const [weekEnd, setWeekEnd] = useState(0);
    const [chooseRoomCost, setChooseRoomCost] = useState(0);
    const [chooseRoomWeekendCost, setChooseRoomWeekendCost] = useState(0);
    // 추후삭제
    const [roomCostDetail, setRoomCostDetail] = useState("");

    const roomCode = data.roomCode;
    const codeCall = roomCode.startsWith('hotel')

// -----------------date picker type convert--------------------

    const dateA = new Date(startDate);
    const dateB = new Date(endDate);
    const diffCount = dateB.getTime() - dateA.getTime();
    const nights = diffCount / (24 * 60 * 60 * 1000);

// -------------------------------------------------------------

    const navigate = useNavigate();

    const clickRoomCost1 = () => {
        setChooseRoomCost(data.roomTwinCost);
        setChooseRoomWeekendCost(data.roomTwinWeekend)

    }

    const clickRoomCost2 = () => {
        setChooseRoomCost(data.roomFamilyCost);
        setChooseRoomWeekendCost(data.roomFamilyWeekend);
    }

    // 주중 주말을 구하기 위한 체크인 체크아웃 모든 날짜 구하는 함수
    function getDatesStartToLast(startDate, lastDate) {
        var regex = RegExp(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/);
        if (!(regex.test(startDate) && regex.test(lastDate))) return "Not Date Format";
        var result = [];
        var curDate = new Date(startDate);
        while (curDate <= new Date(lastDate)) {
            result.push(curDate.toISOString().split("T")[0]);
            curDate.setDate(curDate.getDate() + 1);
        }
        return result;
    }

    useEffect(() => {
        const checkAllDay = getDatesStartToLast(startDate, endDate);
        let checkWeekDay = 0;
        let checkWeekEnd = 0;
        let weekDayCost = 0;
        let weekEndCost = 0;
        let overAdultLimit = 0;
        //     체크인 아웃 사이 날짜중 주말을 구함
        checkAllDay.forEach(day => {
            if (new Date(day).getDay() === 0 || new Date(day).getDay() === 6) {
                checkWeekEnd++;
            } else {
                checkWeekDay++;
            }
            // 주말과 주중 날짜 수를 입력
            setWeekDay(checkWeekDay);
            setWeekEnd(checkWeekEnd);
        });
        weekDayCost = (chooseRoomCost * weekDay);
        weekEndCost = (chooseRoomWeekendCost * weekEnd);
        overAdultLimit = 20000 * (adultCount - 1);
        // 어른 인원수가 2명이상일시 2만원 추가요금 계산
        if (adultCount > 1) {
            setCostSum((weekDayCost + weekEndCost) + overAdultLimit);
        } else {
            setCostSum(weekDayCost + weekEndCost);
        }

        setRoomCostDetail(`주중 ${checkWeekDay} 박 요금 = ${weekDayCost} 주말 ${checkWeekEnd} 박 요금 = ${weekEndCost}`)
    }, [chooseRoomCost]);
// -------------------------------------------------------------


    // 예약하기를 눌렀을 때 발동
    const clickNextE = () => {

        if (chooseRoomCost !== "") {
            navigate(`/nextreserv?sDate=${startDate}&eDate=${endDate}&adultCount=${adultCount}&childCount=${childCount}&total=${totalCount}&hotelName=${hotelName}&hotelNum=${hotelNum}&roomCode=${roomCode}&nights=${nights}&costSum=${costSum}&roomName=${data.roomName}`, {replace: true});
        } else {
            Swal.fire('사용하실 방을 선택해 주세요 ');
        }
    };


    return (

        <div>

            <h5 className={"p-2 fw-bold"}>{data.roomName}</h5>
            <div className={"row text-center align-items-center"}>
                <div className={"col"}><img src={`${data.roomImgUrl}`}/></div>
                <div className={"col"}><img src={`${data.roomInfo}`}/></div>
                <div className={"col"}>
                    <button className={"btnDate"} role={"button"} onClick={() => setCOpen(!cOpen)}
                            aria-controls="example-collapse-text" aria-expanded={cOpen}><span
                        className="text">객실 찾기</span> Find Room
                    </button>
                </div>
            </div>

            <hr/>

            <Collapse in={cOpen}>

                <div id="example-collapse-text">

                    {
                        codeCall === true ?
                            <HotelArea id={"hotel"} className={"container"}>
                                <div className={"p-3"}>
                                    <h5 className={"p-2"}>{data.roomName}</h5>
                                    <div className={"text-center align-items-center"}>
                                        <div className={"container p-4"}>
                                            <div className={"row"}>
                                                <div className={"col"}>
                                                    <input className="form-check-input mx-4" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={clickRoomCost1}/>
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Twin</label>
                                                </div>
                                                <div className={"col p-0"}>{data.roomTwinCost}</div>
                                            </div>
                                        </div>

                                        <div className={"container p-4"}>
                                            <div className={"row"}>
                                                <div className={"col"}>
                                                    <input className="form-check-input mx-4" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={clickRoomCost1}/>
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Double</label>
                                                </div>
                                                <div className={"col p-0"}>{data.roomTwinCost}</div>
                                            </div>
                                        </div>
                                        <button className={"col btnDate"} onClick={clickNextE}><span>예약하기</span>Payment
                                        </button>
                                    </div>
                                </div>
                                <hr/>
                            </HotelArea>


                            :

                            <StayArea id={"stay"} className={"container"}>
                                <div className={"container p-3"}>
                                    <h5 className={"p-2"}>{data.roomName}</h5>
                                    <div className={"text-center align-items-center px-5 py-3"}>
                                        <div className={"container p-4"}>
                                            <div className={"row"}>
                                                <div className={"col"}>
                                                    <input className="form-check-input mx-4" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={clickRoomCost1}/>
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Twin</label>
                                                </div>
                                                <div className={"col p-0"}>{data.roomTwinCost}</div>
                                            </div>
                                        </div>

                                        <div className={"container p-4"}>
                                            <div className={"row"}>
                                                <div className={"col"}>
                                                    <input className="form-check-input mx-4" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={clickRoomCost2}/>
                                                    <label className="form-check-label" htmlFor="inlineRadio1">Family</label>
                                                </div>
                                                <div className={"col p-0"}>{data.roomFamilyCost}</div>
                                            </div>
                                        </div>
                                        <button className={"col btnDate"} onClick={clickNextE}><span>예약하기</span>Payment
                                        </button>
                                    </div>
                                </div>
                                <hr/>
                            </StayArea>
                    }
                </div>
            </Collapse>

        </div>
    );
}

export default RoomCondition;
