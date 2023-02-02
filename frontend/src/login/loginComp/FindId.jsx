// FindId.jsx
import React, {useState} from "react";
import axios from "axios";
import Modal from "./Modal";


function FindId(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [memberId, setMemberId] = useState("");

  const [isFind, setIsFind] = useState(true);

  const findIdBtn = () => {
    axios.get("http://localhost:8080/login/findId",
      {
        params: {memberName: name, memberEmail: email}
      })

      .then((req) => {
        console.log("데이터 전송 성공")
        console.log(req.data);
        setMemberId(req.data);
        setIsFind(false);
      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })
  }

  return (
    <div>
      {isFind ?
        <div>
          <div className={"row mb-3 me-4"}>
            <label className={"form-label col-sm-3 my-auto"} htmlFor={"name"}><b>이름</b></label>
            <input className={"form-control col-sm"} type={"text"} id={"name"} onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div className={"row mb-3 me-4"}>
            <label className={"form-label col-sm-3 my-auto"} htmlFor={"email"}><b>이메일</b></label>
            <input className={"form-control col-sm"} type={"email"} id={"email"} onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <button className={"btn btn-primary mt-4"} onClick={findIdBtn}>확인</button>
        </div> :
        <div>
          <p>{name} 님의 ID</p>
          <p>[{memberId}]</p>
        </div>
      }
    </div>
  );
}

export default FindId;