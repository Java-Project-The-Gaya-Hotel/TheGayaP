import React, {useEffect, useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";

//게시글 작성 페이지
function InquiryReplyWrite(props) {
    const [contents, setContents] = useState("");
    const [isAdmin, setIsAdmin] = useState("N");
    const [qaNum, setQaNum] = useState(props.qaNum);
    const [answerUserName, setAnswerUserName] = useState("");

    const changeContents = (e) => {
        setContents(e.target.value);
    }


    useEffect(() => {
        if (props.data.memberRole == "ADMIN") {
            setIsAdmin('Y');
            setAnswerUserName("suppoter");
        } else {
            setAnswerUserName(props.data.memberId);

        }
    }, [])


    // 답변 완료 버튼
    const answerDone = () => {
        Swal.fire({
            icon: 'success',
            title: '답변 완료',
            text: ' 문의가 종료됐습니다. ',
        }).then(res => {
            const body = {
                answerInquiryNum: qaNum,
                answerStatus: "답변완료"
            }

            axios.post("http://localhost:8080/gaya/qa/reply/insert", body)
                .then(req => {
                }).catch(e => {
                console.log(e);
            })

            if (res.isConfirmed) {
                window.location.reload();
            }
        })


    }


    const insertReply = () => {

        console.log(answerUserName);
        let answerStatus
        if (props.data.memberRole == "ADMIN" && props.status == "답변대기") {
            answerStatus = "답변 중"
        }

        const body = {
            answerInquiryNum: qaNum,
            answerContents: contents,
            answerUserName: answerUserName,
            answerIsAdmin: isAdmin,
            answerStatus: answerStatus
        }

        axios.post("http://localhost:8080/gaya/qa/reply/insert", body)
            .then(req => {
            }).catch(e => {
            console.log(e);
        })

        window.location.reload();
    }

    return (
        <div className={"container"}>
            <div className={"chat_input_box"}>
                <div>
                    <div className={"h5 fw-bold"}>{answerUserName}</div>
                </div>
                <hr/>
                <div className={"col-11 mx-auto my-4"}>
                    <input className={"form-control rounded-0"} style={{height: 150}} onChange={changeContents}/>
                </div>
                <div className={"d-flex justify-content-between mt-3"}>
                    {
                        props.data.memberRole !== "ADMIN" ?
                            <button className={"custom-btn2 custBtn "} onClick={answerDone}>답변 완료</button> :
                            <div></div>

                    }
                    <button className={"custom-btn2 custBtn "} onClick={insertReply}>작성 하기</button>
                </div>
            </div>
        </div>
    );
}

export default InquiryReplyWrite;