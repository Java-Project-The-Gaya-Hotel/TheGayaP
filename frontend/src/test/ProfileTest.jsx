// ProfileTest.jsx
import React, {useState} from "react";

function ProfileTest() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");


  return (
    <div>
      <label htmlFor={"name"}>이름</label>
      <input id={"name"} type={"text"} value={name} onChange={(e) => {setName(e.target.value)}}/>
      <label htmlFor={"email"}>이메일</label>
      <input id={"email"} type={"text"} value={email} onChange={(e) => {setEmail(e.target.value)}}/>
      <label htmlFor={"tel"}>번호</label>
      <input id={"tel"} type={"text"} value={tel} onChange={(e) => {setTel(e.target.value)}}/>
    </div>
  );

}

export default ProfileTest;