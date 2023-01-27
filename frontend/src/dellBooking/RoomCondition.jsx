import React, {useEffect, useState} from "react";
import BeingImg from "../mainImg/pexels-castorly-stock-3761182.jpg";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {useLocation, useNavigate, useNavigation} from "react-router-dom";
import moment from "moment/moment";


function RoomCondition(props) {
    // const roomOpenInfo = (e) => {
    //     if (!showRoom) {
    //
    //         setShowRoom(prevState => true);
    //     } else {
    //         setShowRoom(prevstate => false);
    //     }
    // }

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

    const [chooseValue, setChooseValue] = useState();

    startDate = moment().format('YYYY-MM-DD');
    endDate = moment().format('YYYY-MM-DD');


    return (

        <div>

            <h5 className={"p-2"}>{data.roomName}</h5>
            <div className={"row text-center align-items-center"}>
                <div className={"col"}><img src={BeingImg}/></div>
                <div className={"col"}></div>
                <div className={"col"}></div>
                <div className={"col"}><Button onClick={() => setCOpen(!cOpen)} aria-controls="example-collapse-text" aria-expanded={cOpen}>click</Button></div>
            </div>

            <hr/>

            <Collapse in={cOpen}>
                <div id="example-collapse-text">
                    <div className={"container "}>

                        <div className={"p-3"}>
                            <h5 className={"p-2"}>{data.roomName}</h5>
                            <div className={"text-center align-items-center row"}>
                                <div className="form-check form-check-inline col">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Twin"/>
                                    <label className="form-check-label" htmlFor="inlineRadio1">Twin</label>
                                    <dd className={"col"}>{data.roomTwinCost}</dd>
                                </div>
                                <div className="form-check form-check-inline col">
                                    <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Family"/>
                                        <label className="form-check-label" htmlFor="inlineRadio2">Family</label>
                                    <dd className={"col"}>{data.roomFamilyCost}</dd>
                                </div>

                                <button>ok</button>

                            </div>
                        </div>
                        <hr/>
                    </div>
                </div>
            </Collapse>
        </div>
    );
}

export default RoomCondition;
