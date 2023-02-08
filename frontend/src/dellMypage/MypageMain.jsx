import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import axios from "axios";


const styles = {
    cardBox: {
        height: "550px"
    }
}



function MypageMain() {
    //불러올 id 저장 위한 함수
    const [memberId , setMemberId]=useState("");
    const [memberNum, setMemberNum] =useState("")
    const [memberTier, setMemberTier] = useState("")
    const navi= useNavigate();

        // AuthorityCheck() 으로 토큰 확인 -> 통신 완료시 token값의 Id 값 가져오기
        useEffect(()=>{
            SessionCheck();
            if (AuthorityCheck() === false) {
                alert("토큰 만료.")
                navi("/login")
            } else {
                GetMemberIdByToken().then(response => {
                    setMemberId(response.data)
                    axios.get(
                        "http://localhost:8080/mypage/getUserInfo",
                        {params:{
                                memberId: response.data,
                            }}
                    ).then(response => {
                        setMemberNum(response.data.memberNum);
                        setMemberTier(response.data.memberTier);
                    })
                })
            }

        },[])



    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white" >  {memberId} 님 | No. {memberNum}</div>
                        <div className="card-body" style={styles.cardBox}>
                            <h5 className="card-title">Grade</h5>
                            <p className="card-text">{memberId} 님의 등급 : {memberTier}</p>
                        </div>
                        <div className="card-footer text-muted border-dark bg-white">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MypageMain;