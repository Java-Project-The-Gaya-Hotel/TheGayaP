import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import Swal from "sweetalert2";
import {default as Axios} from "axios";

const axios = Axios.create({
    baseURL: "http://ec2-13-125-182-95.ap-northeast-2.compute.amazonaws.com:8080"
});

function MyPageMemberOff() {

    const navi = useNavigate()
    const [memberId, setMemberId] = useState("");
    const [memberPw, setMemberPw] = useState("")

    useEffect(() => {
        SessionCheck();
        if (AuthorityCheck() === false) {
            alert("토큰 만료.")
            navi("/login")
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
                    setMemberId(response.data.memberId);
                    console.log(memberId)

                })
            })
        }

    }, [])


    const YesBtn = (e) => {
        e.preventDefault();
        axios.put("/mypage/withdrawalMember", null, {
            params: {
                memberId: memberId
            }
        })
            .then(() => {

                Swal.fire({
                    title: '정말로 탈퇴하시겠습니까?',
                    html: "사용하시던 포인트와 유지하시던 등급이 <br/> 모두 사라지며 복원이 불가합니다. <br/>탈퇴하시겠습니까?",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonColor: '#4b4b4b',
                    cancelButtonColor: '#ff0000',
                    confirmButtonText: 'Yes'
                }).then((result) => {
                    if (result.isConfirmed) {
                        Swal.fire(
                            '삭제되었습니다. ',
                            '이용해주셔서 감사합니다. ',
                            'success',
                        )
                    }
                })
            }).catch(err => {
                console.log(err, "통신에러");
            }
        )
    };


    const NoBtn = () => {
        navi("/mypage")
    }
    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> 회원 탈퇴</div>
                        <div className="card-body">
                            <h5 className="card-title"></h5>
                            <div className="card-text">
                                <div className={"container"}>
                                    <div className={"m-5"}> 탈퇴하시겠습니까 ? </div>
                                    <div className={"row m-3"}>
                                        <div className={"col"}>
                                            <button type={"button"} className={"custom-btn2 btnMypage"} onClick={YesBtn}> Yes</button>
                                        </div>
                                        <div className={"col"}>
                                            <button type={"button"} className={"col custom-btn2 btnMypage"} onClick={NoBtn}> No</button>
                                        </div>
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

export default MyPageMemberOff;