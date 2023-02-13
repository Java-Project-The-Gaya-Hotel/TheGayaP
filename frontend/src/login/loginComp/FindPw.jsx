// FindPW.jsx
import React, {useState} from "react";
import axios from "axios";
import Modal from "./Modal";
import "../loginCss/ButtonCss.css"
import Swal from "sweetalert2";


function FindPw(props) {

    const [memberId, setMemberId] = useState("");
    const [memberEmail, setMemberEmail] = useState("");
    const [emailConfirmCode, setEmailConfirm] = useState("");
    const [memberConfirmCode, setMemberConfirmCode] = useState("");
    const [memberPw, setMemberPw] = useState("");

    const [isPassEmail, setIsPassEmail] = useState(true);



    function closeModal() {
        props.closeModal();
    }


    // 이메일 인증 보내기
    const checkByIdAndEmail = () => {
        axios.get("http://localhost:8080/member/emailConfirm",
            {
                params: {memberId: memberId, memberEmail: memberEmail}
            })

            .then((req) => {
                console.log(req.data);
                if (req.data === "fail") {
                    Swal.fire("일치하는 유저가 존재하지 않습니다.")
                } else {
                    setEmailConfirm(req.data);
                    Swal.fire("인증번호를 전송하였습니다.")
                }

            }).catch(err => {
            Swal.fire("네트워크 오류가 발생했습니다.")
        })
    }


    return (
        <div className={"container"}>
            {isPassEmail ?
                <div className={"p-3"}>

                    <div className={"row mb-1 me-2"}>
                        <label className={"form-label col-sm-3 my-auto fw-bold"} htmlFor={"name"}>아이디</label>
                        <input className={"form-control rounded-0 col-sm m-2"} type={"text"} id={"name"}
                               onChange={(e) => {
                                   setMemberId(e.target.value)
                               }}/>
                    </div>

                    <div className={"row mb-1 me-2"}>
                        <label className={"form-label col-sm-3 my-auto fw-bold"} htmlFor={"email"}>이메일</label>
                        <input className={"form-control rounded-0 col-sm m-2 "} type={"email"} id={"email"}
                               onChange={(e) => {
                                   setMemberEmail(e.target.value)
                               }}/>
                        <button id={"sendMail"}
                                className={"form-label col-sm-3 my-auto rounded-0 custom-btn3 btn-Login"}
                                onClick={checkByIdAndEmail}>이메일 전송
                        </button>
                    </div>

                    <div className={"row mb-1 me-2"}>
                        <label className={"form-label col-sm-3 my-auto fw-bold"}> 인증 확인 </label>
                        <input type={"text"} className={"form-control rounded-0 col-sm m-2"} onChange={(e)=>{setMemberConfirmCode()}}/>
                        <button id={"userBtn"}
                                className={"form-label col-sm-3 my-auto rounded-0 custom-btn3 btn-Login"}>인증 확인
                        </button>
                    </div>


                    <button className={"mt-3 rounded-0 custom-btn3 btn-Login"}>확인</button>
                </div> :
                <div>

                        <div>

                        </div> :


                    <button onClick={closeModal} className={"mt-4 rounded-0 custom-btn3 btn-Login"}>확인</button>
                </div>
            }
        </div>
    );


}


export default FindPw;