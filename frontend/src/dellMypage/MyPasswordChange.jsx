import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import Swal from "sweetalert2";
import {default as Axios} from "axios";
const axios = Axios.create({
    baseURL: "http://ec2-13-125-220-237.ap-northeast-2.compute.amazonaws.com:8080"
});

const styles = {
    cardBox: {
        height: "550px"
    },
    inputBox: {
        width: "300px",
        height: "35px"
    }
}

function MyPasswordChange() {

    // const [userData, setUserData] = useState([]);
    const [memberId, setMemberId] = useState("");
    const [memberPw, setMemberPw] = useState("");
    const [confirmMemberPw, setConfirmMemberPw] = useState("");
    const navi = useNavigate();


    useEffect(() => {
        SessionCheck();
        if (AuthorityCheck() === false) {
            Swal.fire({
                icon: 'error',
                title: '토큰 만료',
                html: '토큰이 만료됐습니다. 재 로그인 해주세요',
            }).then((result) => {
                    if (result.isConfirmed) {
                        navi("/login")
                    }
                }
            )

        } else {
            GetMemberIdByToken().then(response => {
                setMemberId(response.data)
            })
        }

    }, []);


    const changePw = () => {
        if (memberPw !== confirmMemberPw) {
            Swal.fire('변경하실 비밀번호가 일치하지 않습니다.')

        } else {

            axios.put("/mypage/changepw",
                {
                    memberId: memberId,
                    memberPw: memberPw
                },
            )
                .then((req) => {
                    Swal.fire(' 비밀번호가 수정됐습니다. ').then(res => {
                        if (res.isConfirmed) {
                            navi("/mypage");
                        }
                    })
                }).catch(err => {
                Swal.fire('오류가 발생하였습니다, 다시 시도해 주세요.')
            })
        }

    }


    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> 비밀번호 변경</div>
                        <div className="card-body" style={styles.cardBox}>
                            <h5 className="card-title fw-bold">Change Password</h5>
                            <div className={"p-5"}>
                                <div className={"container"}>
                                    <div className={"row justify-content-center my-2"}>
                                        <label className={"col-3"}> 변경할 비밀번호 : </label>
                                        <input type={"password"} style={styles.inputBox}
                                               className={"form-control rounded-0 col-2"}
                                               onChange={(e) => {
                                                   setMemberPw(e.target.value)
                                               }}/>
                                    </div>
                                    <div className={"row justify-content-center my-2"}>
                                        <label className={"col-3"}> 비밀번호 확인 : </label>
                                        <input type={"password"} style={styles.inputBox}
                                               className={"form-control rounded-0 col-2"}
                                               onChange={(e) => {
                                                   setConfirmMemberPw(e.target.value)
                                               }}/>
                                    </div>
                                    <div className={"p-5"}>
                                        <button className={"custom-btn2 btnMypage"} onClick={changePw}> 수정하기
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer text-muted border-dark bg-white">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default MyPasswordChange;