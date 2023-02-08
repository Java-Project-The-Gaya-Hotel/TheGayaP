import React, {useEffect, useState} from "react";
import axios from "axios";

//게시글 작성 페이지
function InquiryReplyWrite(props) {
    const [userName, setUserName] = useState("")
    const [contents, setContents] = useState("");
    const [isAdmin, setIsAdmin] = useState("N");
    const [qaNum, setQaNum] = useState(props.qaNum);

    const changeContents = (e) => {
        setContents(e.target.value);
    }


    useEffect(()=>{
        if (props.data.memberRole == "ADMIN"){
            setUserName("suppoter");
            setIsAdmin('Y');
        }else{
            setUserName(props.data.memberId);
        }
        console.log(props.data);


    },[])


    const insertReply = () => {
        console.log(userName);

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
        <div className={"container"}>
            <div className={"chat_input_box"}>
                <div>
                    <div className={"h5 fw-bold"}>{userName}</div>
                </div>
                <hr/>
                <div className={"col-11 mx-auto my-4"}>
                    <input className={"form-control rounded-0"} style={{height: 150}} onChange={changeContents}/>
                </div>
                <div className={"d-flex justify-content-end mt-3"}>
                    <button className={"custom-btn2 custBtn"} onClick={insertReply}>작성 하기</button>
                </div>
            </div>
        </div>
    );
}

export default InquiryReplyWrite;