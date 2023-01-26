import React from "react";
import LoginBody from "./loginComp/LoginBody";
import 'animate.css'


function Login() {

    return (
        <div className={"container mt-5 py-4 animate__animated animate__fadeInLeft animate__slow"}>
            <div className={"grid justify-content-center col-md-6 mx-auto"}>
                {/* 환영 문구 */}
                <div className={"text-center"}>
                    <div className={"container mb-4"}>
                        <h2 className={"fw-bolder"}> Welcome To Gaya Rewards! </h2>
                        <div>가야리워즈의 번호와 비밀번호를 입력해주시기 바랍니다.</div>
                    </div>
                    <div className={"container m-3 p-2 text-center"}>
                        <figcaption className = {"small"}> 호텔가야의 회원이 되시면 다양한 호텔의 정보 및 서비스 혜택을 받으실 수 있습니다.</figcaption>
                    </div>
                </div>
                <LoginBody/>

            </div>
        </div>
    );
}

export default Login;