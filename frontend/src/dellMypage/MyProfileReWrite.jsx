import React, {useEffect, useState} from 'react';
import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function MyprofileReWrite(props) {
    //
    // const navi = useNavigate()
    //
    // const [memberId, setMemberId] = useState("");

    // useEffect(() => {
    //     SessionCheck();
    //     if (AuthorityCheck() === false) {
    //         alert("토큰 만료.")
    //         navi("/login")
    //     } else {
    //         GetMemberIdByToken().then(response => {
    //             setMemberId(response.data)
    //             axios.put(
    //                 "http://localhost:8080/mypage/getUserInfo",
    //                 {
    //                     params:{
    //                         memberId: response.data,
    //                     }
    //                 }
    //             ).then(response => {
    //
    //             })
    //         })
    //     }
    //
    // }, [])


    return (
        <div>
            <table className={"table table-hover m-0"}>
                <tbody>
                <tr>
                    <td> E-Mail :</td>
                    <td>
                        <input/></td>
                </tr>
                <tr>
                    <td> Ph :</td>
                    <td>
                        <input /></td>
                </tr>
                </tbody>
            </table>
            <div className={"p-4"}>
                <button >수정 완료</button>
            </div>
        </div>

    )
}


export default MyprofileReWrite;