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
    const [confirmPw, setConfirmPw] = useState("");

    const [isPassEmail, setIsPassEmail] = useState(true);
    const [issendEmail, setIsSendEmail] = useState(false);


    // 이메일 인증 보내기
    const checkByIdAndEmail = () => {
        axios.get("http://localhost:8080/member/emailConfirm",
            {
                params: {memberId: memberId, memberEmail: memberEmail}
            })

            .then((req) => {
                if (req.data === "fail") {
                    Swal.fire("일치하는 유저가 존재하지 않습니다.")
                } else {
                    setEmailConfirm(req.data);
                    Swal.fire("인증번호를 전송하였습니다.")
                    setIsSendEmail(true);
                }

            }).catch(err => {
            Swal.fire("네트워크 오류가 발생했습니다.")
        })
    }

    // 인증 번호 확인
    const compareCheckCode = () => {
        if (!issendEmail) {
            Swal.fire({
                icon: 'warning',
                title:"인증번호 전송을 먼저 해주세요."});
        } else {
            if (emailConfirmCode === memberConfirmCode) {
                Swal.fire({html: "인증이 성공했습니다<br/>비밀번호를 변경해 주세요."}).then(res => {
                    if (res.isConfirmed) {
                        setIsPassEmail(false);
                    }
                })
            } else {
                Swal.fire("인증번호가 일치하지 않습니다.");
            }
        }
    }

    // 비밀번호 변경
    const changePw = () => {
        if (memberPw !== confirmPw) {
            Swal.fire('변경하실 비밀번호가 일치하지 않습니다.')

        } else {

            axios.put("http://localhost:8080/mypage/changepw",
                {
                    memberId: memberId,
                    memberPw: memberPw
                },
            )
                .then((req) => {
                    Swal.fire(' 비밀번호가 변경됐습니다. ').then(res => {
                        if (res.isConfirmed) {
                            props.closeModal();
                        }
                    })
                }).catch(err => {
                Swal.fire('오류가 발생하였습니다, 다시 시도해 주세요.')
            })
        }

    }


    return (
        <div className={"container"}>
            {isPassEmail ?
                <div key={"1"} className={"p-3"}>

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
                        <input type={"text"} className={"form-control rounded-0 col-sm m-2"} onChange={(e) => {
                            setMemberConfirmCode(e.target.value)
                        }}/>
                        <button id={"userBtn"}
                                className={"form-label col-sm-3 my-auto rounded-0 custom-btn3 btn-Login"}
                                onClick={compareCheckCode}>인증 확인
                        </button>
                    </div>
                </div>

                :

                <div key={"2"}>
                    <div className={"d-grid justify-content-center p-5"}>
                        <label className={"form-label col my-auto fw-bold"}> 변경 하실 비밀번호 </label>
                        <input type={"password"} className={"rounded-0 col-sm m-2"} onChange={(e) => {
                            setMemberPw(e.target.value)
                        }}/>
                        <label className={"form-label col my-auto fw-bold"}> 비밀번호 확인 </label>
                        <input type={"password"} className={"rounded-0 col-sm m-2"} onChange={(e) => {
                            setConfirmPw(e.target.value)
                        }}/>
                    </div>
                    <button onClick={changePw} className={"mt-4 rounded-0 custom-btn3 btn-Login"}>확인</button>

                </div>
            }
        </div>
    );


}


export default FindPw;