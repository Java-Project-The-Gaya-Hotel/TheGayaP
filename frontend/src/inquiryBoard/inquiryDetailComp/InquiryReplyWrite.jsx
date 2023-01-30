import React, {useState} from "react";
import axios from "axios";


function InquiryReplyWrite(props) {
    const [userName, setUserName] = useState("suppoter")
    const [contents, setContents] = useState("");
    const [isAdmin, setIsAdmin] = useState("Y");
    const [qaNum, setQaNum] = useState();

    const changeContents = (e) => {
        setContents(e.target.value);
    }

    const insertReply = () => {
        const qaNum = props.qaNum;
        setQaNum(qaNum);

        const body = {

            answerInquiryNum: qaNum,
            answerContents: contents,
            answerUserName: userName,
            answerIsAdmin: isAdmin,

        }

        axios.post("http://localhost:8080/gaya/qa/reply/insert", body)
            .then(req => {
                console.log(req);
            }).catch(e => {
            console.log(e);
        })

        window.location.reload();
    }

    return (
        <div className={"chat_input_box bg-secondary col-6 mx-auto p-3 mt-5"}>
            <div className={"border-bottom"}>
                <p>{userName}</p>
            </div>
            <div className={"col-11 mx-auto mt-4"}>
                <input className={"form-control"} style={{height: 150}} onChange={changeContents}/>
            </div>
            <div className={"d-flex justify-content-end mt-3"}>
                <button className={"btn btn-warning"} onClick={insertReply}>작성 하기</button>
            </div>
        </div>
    );
}

export default InquiryReplyWrite;