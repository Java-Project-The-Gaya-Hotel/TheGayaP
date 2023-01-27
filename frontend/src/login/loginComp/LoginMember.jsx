import React, {useState} from "react";
import axios from "axios";


function LoginMember(props) {

    const [id, setId] = useState("")
    const [pw, setPw] = useState("")


    const loginData = {
        memberId: id,
        memberPw: pw
    };

    const submitLogin = (e) => {
        e.preventDefault(); //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능

        axios.post("http://localhost:8080/login/check",loginData)
          .then((req) => {
              console.log("데이터 전송 성공")
              ;
              if (req.data === 0) {
                  alert("아이디와 비밀번호를 다시 확인해주세요.");
              }
              else {
                  window.location.href="/";
                  alert(req.data.memberName + "님 반갑습니다.");
              }


          }).catch(err => {
            console.log(`데이터 전송 실패 ${err}`)
        })

    }

    return (
        <div>
            <div className={"bg-opacity-25 bg-dark p-0 "}>
                {/*버튼 그룹으로 회원 비회원 분리*/}
                <div className={"container-fluid p-5"}>
                    <div className={"d-grid justify-content-center"}>
                        <div className={"d-grid"}>
                            <div className={"row mt-2"}>
                                <div className={'col-10'}>
                                    {/*아이디*/}
                                    <input type={"text"} className={"col-11"} placeholder={"아이디 or 회원 번호"}
                                           onChange={(e) => {
                                               setId(e.target.value)
                                           }}/>
                                    {/*비밀번호*/}
                                    <input type={"text"} className={"col-11"} placeholder={"비밀번호"}
                                           onChange={(e) => {
                                               setPw(e.target.value)
                                           }}/>
                                </div>
                                <div className={'col-2 p-0 d-flex row'}>
                                    {/*로그인 버튼*/}
                                    <button className={"btn btn-secondary btn-lg p-0"}
                                            style={{borderRadius: 0}} onClick={submitLogin}>로그인
                                    </button>
                                </div>
                            </div>
                            {/*아이디 저장*/}
                            <div className={"d-flex my-2"}>
                                <input type={"checkbox"}/>
                                <label className={"ms-2"}>가야 리워즈 번호 또는 아이디 저장</label>
                            </div>
                        </div>
                        {/*회원가입 및 아이디 비밀번호 찾기*/}
                        <div className={"d-flex"}>
                            <button className={"btn btn-dark p-1"} style={{borderRadius: 0}}>가야 리워즈 가입</button>
                            <button className={"btn btn-secondary mx-2 p-1"} style={{borderRadius: 0}}>가야 리워즈 번호 또는 아이디
                                찾기
                            </button>
                            <button className={"btn btn-secondary p-1"} style={{borderRadius: 0}}>비밀번호 찾기</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"bg-opacity-10 bg-dark text-center mt-3"}>
                <p className={"text-center mx-2 my-2 py-2"}>이메일, 연락처 등의 정보가 변경되면 웹사이트에서 회원정보를 수정해주시기 바랍니다.</p>
            </div>
        </div>
    );
}

export default LoginMember;