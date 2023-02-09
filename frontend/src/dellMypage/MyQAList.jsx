import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import axios from "axios";



function MyQAList() {
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
                    "http://localhost:8080/mypage/",
                    {
                        params: {
                            customerId: response.data,
                        }
                    }
                ).then(response => {
                    console.log(response.data);
                    setCheckListTable(response.data)

                })
            })
        }

    }, [])

    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> {customerId}님의 문의 내역</div>
                        <div className="card-body" >
                            <div className={"container p-3"}>

                                <table className={"table table-hover"}>
                                    <thead>
                                    <tr className={"small"}>
                                        <th>문의 호텔</th>
                                        <th>문의 제목</th>
                                        <th>문의 날짜</th>
                                        <th>문의 상태</th>
                                    </tr>
                                    </thead>


                                    {/*<tbody>*/}
                                    {/*    {*/}
                                    {/*        checkListTable.map((response, index)=>{*/}
                                    {/*        return(*/}
                                    {/*            <tr className={"small"} key = {index}>*/}
                                    {/*                <td><small>{response.reservationDate}</small></td>*/}
                                    {/*                <td>{response.reservationPeople}</td>*/}
                                    {/*                <td>{response.reservationRoomName}</td>*/}
                                    {/*                <td>{response.reservationCheckIn}</td>*/}
                                    {/*                <td>{response.reservationCheckOut}</td>*/}
                                    {/*                <td>{response.reservationCost}</td>*/}
                                    {/*                <td>{response.reservationCustomerName}</td>*/}
                                    {/*            </tr>*/}
                                    {/*        )*/}

                                    {/*    })}*/}

                                    {/*</tbody>*/}
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

export default MyQAList;