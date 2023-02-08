import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import axios from "axios";
import MyprofileReWrite from "./MyProfileReWrite";
import Swal from "sweetalert2";


const styles = {
    cardBox: {
        height: "550px"
    }
}

function MyProfile() {

    const [userData, setUserData] = useState([]);
    const [memberId, setMemberId] = useState("");
    const [memberName, setMemberName] = useState("")
    const [memberEmail, setMemberEmail] = useState("")
    const [memberPh, setMemberPh] = useState("")
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
                axios.get(
                    "http://localhost:8080/mypage/getUserInfo",
                    {
                        params: {
                            memberId: response.data,
                        }
                    }
                ).then(response => {
                    const data = response.data;

                    setUserData(response.data)
                    setMemberId(response.data.memberId)
                    setMemberName(response.data.memberName)
                    setMemberEmail(response.data.memberEmail)
                    setMemberPh(response.data.memberTel)

                })
            })
        }

    }, []);

    const btnClick = () => {
        axios.put(
            "http://localhost:8080/mypage/updateProfile",
            {
                params: {
                    memberId : memberId
                }
            }
        ).then(response => {


        })
    }


    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> {memberId} 의 회원 정보</div>
                        <div className="card-body" style={styles.cardBox}>
                            <h5 className="card-title">Profile</h5>
                            <div>
                                <table className={"table table-hover m-0"}>
                                    <thead className={"container"}>

                                    </thead>

                                    <tbody className={"container"}>

                                    <tr>
                                        <td> ID :</td>
                                        <td><input value={memberId} readOnly={true}/></td>
                                    </tr>

                                    <tr>
                                        <td> Name :</td>
                                        <td>
                                            <input value={memberName} readOnly={true}/></td>
                                    </tr>
                                    <tr>
                                        <td> E-Mail :</td>
                                        <td>
                                            <input value={memberEmail} onChange={(e)=>setMemberEmail(e.target.value)}/></td>
                                    </tr>
                                    <tr>
                                        <td> Ph :</td>
                                        <td>
                                            <input value={memberPh} onChange={(e)=>setMemberPh(e.target.value)}/></td>
                                    </tr>
                                    </tbody>
                                </table>
                                <div className={"p-5"}>
                                    <button onClick={btnClick}> 수정하기 </button>
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


export default MyProfile;