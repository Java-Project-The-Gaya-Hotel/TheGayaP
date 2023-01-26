import React, {useEffect, useState} from "react";
import InquiryUserChat from "./inquiryUserChat";
import InquiryAdminChat from "./inquiryAdminChat";
import InquiryReplyWrite from "./InquiryReplyWrite";
import {useSearchParams} from "react-router-dom";
import axios from "axios";


function InquiryDetail() {


    const [qaIdx, setQAIdx] = useSearchParams()
    const [qaDetailData, setQaDetailData] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const data = await axios.get("http://localhost:8080/qa/detail", {
                params: {
                    idx: qaIdx.get('idx'),
                }
            }).then(req => {
                console.log("통신 성공")
            })
        }
        getData();


    }, [])


    return (
        <div className={"container vh-100 vw-50 p-5"}>
            <div className={"row"}>

                {/*고객 문의 헤더*/}
                <div className={"d-grid inquiry_header col-10 mx-auto"}>
                    <div>
                        <h1>고객 문의</h1>
                    </div>
                    <div className={"inquiry_status"}>
                        <p>문의 상황란</p>
                    </div>
                    <div className={"inquiry_update_date"}>
                        <p>문의 진행 업데이트 시간</p>
                    </div>
                    {/*고객이 작성한 제목*/}
                    <div className={"inquiry_title"}>
                        <p className={"border-bottom"}>고객의 문의 제목</p>
                    </div>
                </div>

                {/* 전체 채팅 박스*/}
                <div id={"chat"} className={"text-center d-grid col-10 mx-auto"}>
                    <InquiryUserChat/>
                    <InquiryAdminChat/>
                </div>
                <InquiryReplyWrite/>
            </div>
        </div>
    );
}

export default InquiryDetail;