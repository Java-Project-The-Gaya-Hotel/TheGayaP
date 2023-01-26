import React from "react";
import InquiryUserChat from "./inquiryDetailComp/inquiryUserChat";
import InquiryAdminChat from "./inquiryDetailComp/inquiryAdminChat";

function InquiryDetail() {
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
                <div className={"chat_input_box bg-secondary fixed-bottom col-4 mx-auto p-3"}>
                    <div className={"border-bottom"}>
                        <p>유저 이름</p>
                    </div>
                    <div className={"col-11 mx-auto mt-4"}>
                        <input className={"form-control"} style={{height:150}}/>
                    </div>
                    <div className={"d-flex justify-content-end mt-3"}>
                        <button className={"btn btn-warning"}>작성 하기</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryDetail;