// MypageTest.jsx
import React, {useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const id = "test1";


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
      params: {memberId: "test1"}
    })
    .then((req) => {
      const name = req.data.memberName;
      const email = req.data.memberEmail;
      const tel = req.data.memberTel;
    }).catch(err => {
    console.log(`데이터 전송 실패 ${err}`)
  })

}

function MypageTest() {
  return (
    <div>
      <button onClick={resvListBtn}>test1 예약 리스트 불러오기</button>
      <hr/>
      <button onClick={accountBtn}>test1 포인트, 등급 불러오기</button>
      <hr/>
      <button onClick={pointBtn}>test1 포인트 내역 불러오기</button>
      <hr/>
      <button onClick={profileBtn}><Link to={"/test1"}>프로필 테스트</Link>
      </button>
    </div>
  );
}

export default MypageTest;