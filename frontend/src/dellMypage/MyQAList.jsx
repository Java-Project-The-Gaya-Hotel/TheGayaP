import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import axios from "axios";


function MyQAList() {
    const [customerId, setCustomerId] = useState("");
    const [checkQAList, setCheckQAList] = useState([]);

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
                    "http://localhost:8080/mypage/myqalistable",
                    {
                        params: {
                            memberId: response.data,
                        }
                    }
                ).then(response => {
                    setCheckQAList(response.data)
                }).catch(()=>{
                    setCheckQAList(null);
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
                        <div className="card-body">
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
                                    <tbody>
                                    {
                                        checkQAList != null ?
                                        checkQAList.map((item) => {
                                        return (

                                            <tr key={item.inquiryNum} style={{cursor: "pointer"}} onClick={()=>{navi(`/qa/list/detail?idx=${item.inquiryNum}`);}}>
                                                <td>{item.inquiryHotelName}</td>
                                                <td>{item.inquiryTitle}</td>
                                                <td>{item.inquiryCreateDate}</td>
                                                <td>{item.inquiryStatus}</td>
                                            </tr>
                                        )
                                    })
                                            : <tr><td className={"text-center"} colSpan={4}>문의 하신 정보가 없습니다.</td></tr>
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

export default MyQAList;