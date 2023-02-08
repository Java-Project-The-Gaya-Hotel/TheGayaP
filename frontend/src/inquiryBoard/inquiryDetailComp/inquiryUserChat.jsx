import React from "react";

// 유저 채팅 박스
function InquiryUserChat(props) {

    return (
        <div className={"container"}>
            {/*유저 채팅박스*/}
            <div id={"user_chat_box"} className={"col-5 text-start"}>
                <div className={"chat_box_for_user mt-3"}>

                    <div className={"container row justify-content-around align-content-center m-0 p-0"}>
                        <div className={"chat_name fw-bold h5 col"}>{props.data.answerUserName}</div>
                        <span className={"chat_date col small fw-lighter"}>{props.data.answerCreateDate}</span>
                    </div>

                    <div className={"m-2 p-2 chat_text-box form-control  border border-1 border-dark"}>
                        <div className={"chat_box"}>
                            <div className={"chat_text"}>{props.data.answerContents}</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default InquiryUserChat