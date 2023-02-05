import React from "react";

const styles={
    chatText:{
        color:"rgb(255,255,255)"
    }
}

// 관리자 채팅 박스
function InquiryAdminChat(props) {
    return (
        <div>
            {/*관리자 채팅 박스*/}
            <div id={"admin_chat_box"} className={"col-5 offset-7 text-start"}>
                <div className={"chat_box_for_admin m-3"}>

                    <div className={"container row justify-content-around align-items-center my-3 p-0 "}>
                        <div className={"chat_name fw-bold h5 col m-0"}>{props.data.answerUserName} </div>
                        <div className={"chat_date col small fw-lighter"}>{props.data.answerCreateDate}</div>
                    </div>

                    <div className={"chat_text-box form-control p-2 mx-3 border border-1 border-dark bg-dark opacity-50"}>
                        <div className={"chat_box"}>
                            <div className={"chat_text"} style={styles.chatText}>{props.data.answerContents}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InquiryAdminChat;