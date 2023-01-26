import React from "react";
import LoginBody from "./loginComp/LoginBody";



function Login() {

    return (
        <div className={"container mt-5 py-4 vh-100"}>
            <div id={"login-head"} className={"container-fluid col-md-10 mx-auto border-bottom pb-5"}>
                {/*제목 헤더*/}
                <h4 className={"text-lg-start"}>로그인</h4>
            </div>
            <div className={"grid justify-content-center col-md-6 mx-auto"}>
                {/* 환영 문구 */}
                <div className={"text-center mt-5"}>
                    <h2>가야리워즈에 오신 것을 환영합니다.</h2>
                    <span>
                      <p>가야리워즈의 번호와 비밀번호를 입력해주시기 바랍니다.</p>
                      <p>※ 호텔가야의 회원이 되시면 다양한 신라호텔의 정보 및  서비스 혜택을 받으실 수 있습니다.</p>
                  </span>
                </div>
                <LoginBody/>

            </div>
        </div>
    );
}

export default Login;