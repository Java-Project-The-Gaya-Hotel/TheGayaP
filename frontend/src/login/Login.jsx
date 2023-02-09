import React from "react";
import LoginBody from "./loginComp/LoginBody";
import 'animate.css'
import styled from "styled-components";


const CompHead = styled.div`
font-size: 19px
`;
const CompAni = styled.div`
animation:fadeIn; 
animation-duration: 1s;
`

function Login() {

    return (
        <CompAni className={"container mt-5 py-4"}>
            <div className={"grid justify-content-center col-md-6 mx-auto"}>
                {/* 환영 문구 */}
                <div className={"text-center"}>
                    <div className={"container mb-4"}>
                        <h1 className={"fw-bolder"}> Welcome To Gaya Rewards! </h1>
                        <CompHead>가야리워즈의 번호와 비밀번호를 입력해주시기 바랍니다.</CompHead>
                    </div>
                </div>
                <LoginBody/>
            </div>
            <div className={"container text-center"}>
                <figcaption className={"fw-bold p-2"}> 호텔가야의 회원이 되시면 다양한 호텔의 정보 및 서비스 혜택을 받으실 수 있습니다.</figcaption>
            </div>
        </CompAni>
    );
}

export default Login;