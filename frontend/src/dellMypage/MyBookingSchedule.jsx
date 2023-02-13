import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import axios from "axios";

const styles = {
    cardBox: {
        height: "550px"
    }
}

function MyBookingSchedule() {
    const [customerId, setCustomerId] = useState("");
    const [checkListTable, setCheckListTable] = useState([]);

    const navi = useNavigate();

    useEffect(() => {
        SessionCheck();
        if (AuthorityCheck() === false) {
            alert("토큰 만료.")
            navi("/login")
        } else {
            GetMemberIdByToken().then(response => {
                setCustomerId(response.data)
                axios.get(
                    "http://localhost:8080/mypage/reservationinfo",
                    {
                        params: {
                            customerId: response.data,
                        }
                    }
                ).then(response => {
                    if (response.data.length === 0){
                    setCheckListTable(null);
                    }else{
                    console.log(response);
                    setCheckListTable(response.data);
                    }

                }).catch(()=>{
                    setCheckListTable(null);
                })
            })
        }

    }, [])

    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> {customerId} 님의 예약 목록</div>
                        <div className="card-body" style={styles.cardBox}>
                            <div className={"container p-3"}>

                                <table className={"table table-hover"}>
                                    <thead>
                                    <tr className={"small"}>
                                        <th>예약날짜</th>
                                        <th>예약인원</th>
                                        <th>예약Room</th>
                                        <th>Check In</th>
                                        <th>Check Out</th>
                                        <th>결제 금액</th>
                                        <th>예약이름</th>
                                    </tr>
                                    </thead>


                                    <tbody>
                                        {
                                            checkListTable != null ?

                                            checkListTable.map((response, index)=>{
                                            return(
                                                <tr className={"small"} key = {index}>
                                                    <td><small>{response.reservationDate}</small></td>
                                                    <td>{response.reservationPeople}</td>
                                                    <td><small>{response.reservationRoomName}</small></td>
                                                    <td>{response.reservationCheckIn}</td>
                                                    <td>{response.reservationCheckOut}</td>
                                                    <td><small>{`${response.reservationCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</small></td>
                                                    <td>{response.reservationCustomerName}</td>
                                                </tr>
                                            )

                                            })
                                            : <tr><td className={"text-center"} colSpan={7}>예약 하신 정보가 없습니다.</td></tr>
                                        }

                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="card-footer text-muted border-dark bg-white">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookingSchedule;