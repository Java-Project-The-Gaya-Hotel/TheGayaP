// FindId.jsx
import React, {useState} from "react";
import axios from "axios";
import Modal from "./Modal";
import "../loginCss/ButtonCss.css"


function FindId(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [memberPw, setMemberPw] = useState("");

  const [isFind, setIsFind] = useState(true);
  const [isMemberPw, setIsMemberPw] = useState(true);


  function closeModal() {
    props.closeModal();
  }


  const findIdBtn = () => {
    axios.get("http://localhost:8080/login/findPw",
        {
          params: {memberName: name, memberEmail: email}
        })

        .then((req) => {
          console.log("데이터 전송 성공")
          setMemberPw(req.data);
          setIsFind(false);
          if (memberPw === "") {
            setIsMemberPw(false);
          }
          console.log(memberPw);

        }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })
  }



  return (
      <div className={"container"}>
        {isFind ?
            <div className={"p-3"}>

              <div className={"row mb-1 me-2"}>
                <label className={"form-label col-sm-3 my-auto fw-bold"} htmlFor={"name"}>이름</label>
                <input className={"form-control rounded-0 col-sm m-2"} type={"text"} id={"name"} onChange={(e) => {setName(e.target.value)}}/>
              </div>

              <div className={"row mb-1 me-2"}>
                <label className={"form-label col-sm-3 my-auto fw-bold"} htmlFor={"email"}>이메일</label>
                <input className={"form-control rounded-0 col-sm m-2 "} type={"email"} id={"email"} onChange={(e) => {setEmail(e.target.value)}}/>
                <button id={"sendMail"} className={"form-label col-sm-3 my-auto rounded-0 custom-btn3 btn-Login"}>이메일 전송</button>
              </div>

              <div className={"row mb-1 me-2"}>
                <label className={"form-label col-sm-3 my-auto fw-bold"}> 인증 확인 </label>
                <input type={"text"} className={"form-control rounded-0 col-sm m-2"}/>
                <button id={"userBtn"} className={"form-label col-sm-3 my-auto rounded-0 custom-btn3 btn-Login"}>인증 확인</button>
              </div>


              <button className={"mt-3 rounded-0 custom-btn3 btn-Login"} onClick={findIdBtn}>확인</button>
            </div> :
            <div>
              {isMemberPw ?
                  <div>
                    <p>{name} 님의 ID</p>
                    <p>[{memberPw}]</p>
                  </div> :
                  <div className={"mt-5"}>
                    <p>{email} 로 가입된 아이디가 존재하지 않습니다.</p>
                  </div>
              }
              <button onClick={closeModal} className={"mt-4 rounded-0 custom-btn3 btn-Login"}>확인</button>
            </div>
        }
      </div>
  );


}


export default FindId;