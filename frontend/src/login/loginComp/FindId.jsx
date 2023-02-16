// FindId.jsx
import React, {useState} from "react";
import {default as Axios} from "axios";
import {Link} from "react-router-dom";
const axios = Axios.create({
  baseURL: "http://ec2-13-125-220-237.ap-northeast-2.compute.amazonaws.com:8080"
});

function FindId(props) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [memberId, setMemberId] = useState("");

  const [isFind, setIsFind] = useState(true);
  const [isMemberId, setIsMemberId] = useState(true);



  function closeModal() {
    props.closeModal();
  }



  const findIdBtn = () => {
    axios.get("/login/findId",
      {
        params: {memberName: name, memberEmail: email}
      })

      .then((req) => {
        console.log("데이터 전송 성공");

        setMemberId(req.data);
        setIsFind(false);
        if (req.data === "") {
          setIsMemberId(false);
        }

      }).catch(err => {
      console.log(`데이터 전송 실패 ${err}`)
    })
  }

  return (
    <div>
      {isFind ?
        <div>
          <h4 className={"my-2"}>아이디 찾기</h4>
          <div className={"row mt-5 me-4"}>
            <label className={"form-label col-sm-3 my-auto"} htmlFor={"name"}><b>이름</b></label>
            <input className={"form-control col-sm rounded-0"} type={"text"} id={"name"} onChange={(e) => {setName(e.target.value)}}/>
          </div>
          <div className={"row my-3 me-4"}>
            <label className={"form-label col-sm-3 my-auto"} htmlFor={"email"}><b>이메일</b></label>
            <input className={"form-control col-sm  rounded-0 "} type={"email"} id={"email"} onChange={(e) => {setEmail(e.target.value)}}/>
          </div>
          <button className={"mt-4 custom-btn3 btn-Login"} onClick={findIdBtn}>확인</button>
        </div> :
        <div>
          { isMemberId ?
              <div>
                <h5 className={"mt-4"}>{name} 님의 ID</h5>
                <h4 className={"mt-4"}>[{memberId}]</h4>
                <button onClick={closeModal} className={"btn btn-primary mt-4"}>확인</button>
              </div> :
              <div className={"mt-5"}>
                <p>입력하신 정보로 가야리워즈의 아이디를 찾을 수 없습니다.</p>
                <div className={"d-flex justify-content-center gap-3 my-5"}>
                  <button onClick={closeModal} className={"px-4 custom-btn3 btn-Login"}>확인</button>
                  <button className={"custom-btn3"}><Link to={"/join"}>가입하기</Link></button>
                </div>
              </div>
          }
        </div>
      }
    </div>
  );
}

export default FindId;