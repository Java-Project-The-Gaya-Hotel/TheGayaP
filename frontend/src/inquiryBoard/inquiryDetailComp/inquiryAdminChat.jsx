import React from "react";


function InquiryAdminChat(props) {
    return (
        <div>
            {/*관리자 채팅 박스*/}
            <div id={"admin_chat_box"} className={"col-6 offset-6 text-start"}>
                <div className={"chat_box_for_admin mt-3"}>
                    <div>
                        <strong className={"chat_name"}>채팅 이름 </strong>
                        <span className={"chat_date"}>채팅 날짜</span>
                    </div>
                    <div className={"chat_text-box bg-secondary form-control p-3"}>
                        <div className={"chat_box"}>
                            <p className={"chat_text"}> 채팅 답변</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryAdminChat;