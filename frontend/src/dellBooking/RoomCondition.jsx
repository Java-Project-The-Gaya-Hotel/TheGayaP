import React, {useEffect, useState} from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import Swal from "sweetalert2";
import 'animate.css';
import styled from 'styled-components'


//stay, hotel component 명명 위해 나눠둠.
const hotelArea = styled.div`
    margin : 1px;
    `
const stayArea = styled.div`
    margin : 1px;
    `


function RoomCondition(props) {

// ------------------ 변수 선언 --------------------------
    const data = props.value;
    console.log(data.roomName);

    const [cOpen, setCOpen] = useState(false);


    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const count = searchParams.get('count');
    const childCount = searchParams.get('childCount')
    const personnel = searchParams.get('total')
    const hotelName = searchParams.get('hotelName');
    let startDate = searchParams.get('sDate');
    let endDate = searchParams.get('eDate');

    const roomCode = data.roomCode;
    const codeCall = roomCode.startsWith('hotel')

// -----------------date picker type convert--------------------

    const dateA = new Date(startDate);
    const dateB = new Date(endDate);
    const diffCount = dateB.getTime() - dateA.getTime();
    const reservationTime = diffCount / (24 * 60 * 60 * 1000);

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
    const costSum = (chooseRoomCost * count) * reservationTime

    const inputClickE = () => {
        setShowCost(costSum)
        console.log(setShowCost)
    }

    const clickNextE = () => {
        if (chooseRoomCost !== "") {
            navigate(`/nextreserv?sDate=${startDate}&eDate=${endDate}&count=${count}&childCount=${childCount}&total=${personnel}&hotelName=${hotelName}&roomCode=${roomCode}&roomCost=${chooseRoomCost}&reservationTime=${reservationTime}&costSum=${costSum}`, {replace: true});
        } else {
            Swal.fire('사용하실 방을 선택해 주세요 ');
        }
    };


    return (

        <div>

            <h5 className={"p-2 fw-bold"}>{data.roomName}</h5>
            <div className={"row text-center align-items-center"}>
                <div className={"col"}><img src={"https://source.unsplash.com/random/?hotelroom"}/></div>
                <div className={"col"}></div>
                <div className={"col"}></div>
                <div className={"col"}><Button onClick={() => setCOpen(!cOpen)} aria-controls="example-collapse-text" aria-expanded={cOpen}>click</Button>

                </div>
            </div>

            <hr/>

            <Collapse in={cOpen}>

                <div id="example-collapse-text">

                    {
                        codeCall === true ?
                            <hotelArea id={"hotel"} className={"container"}>
                                <div className={"p-3"}>
                                    <h5 className={"p-2"}>{data.roomName}</h5>
                                    <div className={"text-center align-items-center row"}>
                                        <div className="form-check form-check-inline col">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={clickRoomCost1}/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Twin</label>
                                            <dd className={"col"}>{data.roomTwinCost}</dd>
                                        </div>
                                        <button onClick={clickNextE}>ok</button>
                                    </div>
                                </div>
                                <hr/>
                            </hotelArea>


                            :

                            <stayArea id={"stay"} className={"container"}>
                                <div className={"p-3"}>
                                    <h5 className={"p-2"}>{data.roomName}</h5>
                                    <div className={"text-center align-items-center row"}>
                                        <div className="form-check form-check-inline col">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onClick={clickRoomCost1}/>
                                            <label className="form-check-label" htmlFor="inlineRadio1">Twin</label>
                                            <dd className={"col"}>{data.roomTwinCost}</dd>

                                        </div>
                                        <div className="form-check form-check-inline col">
                                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onClick={clickRoomCost2}/>
                                            <label className="form-check-label" htmlFor="inlineRadio2">Family</label>
                                            <dd className={"col"}>{data.roomFamilyCost}</dd>

                                        </div>
                                        <button onClick={clickNextE}>ok</button>
                                    </div>
                                </div>
                                <hr/>
                            </stayArea>
                    }
                </div>
            </Collapse>

        </div>
    );
}

export default RoomCondition;
