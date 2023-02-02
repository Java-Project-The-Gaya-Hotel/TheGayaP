import React, {forwardRef, useEffect, useState} from "react";
import {useLocation, useNavigate} from 'react-router-dom';
import DatePicker from "react-datepicker";
import {getYear, getMonth, addDays} from "date-fns";
import {ko} from "date-fns/esm/locale";
import axios from "axios";
import "../dellBooking/dellBookingCss/formCss.css"
import "../dellMain/dellmainCss/BtnDateChoose.css"
import "../dellBooking/dellBookingCss/AccoCss.css"
import data from "bootstrap/js/src/dom/data";
import Swal from "sweetalert2";
import {now} from "moment";

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
    const [count, setCount] = useState(1); // 성인
    const [personnel, setPersonnel] = useState(0) //총 토탈
    const [childCount, setChildCount] = useState(0); //아이
    const [hotelNameList, setHotelNameList] = useState([])
    const [hotelName, setHotelName] = useState("");
    const getSDate = searchParams.get('sDate');
    const getEDate = searchParams.get('eDate');


    // datepicker 변수 / datepicker data 가져와 연동
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const testStart = new Date(getSDate)
        setStartDate(testStart);

        const testEnd = new Date(getEDate)
        setEndDate(testEnd);

    }, [])


    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };


    // hotel List 가져오기
    //axios input button roop connection
    useEffect(() => {
        axios.get("http://10.100.204.69:8080/gaya/hotelname")
            .then((req) => {
                const {data} = req
                setHotelNameList(data);
            })
            .catch(e => {
                console.log("err>>" + e);
            })
    }, [])


    const onBtnClick = e => {
        setHotelName(e.target.value);
    };

// datepicker header css에 사용할 변수
//     const _ = require('lodash');
//     const years = _.range(2023, getYear(new Date()) + 2, 1);
//     //공식 문서대로 사용하면 오류나기때문에 수정함.
//     const months = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];


    const CustomInput = forwardRef(({value, onClick}, ref) => (
        <button className="btn btn-outline-secondary" onClick={onClick} ref={ref}>
            {value}
        </button>))

    const navigate = useNavigate();
    const clickE = () => {
        navigate(`/reservroom?sDate=${startDate}&eDate=${endDate}&count=${count}&childCount=${childCount}&total=${personnel}&hotelName=${hotelName}`, {replace: true})
    };

// 뒤로가기 클릭 시 이전 페이지가 아닌 메인으로 돌아가게 만듬. 기본 값 : false

