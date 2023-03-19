import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import Swal from "sweetalert2";
import {default as Axios} from "axios";

const axios = Axios.create({
    baseURL: "http://ec2-13-125-182-95.ap-northeast-2.compute.amazonaws.com:8080"
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
                    "/mypage/getUserInfo",
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
        axios.put("/mypage/update",
            {
                memberEmail: memberEmail,
                memberTel: memberPh
            },
            {
                params: {memberId: memberId}
            })
            .then((req) => {
                Swal.fire('데이터가 수정되었습니다. ').then(res=>{
                    if (res.isConfirmed){
                        navi("/mypage");
                    }
                })
            }).catch(err => {
            Swal.fire(
                Swal.fire('오류가 발생하였습니다, 다시 시도해 주세요.')
            )
        })
    }


    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> {memberId} 의 회원 정보</div>
                        <div className="card-body" style={styles.cardBox}>
                            <h5 className="card-title fw-bold">Profile</h5>
                            <div className={"p-5"}>
                                <div className={"container"}>
                                    <div className={"row justify-content-center my-2"}>
                                        <label className={"col-2"}> ID : </label>
                                        <input style={styles.inputBox} className={"form-control rounded-0 col-2"} value={memberId} readOnly={true}/>
                                    </div>

                                    <div className={"row justify-content-center my-2"}>
                                        <label className={"col-2"}> Name : </label>
                                        <input style={styles.inputBox} className={"form-control rounded-0 col-2"} value={memberName} readOnly={true}/>
                                    </div>
                                    <div className={"row justify-content-center my-2"}>
                                        <label className={"col-2"}> E-Mail : </label>
                                        <input style={styles.inputBox} className={"form-control rounded-0 col-2"} value={memberEmail} onChange={(e) => setMemberEmail(e.target.value)}/>
                                    </div>
                                    <div className={"row justify-content-center my-2"}>
                                        <label className={"col-2"}> PH : </label>
                                        <input style={styles.inputBox} className={"form-control rounded-0 col-2"} value={memberPh} onChange={(e) => setMemberPh(e.target.value)}/>
                                    </div>
                                </div>

                                <div className={"p-5"}>
                                    <button className={"custom-btn2 btnMypage"} onClick={btnClick}> 수정하기</button>
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