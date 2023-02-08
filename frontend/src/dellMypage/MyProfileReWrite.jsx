// import React, {useEffect, useState} from 'react';
// import {AuthorityCheck, GetMemberIdByToken, SessionCheck} from "../functiontocheck/FunctionToCheck";
// import axios from "axios";
// import {useNavigate} from "react-router-dom";
//
//
// function MyprofileReWrite(props) {
//     const [mailState, setMailState] =useState("");
//     const [telState, setTelState] = useState("");
//
//     useEffect(() => {
//         console.log(`서브 : ${props}`);
//         console.log(`서브 : ${props.email}`);
//         console.log(`서브 : ${props.tel}`);
//     }, []);
//
//     const btnClick = () => {
//         axios.put(
//             "http://localhost:8080/mypage/updateProfile",
//             {
//                 params: {
//                     // memberId : props.data.memberId
//                 }
//             }
//         ).then(response => {
//             // console.log(mailState)
//
//         })
//     }
//
//     // const changeEmail = (e) => {
//     //     setMailState(e.target.value);
//     // }
//     //
//     // const changeTel = (e) => {
//     //     setTelState(e.target.value);
//     // }
//
//     return (
//         <div>
//             <table className={"table table-hover m-0"}>
//                 <tbody>
//                 <tr>
//                     <td> E-Mail :</td>
//                     <td>
//                         {/*<input value={memberEmail}/>*/}
//                         {/*<input type={"text"} value={mailState} onChange={(e)=>{setMailState(e.target.value)}}/>*/}
//                         {/*<input type={"text"} value={mailState} onChange={(e) => {changeEmail(e)}}/>*/}
//                     </td>
//                 </tr>
//                 <tr>
//                     <td> Ph :</td>
//                     <td>
//                         {/*<input value={memberTel}/>*/}
//                         {/*<input type={"text"} value={memberTel} onChange={(e)=>{setTelState(e.target.value)}}/>*/}
//                         {/*<input type={"text"} value={telState} onChange={(e) => {changeTel(e)}}/>*/}
//                     </td>
//                 </tr>
//                 </tbody>
//             </table>
//             <div className={"p-4"}>
//                 <button onClick={btnClick}>수정 완료</button>
//             </div>
//         </div>
//
//     )
// }
//
//
// export default MyprofileReWrite;