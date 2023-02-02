import React from "react";
// 유저 채팅 박스
function InquiryUserChat(props) {

    return (
        <div>
            {/*유저 채팅박스*/}
            <div id={"user_chat_box"} className={"col-4 text-start"}>
                <div className={"chat_box_for_user mt-3"}>
                    <div>
                        <strong className={"chat_name me-1"}>{props.data.answerUserName}</strong>
                        <span className={"chat_date"}>{props.data.answerCreateDate}</span>
                    </div>
                    <div className={"chat_text-box bg-info form-control p-3"}>
                        <div className={"chat_box"}>
                            <p className={"chat_text"}>{props.data.answerContents}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryUserChat