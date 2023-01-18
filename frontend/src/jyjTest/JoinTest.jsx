// JoinTest.jsx
import React, {useState} from "react";
import axios from "axios";

function JoinTest(props) {

  const [memberName, setMemberName] = useState("");
  const [memberBirth, setMemberBirth] = useState("");
  const [memberEmail, setMemberEmail] = useState("");
  const [memberTel, setMemberTel] = useState("");
  const [memberId, setMemberId] = useState("");
  const [memberPw, setMemberPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");

  const data = {
    memberName: memberName,
    memberId: memberId,
    memberPw: memberPw,
    memberEmail: memberEmail,
    memberTel: memberTel,
    memberBirth: memberBirth,
  };


  // 회원가입
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:8080/join/insert",data)
      .then((req) => {
        console.log("데이터 전송 성공")
        console.log(req.data);
      }).catch(err => {
        console.log(`데이터 전송 실패 ${err}`)
      })
  };

  const handleIdCheck = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/join/idCheck",
      {
        params: {memberId: memberId}
      })
      .then((req) => {
        console.log("데이터 전송 성공")
        if (req.data === 1) alert('중복된 아이디입니다.');
        else if(req.data === 0) alert('사용가능한 아이디입니다.');
      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>이름</label>
        <input type='text' value={memberName} onChange={(e) => {setMemberName(e.target.value)}}/>
        <label>생년월일</label>
        <input type='date' value={memberBirth} onChange={(e) => {setMemberBirth(e.target.value)}}/>
        <label>이메일</label>
        <input type='email' value={memberEmail} onChange={(e) => {setMemberEmail(e.target.value)}}/>
        <label>번호</label>
        <input type='text' value={memberTel} onChange={(e) => {setMemberTel(e.target.value)}}/>
        <hr/>

        <label>아이디</label>
        <input type='text' value={memberId} onChange={(e) => {setMemberId(e.target.value)}}/>
        <button onClick={handleIdCheck}>아이디 중복체크</button>
        <label>비밀번호</label>
        <input type='text' value={memberPw} onChange={(e) => {setMemberPw(e.target.value)}}/>
        <label>비밀번호확인</label>
        <input type='text' value={confirmPw} onChange={(e) => {setConfirmPw(e.target.value)}}/>
        <hr/>

        <button formAction=''>회원가입</button>
      </form>
    </div>
  );

}

export default JoinTest;