import React, {useEffect, useState} from "react";
import InquiryUserChat from "./inquiryUserChat";
import InquiryAdminChat from "./inquiryAdminChat";
import InquiryReplyWrite from "./InquiryReplyWrite";
import {useNavigate, useSearchParams} from "react-router-dom";
import axios from "axios";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../../functiontocheck/FunctionToCheck";
import Swal from "sweetalert2";


// 문의 상세 글 함수
function InquiryDetail() {


    const [userParam, setUserParam] = useSearchParams();

    const [qaDetailData, setQaDetailData] = useState([]);
    const [memberInfo, setMemberInfo] = useState([]);
    const navi = useNavigate();

    const [memberId, setMemberId] = useState("");
    const [inquiryCategory, setInquiryCategory] = useState("");
    const [hotelName, setHotelName] = useState("");
    const [inquiryTitle, setInquiryTitle] = useState("");
    const [inquiryUserName, setInquiryUserName] = useState("");
    const [contents, setContents] = useState("");
    const [reservationNum, setReservationNum] = useState(0);
    const [inquiryCreateDate, setInquiryCreateDate] = useState("");
    const [inquiryStatus, setInquiryStatus] = useState("");


    // 유저 정보 가져오기
    const getMemberInfo = async ()=> {
        const syncMemberId = await GetMemberIdByToken()
        const syncMemberIdParam = syncMemberId.data
        const syncMemberInfo = await axios.get("http://localhost:8080/mypage/getUserInfo", {params: {memberId: syncMemberIdParam}});
        setMemberInfo(syncMemberInfo.data);
        setMemberId(memberInfo.memberId);

    }

    // 문의 상세 데이터 가져오기
    const getInquiryDetailData = async () => {

        const syncInquiryItem = await axios.get("http://localhost:8080/qa/getDetail", {params: {idx: userParam.get('idx')}})
        setInquiryCategory(syncInquiryItem.data.inquiryCategory);
        setHotelName(syncInquiryItem.data.inquiryHotelName);
        setInquiryTitle(syncInquiryItem.data.inquiryTitle);
        setInquiryUserName(syncInquiryItem.data.inquiryUserName);
        setInquiryCreateDate(syncInquiryItem.data.inquiryCreateDate);
        setInquiryStatus(syncInquiryItem.data.inquiryStatus);
        setContents(syncInquiryItem.data.inquiryContents);
        setReservationNum(syncInquiryItem.data.inquiryReservationNum);
        // 상세 답글 을 가져오는 axios
        const syncInquiryDetail = await axios.get("http://localhost:8080/gaya/qa/detail", {
            params: {
                idx: userParam.get('idx'),
            }
        })
        setQaDetailData(syncInquiryDetail.data);

    }


    // 글 상세 페이지 들어올시 발동
    useEffect(() => {
        // 세션이 유효한지 확인
        SessionCheck();

        if (sessionStorage.getItem("token") != null) {
            // 토큰 확인
            if (AuthorityCheck() === false) {
                Swal.fire({
                    icon: 'error',
                    title: '토큰 만료',
                    html: '토큰이 만료됐습니다. 재 로그인 해주세요',
                }).then((result) => {
                        if (result.isConfirmed) {
                            navi("/login")
                        }
                    }
                )

            } else {
                getMemberInfo();
            }
        }
                getInquiryDetailData();


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
                                    <td>{inquiryCategory}</td>
                                    <td>{hotelName}</td>
                                    <td>{inquiryTitle}</td>
                                    <td>{inquiryUserName}</td>
                                    <td>{inquiryCreateDate}</td>
                                    <td>{inquiryStatus}</td>
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
                                return (item.answerIsAdmin === "N" ? <InquiryUserChat data={item} key={idx}/> :
                                    <InquiryAdminChat data={item} key={idx}/>)
                            })
                        }
                    </div>
                </div>
            </div>
            {
                memberInfo.length == 0 ? null : inquiryStatus == "답변완료" ?   null : inquiryUserName != memberId ? null:
                        <InquiryReplyWrite qaNum={userParam.get('idx')} data={memberInfo} status={inquiryStatus}/>
            }
        </div>
    );
}

export default InquiryDetail;