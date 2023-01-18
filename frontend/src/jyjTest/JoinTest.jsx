// // JoinTest.jsx
// import React, {useEffect, useState} from "react";
// import axios from "axios";
//
// function JoinTest(props) {
//   const baseUrl = "http://localhost:8080";
//
//   const [memberName, setMemberName] = useState("");
//   const [memberBirth, setMemberBirth] = useState("");
//   const [memberEmail, setMemberEmail] = useState("");
//   const [memberTel, setMemberTel] = useState("");
//   const [memberId, setMemberId] = useState("");
//   const [memberPw, setMemberPw] = useState("");
//   const [confirmPw, setConfirmPw] = useState("");
//
//   const handleSubmit = (e) => {
//     e.preventDefault();
//
//     if (memberPw !== confirmPw) {
//       return alert('비밀번호와 비밀번호 확인이 같지 않습니다.')
//     }
//
//     console.log(memberName);
//
//     const data =
//       {
//         memberName: memberName,
//         memberId: memberId,
//         memberPw: memberPw,
//         memberEmail: memberEmail,
//         memberTel: memberTel,
//         memberBirth: memberBirth
//       };
//
//     console.log(data);
//
//     axios.post("http://localhost:8080/join", data
//     ).then((req) => {
//       console.log("데이터 전송 성공")
//       console.log(req.data);
//     }).catch(err => {
//       console.log(`데이터 전송 실패 ${err}`)
//     })
//
//
//   };
//
//
//
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <label>이름</label>
//         <input type={'text'} value={memberName} onChange={(e) => {setMemberName(e.target.value)}}/>
//         <label>생년월일</label>
//         <input type={'date'} value={memberBirth} onChange={(e) => {setMemberBirth(e.target.value)}}/>
//         <label>이메일</label>
//         <input type={'email'} value={memberEmail} onChange={(e) => {setMemberEmail(e.target.value)}}/>
//         <label>번호</label>
//         <input type={'text'} value={memberTel} onChange={(e) => {setMemberTel(e.target.value)}}/>
//         <hr/>
//
//         <label>아이디</label>
//         <input type={'text'} value={memberId} onChange={(e) => {setMemberId(e.target.value)}}/>
//         <label>비밀번호</label>
//         <input type={'text'} value={memberPw} onChange={(e) => {setMemberPw(e.target.value)}}/>
//         <label>비밀번호확인</label>
//         <input type={'text'} value={confirmPw} onChange={(e) => {setConfirmPw(e.target.value)}}/>
//         <hr/>
//
//         <button formAction={""}>회원가입</button>
//       </form>
//     </div>
//   );
//
// }
//
// export default JoinTest;