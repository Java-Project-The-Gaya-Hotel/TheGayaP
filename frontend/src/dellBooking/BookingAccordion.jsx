import React, {forwardRef, useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import DatePicker from "react-datepicker";
import {getYear, getMonth} from "date-fns";
import {ko} from "date-fns/esm/locale";
import axios from "axios";
import "../dellBooking/dellBookingCss/formCss.css"
import "../dellMain/dellmainCss/BtnDateChoose.css"
import "../dellBooking/dellBookingCss/AccoCss.css"

const styles = {
    inputBox: {
        width: "190px",
        height: "45px",
    }
}


function BookingAccordion() {

    //use location으로 가져 온 주소 값 설정
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const getSDate = searchParams.get('sDate');
    const getEDate = searchParams.get('eDate');
    const count = searchParams.get('people');

    // datepicker 변수 / datepicker data 가져와 연동
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const testStart = new Date(getSDate)
        setStartDate(testStart);

        const testEnd = new Date(getEDate)
        setEndDate(testEnd);

    }, [])

    // hotel List 가져오기
    const [hotelName, setHotelName] = useState([])
    //axios input button roop connection
    useEffect(() => {
        axios.get("http://10.100.204.69:8080/gaya/hotelname")
            .then((req) => {
                const {data} = req
                setHotelName(data);
                console.log(data)
            })
            .catch()
    }, [])

// datepicker header css에 사용할 변수
    const _ = require('lodash');
    const years = _.range(2023, getYear(new Date()) + 2, 1);
    //공식 문서대로 사용하면 오류나기때문에 수정함.
    const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];


    const CustomInput = forwardRef(({value, onClick}, ref) => (
        <button className="btn btn-outline-secondary" onClick={onClick} ref={ref}>
            {value}
        </button>))

const navigate = useNavigate();
    const clickE =()=>{navigate("/reservroom", {replace:true})};
// 뒤로가기 클릭 시 이전 페이지가 아닌 메인으로 돌아가게 만듬. 기본 값 : false

    return (
        <div>
            <div className={"container"}>
                <div className="wrapper">
                    <ui className="mainMenu">
                        <li className="item" id="account">
                            <a href="#account" className="btnAcc">호텔 선택</a>
                            <div className="subMenu">
                                <div className={"container"}>
                                    <div className={"row justify-content-center"}>
                                        {
                                            hotelName.map((name) => {
                                                    return (
                                                        <input type={"button"} style={styles.inputBox} className={"text-center form-control rounded-0 m-3"} value={name} readOnly={true}/>
                                                    );
                                                }
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item" id="about">
                            <a href="#about" className="btnAcc">투숙 기간</a>
                            <div className="subMenu">
                                <div className={"row"}>
                                    <div className={"col"}>
                                        <DatePicker
                                            dateFormat="yyyy-MM-dd"
                                            selected={startDate}
                                            onChange={(date) => setStartDate(date)}
                                            selectsStart
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={new Date()}
                                            locale={ko}
                                            customInput={<CustomInput/>}
                                            inline
                                        />
                                    </div>
                                    <div className={"col"}>
                                        <DatePicker
                                            dateFormat="yyyy-MM-dd"
                                            selected={endDate}
                                            onChange={(date) => setEndDate(date)}
                                            selectsEnd
                                            startDate={startDate}
                                            endDate={endDate}
                                            minDate={new Date()}
                                            locale={ko}
                                            customInput={<CustomInput/>}
                                            inline
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item" id="support">
                            <a href="#support" className="btnAcc">인원</a>
                            <div className="subMenu">
                                <a href="">item-1</a>
                            </div>
                        </li>
                    </ui>
                </div>

                <div className={"d-flex justify-content-center p-5"}>
                    <button className={"btnDate"} role={"button"} onClick={clickE}><span className="text">객실 찾기</span>Booking</button>
                </div>
            </div>
        </div>

    )
}

export default BookingAccordion