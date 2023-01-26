// MypageTest.jsx
import React, {useState} from "react";
import axios from "axios";

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



function MypageTest() {
  return (
    <div>
      <button onClick={resvListBtn}>아이디 test1 예약 리스트 불러오기</button>
      <hr/>
      <button onClick={accountBtn}>아이디 test1 포인트 등급 불러오기</button>
      <hr/>
      <button onClick={pointBtn}>아이디 test1 포인트 내역 불러오기</button>

    </div>
  );
}

export default MypageTest;