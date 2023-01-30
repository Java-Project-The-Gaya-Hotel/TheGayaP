import React from "react";


function InquiryAdminChat(props) {
    return (
        <div>
            {/*관리자 채팅 박스*/}
            <div id={"admin_chat_box"} className={"col-4 offset-8 text-start"}>
                <div className={"chat_box_for_admin mt-3"}>
                    <div>
                        <strong className={"chat_name me-1"}>{props.data.answerUserName} </strong>
                        <span className={"chat_date"}>{props.data.answerCreateDate}</span>
                    </div>
                    <div className={"chat_text-box bg-warning form-control p-3"}>
                        <div className={"chat_box"}>
                            <p className={"chat_text"}>{props.data.answerContents}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryAdminChat;