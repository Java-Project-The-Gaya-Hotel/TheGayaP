import React, {useEffect, useState} from "react";
import InquiryUserChat from "./inquiryUserChat";
import InquiryAdminChat from "./inquiryAdminChat";
import InquiryReplyWrite from "./InquiryReplyWrite";
import {useSearchParams} from "react-router-dom";
import axios from "axios";
import {SessionCheck} from "../../functiontocheck/FunctionToCheck";


// 문의 상세 글 함수
function InquiryDetail() {


    const [userParam, setUserParam] = useSearchParams();

    const [qaDetailData, setQaDetailData] = useState([]);

    const [category, setCategory] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [title, setTitle] = useState("");
    const [userName, setUserName] = useState("");
    const [contents, setContents] = useState("");
    const [reservationNum, setReservationNum] = useState(0);
    const [createDate, setCreateDate] = useState("");
    const [status, setStatus] = useState("");



    // 글 상세 페이지 들어올시 발동
    useEffect(() => {
        // 세션이 유효한지 확인
        SessionCheck();

        // 상세 답글 을 가져오는 axios
        const getData = async () => {
            const data = await axios.get("http://localhost:8080/gaya/qa/detail", {
                params: {
                    idx: userParam.get('idx'),
                }
            }).then(req => {
                const {data} = req
                setQaDetailData(data);
            }).catch(err => {
                console.log(err);
            })
        }
        getData();

        // 문의게시판 상세 글 내용 가져오는 axios
        axios.get("http://localhost:8080/qa/getDetail", {params: {idx: userParam.get('idx')}})
            .then((req) => {
                console.log(req.data[0]);
                setCategory(req.data[0].inquiryCategory);
                setHotelName(req.data[0].inquiryHotelName);
                setTitle(req.data[0].inquiryTitle);
                setUserName(req.data[0].inquiryUserName);
                setCreateDate(req.data[0].inquiryCreateDate);
                setStatus(req.data[0].inquiryStatus);
                setContents(req.data[0].inquiryContents);
                setReservationNum(req.data[0].inquiryReservationNum);
            })
            .catch((err) => {
                console.log("데이터 전송 실패" + err);
            })

    }, [])


    return (
        <div className={"container min-vh-100 "}>
            <div className={"row my-4"}>

                {/*고객 문의 헤더*/}
                <div className={"container inquiry_header mb-4"}>
                    <h3 className={"fw-bold m-3"}> 고객 문의 </h3>

                    {/*고객 문의 status*/}
                    <div className={"container p-3"}>
                        <div style={{fontSize: 15}}>
                            <table className={"table text-center"}>
                                <thead className={"table-bordered border-dark"}>
                                <tr>
                                    <th>문의유형</th>
                                    <th>문의호텔</th>
                                    <th className={"col-sm-4"}>문의제목</th>
                                    <th>작성자</th>
                                    <th>작성일</th>
                                    <th>답변상태</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>{category}</td>
                                    <td>{hotelName}</td>
                                    <td>{title}</td>
                                    <td>{userName}</td>
                                    <td>{createDate}</td>
                                    <td>{status}</td>
                                </tr>
                                </tbody>
                            </table>
                            <div className={"ms-2 px-4 p-3 rounded-2"} style={{backgroundColor: "lightgray"}}>
                                {contents}
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
                {/* 전체 채팅 박스*/}
                <div className={"container"}>
                    <div id={"chat"} className={"text-center"}>
                        {
                            qaDetailData.map((item, idx) => {
                                return (item.answerIsAdmin === "N" ? <InquiryUserChat data={item} key={idx}/> : <InquiryAdminChat data={item} key={idx}/>)
                            })
                        }
                    </div>
                </div>
            </div>
            <InquiryReplyWrite qaNum={userParam.get('idx')}/>
        </div>
    );
}

export default InquiryDetail;