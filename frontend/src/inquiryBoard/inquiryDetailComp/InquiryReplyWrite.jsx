import React, {useEffect, useState} from "react";
import Swal from "sweetalert2";
import {useNavigate} from "react-router-dom";
import {default as Axios} from "axios";

const axios = Axios.create({
    baseURL: "http://ec2-13-125-220-237.ap-northeast-2.compute.amazonaws.com:8080"
});

//게시글 작성 페이지
function InquiryReplyWrite(props) {
    const [contents, setContents] = useState("");
    const [isAdmin, setIsAdmin] = useState("N");
    const [qaNum, setQaNum] = useState(props.qaNum);
    const [answerUserName, setAnswerUserName] = useState("");
    const navi = useNavigate();
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
            icon: 'info',
            title: ' 문의를 종료하시겠습니까? ',
            showCancelButton: true,
            confirmButtonColor: '#4b4b4b',
            cancelButtonColor: '#ff0000',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                const body = {
                    answerInquiryNum: qaNum,
                    answerStatus: "답변완료"
                }

                axios.post("/gaya/qa/reply/insert", body)
                    .then(req => {
                    }).catch(e => {
                    console.log(e);
                })
                Swal.fire(
                    ' 문의가 종료됐습니다. ',
                ).then(res=>{
                    if (res.isConfirmed) {
                        let countNum = props.reloadCount;
                        countNum++
                        props.setReLoadCount(countNum);
                    }
                })

            }
        })
    // }
    //     Swal.fire({
    //         icon: 'success',
    //         title: '문의 종료',
    //         text: ' 문의가 종료됐습니다. ',
    //     }).then(res => {
    //         const body = {
    //             answerInquiryNum: qaNum,
    //             answerStatus: "답변완료"
    //         }
    //
    //         axios.post("http://localhost:8080/gaya/qa/reply/insert", body)
    //             .then(req => {
    //             }).catch(e => {
    //             console.log(e);
    //         })
    //
    //         if (res.isConfirmed) {
    //             window.location.reload();
    //         }
    //     })
    //
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

        axios.post("/gaya/qa/reply/insert", body)
            .then(req => {
                let countNum = props.reloadCount;
                countNum++
                props.setReLoadCount(countNum);
            }).catch(e => {
            console.log(e);
        })
       document.querySelector("#writeChatBox").value = "";
    }



    return (
        <div className={"container"}>
            <div className={"chat_input_box"}>
                <div>
                    <div className={"h5 fw-bold"}>{answerUserName}</div>
                </div>
                <hr/>
                <div className={"col-11 mx-auto my-4"}>
                    <input className={"form-control rounded-0"} style={{height: 150}} id={"writeChatBox"} onChange={changeContents}/>
                </div>
                <div className={"d-flex justify-content-between mt-3"}>
                    {
                        props.data.memberRole !== "ADMIN" ?
                            <button className={"custom-btn2 custBtn "} onClick={answerDone}>문의 종료</button> :
                            <div></div>

                    }
                    <button className={"custom-btn2 custBtn "} onClick={insertReply}>작성 하기</button>
                </div>
            </div>
        </div>
    );
}

export default InquiryReplyWrite;