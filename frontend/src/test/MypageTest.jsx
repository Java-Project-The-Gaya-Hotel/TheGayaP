// MypageTest.jsx
import React, {useState, useEffect} from "react";
import axios from "axios";


function MypageTest(props) {

  const id = "test1";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");

  const updateData =
    {
      memberEmail: email,
      memberTel: tel
    };


  const resvListBtn = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/mypage/resv",
      {
        params: {customerId: id}
      })
      .then((req) => {
        // setList(req.data);
        console.log("성공")
        console.log(req.data);
      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })
  }

  const accountBtn = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/mypage/account",
      {
        params: {memberId: id}
      })
      .then((req) => {
        console.log("성공")
        console.log(req.data);
      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })
  }

  const pointBtn = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/mypage/point",
      {
        params: {customerId: id}
      })
      .then((req) => {
        console.log("성공")
        console.log(req.data);
      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })
  }

  const profileBtn = (e) => {
    e.preventDefault();

    axios.get("http://localhost:8080/mypage/profile",
      {
        params: {memberId: id}
      })
      .then((req) => {
        setName(req.data.memberName);
        setEmail(req.data.memberEmail);
        setTel(req.data.memberTel);
      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })

  }


  const updateBtn = (e) => {
    e.preventDefault();

    axios.put("http://localhost:8080/mypage/update",
      updateData,
      {
        params: {memberId: id}
      })
      .then((req) => {
        console.log(updateData);
        console.log('업데이트 성공');
      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })

  }

  return (
    <div>
      <button onClick={resvListBtn}>test1 예약 리스트 불러오기</button>
      <hr/>
      <button onClick={accountBtn}>test1 포인트, 등급 불러오기</button>
      <hr/>
      <button onClick={pointBtn}>test1 포인트 내역 불러오기</button>
      <hr/>
      <div>
        <button onClick={profileBtn}>프로필 테스트</button>
        <label htmlFor={"name"}>이름</label>
        <input id={"name"} type={"text"} value={name} readOnly={true}/>
        <label htmlFor={"email"}>이메일</label>
        <input id={"email"} type={"text"} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
        <label htmlFor={"tel"}>번호</label>
        <input id={"tel"} type={"text"} value={tel} onChange={(e) => {setTel(e.target.value)}}/>
        <button onClick={updateBtn}>프로필 업데이트</button>
      </div>

    </div>
  );
}

export default MypageTest;