// 인원 수 계산

    const plusBtn = () => {

        let adult = count;
        let totalP;

        adult++
        totalP = adult + childCount;

        if (totalP > 4) {
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 총 인원 수는 4명까지 선택할 수 있습니다. ',
                footer: '<a href=""> 고객문의 안내는 여기로 </a>'
            })
        } else {
            setCount(adult);
            setPersonnel(totalP);

        }

    }

    const minusBtn = () => {

        let adult = count;

        adult--

        if (adult < 1) {
            setCount(1);
        } else {

            setCount(adult);
        }

    }

    const cdPlusBtn = () => {
        let child = childCount;
        let totalP;

        child++
        totalP = count + child;
        if (totalP > 4) {
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 총 인원 수는 4명까지 선택할 수 있습니다. ',
                footer: '<a href=""> 고객문의 안내는 여기로 </a>'
            })
        } else {
            setChildCount(child);
            setPersonnel(totalP);
        }
    }

    const cdMinusBtn = () => {
        let child = childCount;

        child--
        if (child < 0) {
            setChildCount(0);
        } else {

            setChildCount(child);
        }
    }


    return (
        <div>
            <div className={"container"}>
                <div className="wrapper">
                    <ul className="mainMenu">
                        <li className="item" id="account">
                            <a href="#account" className="btnAcc">호텔 선택</a>
                            <div className="subMenu">
                                <div className={"container"}>
                                    <div className={"row justify-content-center"}>
                                        {
                                            hotelNameList.map((item, idx) => {
                                                    return (
                                                        <input key={idx} type={"button"} style={styles.inputBox} className={"text-center form-control rounded-0 m-3"} value={item} readOnly={true} onClick={onBtnClick}/>
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
                                <div className={"container p-5 text-center"}>
                                    <div className={"row"}>
                                        {/*<div className={"col"}>*/}
                                        {/*    <DatePicker*/}
                                        {/*        dateFormat="yyyy-MM-dd"*/}
                                        {/*        selected={startDate}*/}
                                        {/*        onChange={(date) => setStartDate(date)}*/}
                                        {/*        selectsStart*/}
                                        {/*        startDate={startDate}*/}
                                        {/*        endDate={endDate}*/}
                                        {/*        minDate={new Date()}*/}
                                        {/*        locale={ko}*/}
                                        {/*        customInput={<CustomInput/>}*/}
                                        {/*        inline*/}
                                        {/*    />*/}
                                        {/*</div>*/}
                                        {/*<div className={"col"}>*/}
                                        {/*    <DatePicker*/}
                                        {/*        dateFormat="yyyy-MM-dd"*/}
                                        {/*        selected={endDate}*/}
                                        {/*        onChange={(date) => setEndDate(date)}*/}
                                        {/*        selectsEnd*/}
                                        {/*        startDate={startDate}*/}
                                        {/*        endDate={endDate}*/}
                                        {/*        minDate={new Date()}*/}
                                        {/*        locale={ko}*/}
                                        {/*        customInput={<CustomInput/>}*/}
                                        {/*        inline*/}
                                        {/*    />*/}
                                        {/*</div>*/}
                                        <DatePicker
                                            dateFormat={"yyyy-MM-dd"}
                                            selected={startDate}
                                            onChange={onChange}
                                            startDate={startDate}
                                            endDate={endDate}
                                            selectsRange
                                            minDate={new Date(now())}
                                            maxDate={addDays(startDate, 29)}                                            locale={ko}
                                            monthsShown={2}
                                            inline
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="item" id="support">
                            <a href="#support" className="btnAcc">인원
                                <div className={"row d-flex text-end"}>
                                    <div className={"col"}>성인 : {count} </div>
                                    <div className={"col"}>어린이 : {childCount}</div>
                                </div>
                            </a>
                            <div className="subMenu">

                                <div className={"container"}>
                                    <div className={"row"}>
                                        <button className={"col-auto"} onClick={minusBtn}>
                                            인원수 감소
                                        </button>
                                        <div className={"col-auto"}>
                                            <h4>어른 : {count}</h4>

                                        </div>
                                        <button className={"col-auto"} onClick={plusBtn}>
                                            인원수 증가
                                        </button>
                                    </div>

                                    <div className={"row"}>
                                        <button className={"col-auto"} onClick={cdMinusBtn}>
                                            인원수 감소
                                        </button>
                                        <div className={"col-auto"}>
                                            <h4>아이 : {childCount}</h4>
                                        </div>
                                        <button className={"col-auto"} onClick={cdPlusBtn}>
                                            인원수 증가
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <hr className={"border-0"}/>

                    <ul className={""}>
                        <li>요금에는 10% 부가가치세가 부과됩니다.</li>
                        <li>2인 1실 기준</li>
                        <li>체크인 시 등록카드 작성 및 투숙객 본인 확인을 위해 본인 사진이 포함된 신분증을 반드시 제시해 주시기 바랍니다.</li>
                        <li>13세 이하 어린이는 객실 인원 추가 요금을 받지 않습니다.</li>
                        <li>37개월 미만 유아는 조식이 무료입니다.</li>
                        <li>안내견을 제외한 애완견 등 동물 입장은 불가합니다.</li>
                        <li>부모를 동반하지 않은 만 19세 미만 미성년자는 투숙할 수 없습니다. (청소년 보호법 30조/58조)</li>
                        <li>상기 요금은 할인 요금이며, 중복 할인은 적용되지 않습니다.</li>
                        <li>자세한 객실안내는 02-2230-0700로 문의 바랍니다.</li>
                    </ul>
                </div>

                <div className={"d-flex justify-content-center p-5"}>
                    <button className={"btnDate"} role={"button"} onClick={clickE}><span className="text">객실 찾기</span>Booking</button>
                </div>
            </div>
        </div>

    )
}

export default BookingAccordion