import React, {forwardRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {ko} from 'date-fns/esm/locale';
import DatePicker from "react-datepicker";
import Swal from "sweetalert2";
import "../dellMain/dellmainCss/BtnDateChoose.css"
import "../dellMain/dellmainCss/DatePickerCustomCss.css"

//button component


function DateChoose() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [adultCount, setAdultCount] = useState(1); // 성인
    const [childCount, setChildCount] = useState(0); // 아이
    const [totalCount, setTotalCount] = useState(1) //총 인원 수
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

            let adult = adultCount;
            let totalP;

            adult++
            totalP = adult + childCount;

            if (totalP > 4) {
                Swal.fire({
                    icon: 'info',
                    title: '확인해주세요!',
                    text: ' 총 인원 수는 4명까지 선택할 수 있습니다. '
                })
            } else {
                setAdultCount(adult);
                setTotalCount(totalP);

            }

        }

        const minusBtn = () => {

            let adult = adultCount;

            adult--

            if (adult < 1) {
                setAdultCount(1);
            } else {

                setAdultCount(adult);
            }

        }

        const cdPlusBtn = () => {
            let child = childCount;
            let totalP;

            child++
            totalP = adultCount + child;
            if (totalP > 4) {
                Swal.fire({
                    icon: 'info',
                    title: '확인해주세요!',
                    text: ' 총 인원 수는 4명까지 선택할 수 있습니다. ',
                })
            } else {
                setChildCount(child);
                setTotalCount(totalP);
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
            <div className={"row"}>
                <div className={"col"}>
                    <div className={"fw-bold"}>성인</div>
                    <button onClick={minusBtn} className={"btn btn-outline-dark rounded-0 btn-sm"}> -</button>
                    <span className={"p-2"}>  {adultCount} </span>
                    <button onClick={plusBtn} className={"btn btn-outline-dark rounded-0 btn-sm"}> +</button>
                </div>
                <div className={"col"}>
                    <div className={"fw-bold"}>어린이</div>
                    <button onClick={cdMinusBtn} className={"btn btn-outline-dark rounded-0 btn-sm"}> -</button>
                    <span className={"p-2"}>  {childCount} </span>
                    <button onClick={cdPlusBtn} className={"btn btn-outline-dark rounded-0 btn-sm"}> +</button>
                </div>
            </div>
        )

    }


    const SendReservationInfo = () => {
        Navigate(`/reservation?sDate=${startDate.toISOString().split('T')[0]}&eDate=${endDate.toISOString().split('T')[0]}&getAdultCount=${adultCount}&getChildCount=${childCount}&getTotal=${totalCount}`);
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
                    <div className={"container row p-0 m-0"}>
                        <dt className={"col p-3 fw-bold"}>Check In | Check Out</dt>
                        <dd>
                            <MainDatePicker/>
                        </dd>
                    </div>
                </div>

                <div className={"col"}>
                    <div className={"container row p-0 m-0"}>
                        <dt className={"col p-1 fw-bold"}> 인원</dt>
                        <dd>
                            <MainCounter/>
                        </dd>
                    </div>
                </div>

                <div className={"col"}>
                    <button className={"btnDate"} role={"button"} onClick={SendReservationInfo}><span className="text">객실 찾기</span>Booking</button>
                </div>
            </div>
        </div>)
}

export default DateChoose