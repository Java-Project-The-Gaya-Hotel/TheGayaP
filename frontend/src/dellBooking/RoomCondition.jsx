import React, {useEffect, useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import Swal from "sweetalert2";
import 'animate.css';
import styled from 'styled-components'
import "../dellMain/dellmainCss/BtnDateChoose.css"

//stay, hotel component 명명 위해 나눠둠.
const HotelArea = styled.div`
    margin : 1px;
    `
const StayArea = styled.div`
    margin : 1px;
    `
const styles = {
    formCheck: {
        float: "none"
    }
}


function RoomCondition(props) {

// ------------------ 변수 선언 --------------------------
    const data = props.value;
    console.log(data.roomName);

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

    const roomCode = data.roomCode;
    const codeCall = roomCode.startsWith('hotel')

// -----------------date picker type convert--------------------

    const dateA = new Date(startDate);
    const dateB = new Date(endDate);
    const diffCount = dateB.getTime() - dateA.getTime();
    const nights = diffCount / (24 * 60 * 60 * 1000);

// -------------------------------------------------------------

    const [chooseRoomCost, setChooseRoomCost] = useState("");
    const navigate = useNavigate();

    const clickRoomCost1 = () => {
        setChooseRoomCost(data.roomTwinCost);
    }

    const clickRoomCost2 = () => {
        setChooseRoomCost(data.roomFamilyCost);
    }
// -------------------------------------------------------------
    const [allShowCost, setShowCost] = useState()
    const costSum = (chooseRoomCost * adultCount) * nights

    const inputClickE = () => {
        setShowCost(costSum)
        console.log(setShowCost)
    }

    const clickNextE = () => {
        if (chooseRoomCost !== "") {
            navigate(`/nextreserv?sDate=${startDate}&eDate=${endDate}&adultCount=${adultCount}&childCount=${childCount}&total=${totalCount}&hotelName=${hotelName}&hotelNum=${hotelNum}&roomCode=${roomCode}&roomCost=${chooseRoomCost}&nights=${nights}&costSum=${costSum}`, {replace: true});
        } else {
            Swal.fire('사용하실 방을 선택해 주세요 ');
        }
    };


    return (

        <div>

            <h5 className={"p-2 fw-bold"}>{data.roomName}</h5>
            <div className={"row text-center align-items-center"}>
                <div className={"col"}><img src={"https://source.unsplash.com/random/300x300/?hotelroom"}/></div>
                <div className={"col"}></div>
                <div className={"col"}></div>
                <div className={"col"}>
                    <button className={"btnDate"} role={"button"} onClick={() => setCOpen(!cOpen)} aria-controls="example-collapse-text" aria-expanded={cOpen}><span className="text">객실 찾기</span> Find Room</button>
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
                                        <button className={"col btnDate"} onClick={clickNextE}><span>예약하기</span>Payment</button>
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
                                        <button className={"col btnDate"} onClick={clickNextE}><span>예약하기</span>Payment</button>
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
