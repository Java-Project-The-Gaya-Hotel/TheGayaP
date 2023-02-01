import React, {useEffect, useState} from "react";
import InquiryUserChat from "./inquiryUserChat";
import InquiryAdminChat from "./inquiryAdminChat";
import InquiryReplyWrite from "./InquiryReplyWrite";
import {useSearchParams} from "react-router-dom";
import axios from "axios";


function InquiryDetail() {


    const [userParam, setUserParam] = useSearchParams();

    const [qaDetailData, setQaDetailData] = useState([]);


    useEffect(() => {
        const getData = async () => {
            const data = await axios.get("http://localhost:8080/gaya/qa/detail", {
                params: {
                    idx: userParam.get('idx'),
                }
            }).then(req => {
               const {data} = req
                setQaDetailData(data);
               console.log(data);
            }).catch(err=>{
                console.log(err);
            })
        }
        getData();


    }, [])


    return (
        <div className={"container min-vh-100 vw-50"}>
            <div className={"row"}>

                {/*고객 문의 헤더*/}
                <div className={"d-grid inquiry_header col-10 "}>
                    <div className={"border-bottom"}>
                        <h1>고객 문의</h1>
                    </div>
                    <div className={"inquiry_status"}>
                        <p>현재 답변 단계 = {userParam.get('status')}</p>
                    </div>
                    {/*고객이 작성한 제목*/}
                    <div className={"inquiry_title"}>
                        <p className={"border-bottom"}>문의 제목 = {userParam.get('title')}</p>
                    </div>
                </div>

                {/* 전체 채팅 박스*/}
                <div id={"chat"} className={"text-center d-grid col-10 "}>
                    {
                        qaDetailData.map((item,idx)=>{
                          return   (item.answerIsAdmin === "N" ? <InquiryUserChat data={item} key={idx}/> : <InquiryAdminChat data={item} key={idx}/>)
                        })
                    }
                </div>
                <InquiryReplyWrite qaNum={userParam.get('idx')}/>
            </div>
        </div>
    );
}

export default InquiryDetail;