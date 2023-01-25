import React, {forwardRef, useEffect, useState} from "react";
import {Link, useLocation, useNavigate} from "react-router-dom";
import {ko} from 'date-fns/esm/locale';
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import styled from 'styled-components'
import "../dellMain/dellmainCss/BtnDateChoose.css"
import "../dellMain/dellmainCss/DatePickerCustomCss.css"
//button component




function DateChoose() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [count, setCount] = useState(1);
    const Navigate = useNavigate();
//date picker

    const MainDatePicker = () => {

        const CustomInput = forwardRef(({value, onClick}, ref) => (
            <button className="btn btn-outline-dark rounded-0 p-1" onClick={onClick} ref={ref}>
                {value}
            </button>))

        return (
            <div className={"d-flex justify-content-between"}>
                <div>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        locale={ko}
                        customInput={<CustomInput/>}
                    />
                </div>

                <div>
                    <DatePicker
                        dateFormat="yyyy-MM-dd"
                        selected={endDate}
                        onChange={(date) => setEndDate(date)}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        locale={ko}
                        customInput={<CustomInput/>}
                    />
                </div>
            </div>
        )

    }


// 인원 count
    const MainCounter = () => {

        const plusBtn = () => {
            setCount(count + 1)
            if (count >= 4) {
                Swal.fire({
                    icon: 'info',
                    title: '확인해주세요!',
                    text: ' 인원 수는 4명까지 선택할 수 있습니다. ',
                    footer: '<a href=""> 고객문의 안내는 여기로 </a>',
                    confirmButtonText: 'OK',
                    confirmButtonColor : 'rgb(0 0 0)'
                });
                setCount((count) => Math.max(4))
            }
        }
        const minusBtn = () => {
            setCount((count) => Math.max(-1, 1))
        }

        return (
            <div>
                <button onClick={minusBtn} className={"btn btn-outline-dark rounded-0 btn-sm"}> - </button>
                <span className={"p-2"}> {count} </span>
                <button onClick={plusBtn} className={"btn btn-outline-dark rounded-0 btn-sm"}> + </button>
            </div>
        )
    }


    const SendReservationInfo = () => {
        Navigate(`/reservation?sDate=${startDate}&eDate=${endDate}&people=${count}`);
        // Navigate('/reservation',
        //     {state: {
        //             startDate: startDate,
        //             endDate: endDate,
        //             count: count}})
    }


    return (
        <div className={"container justify-content-center align-items-baseline"}>
            <div className={"row align-items-center p-3"}>
                <div className={"col"}>
                    <h5 className={"fw-bolder"}> 객실 조회 </h5>
                </div>



                <div className={"col"}>
                    <div className={"container p-0 m-0"}>
                        <dt className={"p-1"}>Check In / Check Out</dt>
                        <dd>
                            <MainDatePicker/>
                        </dd>
                    </div>
                </div>

                <div className={"col"}>
                    <div className={"container p-0 m-0"}>
                        <dt className={"p-1"}> 인원</dt>
                        <dd>
                            <MainCounter/>
                        </dd>
                    </div>
                </div>

                <div className={"col"}>
                    <button className={"btnDate"} role={"button"} onClick={SendReservationInfo}><span className="text">객실 찾기</span>Reservation</button>
                </div>
            </div>
        </div>)
}

export default DateChoose