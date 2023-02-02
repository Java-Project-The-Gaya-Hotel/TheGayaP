import React, {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import moment from "moment";
import "../loginCss/ButtonCss.css"

// 회원 로그인
function LoginMember(props) {

    // // 종율씨 코드
    // const [id, setId] = useState("")
    // const [pw, setPw] = useState("")
    //
    //
    // const loginData = {
    //     memberId: id,
    //     memberPw: pw
    // };
    //
    // const submitLogin = (e) => {
    //     e.preventDefault(); //리프레시 방지-> 방지해야 이 아래 라인의 코드들 실행 가능
    //
    //     axios.post("http://localhost:8080/login/check",loginData)
    //       .then((req) => {
    //           console.log("데이터 전송 성공")
    //           ;
    //           if (req.data === 0) {
    //               alert("아이디와 비밀번호를 다시 확인해주세요.");
    //           }
    //           else {
    //               window.location.href="/";
    //               alert(req.data.memberName + "님 반갑습니다.");
    //           }
    //
    //
    //       }).catch(err => {
    //         console.log(`데이터 전송 실패 ${err}`)
    //     })
    //
    // }

    //
    //신현섭 코드
    const [memberId, setMemberId] = useState("");
    const [memberPw, setMemberPw] = useState("");
    const navi = useNavigate();


    // 로그인 버튼 클릭시 발동하는 함수
    const login = async (id, pw) => {
        try {
            // 로그인 정보 보내는 axios
            const response = await axios.post("http://localhost:8080/members/login", {
                memberId: id,
                memberPw: pw
            })
            if (response.data === "") {
                alert("아이디 혹은 비밀번호가 틀렸습니다.")
            } else {
                // console.log(response.data);
                alert(id + "님 환영합니다.")
                sessionStorage.setItem("token", JSON.stringify(response.data));
                sessionStorage.setItem("loginInfo", moment.now().toString())
                window.location.href = "/";
            }

        } catch (err) {
            console.log(err)
        }
    }


    // 로그인 클릭 버튼 이벤트
    const loginUser = () => {
        if (memberId === "") {
            alert("아이디를 입력해 주세요")
        } else if (memberPw === "") {
            alert("비밀번호를 입력해주세요")
        } else {
            login(memberId, memberPw);
        }
    }


    // 회원가입 버튼
    const goToSignup = () => {
        navi("/join");
    }


    const onChangeMemberId = (e) => {
        setMemberId(e.target.value);
    }

    const onChangeMemberPw = (e) => {
        setMemberPw(e.target.value);
    }


    return (
        <div>
            <div className={"border border-1 border-top-0 border-dark"}>
                {/*버튼 그룹으로 회원 비회원 분리*/}
                <div className={"container-fluid p-5"}>
                    <div className={"d-grid justify-content-center"}>
                        <div className={"d-grid"}>
                            <div className={"row mt-2"}>
                                <div className={'col-10'}>
                                    {/*아이디*/}
                                    <input type={"text"} className={"col-11"} placeholder={"아이디 or 회원 번호"} onChange={onChangeMemberId}/>
                                    {/*비밀번호*/}
                                    <input type={"text"} className={"col-11"} placeholder={"비밀번호"} onChange={onChangeMemberPw}/>
                                </div>
                                <div className={'col-2 p-0 d-flex row'}>
                                    {/*로그인 버튼*/}
                                    <button className={"custom-btn btn-Login"} style={{borderRadius: 0}} onClick={loginUser}>로그인</button>
                                </div>
                            </div>
                            {/*아이디 저장*/}
                            <div className={"d-flex my-2"}>
                                <input type={"checkbox"}/>
                                <label className={"ms-2"}>가야 리워즈 번호 또는 아이디 저장</label>
                            </div>
                        </div>
                        {/*회원가입 및 아이디 비밀번호 찾기*/}
                        <div className={"d-flex justify-content-center"}>
                            <button className={"btn btn-dark p-1"} style={{borderRadius: 0}}>가야 리워즈 가입</button>
                            <button className={"btn btn-outline-dark mx-2 p-1"} style={{borderRadius: 0}}>가야 리워즈 번호 또는 아이디 찾기</button>
                            <button className={"btn btn-outline-dark p-1"} style={{borderRadius: 0}}>비밀번호 찾기</button>
                        </div>
                        <div className={"small p-2"}>이메일, 연락처 등의 정보가 변경되면 웹사이트에서 회원정보를 수정해주시기 바랍니다.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginMember;