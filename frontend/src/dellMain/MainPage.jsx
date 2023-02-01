import React, {useEffect} from "react";
import Carosel from "./Carosel"
import DateChoose from "./DateChoose";
import MainExtra from "./MainExtra";
// import 'animate.css'
import styled from "styled-components";
import {LoginCheck} from "../login/LoginBoolean";

const MainCaroselDiv = styled.div`
animation:fadeInDownBig;
animation-duration:4s;
`;

const MainDateChooseDiv = styled.div`
animation:fadeInDown;
animation-duration:3s;
`;

const MainExtraDiv = styled.div`
animation:fadeInDownBig;
animation-duration:2s;
`;

function MainPage(props) {

    useEffect(()=>{
        LoginCheck();
    },[])

    return (
        <div>

            {/*main*/}
            <main>
                <div id={"wrapper"} className={"align-items-center text-center"}>
                    {/*Main Carosel - 메인 이미지 캐러셀 */}
                    <MainCaroselDiv>
                        <Carosel/>
                    </MainCaroselDiv>

                    <MainDateChooseDiv>
                        <div className={"animate__animated animate__fadeInDown pt-2 pb-3"}>
                            <hr/>
                            <DateChoose/>
                            <hr/>
                        </div>

                        <div className={"p-5"}>
                            <h5>예약 시 주의 사항</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                                Curabitur faucibus tristique urna, sit amet placerat odio pretium ut.<br/>
                                Fusce tempor euismod neque eu egestas. Sed velit lectus, interdum nec sollicitudin</p>
                        </div>
                    </MainDateChooseDiv>

                    <MainExtraDiv className={"container"}>
                        <h2 className={"pt-5"}> Hotel Gallery</h2>
                        <MainExtra/>
                    </MainExtraDiv>

                    <div className={"p-5"}>
                        <p> 기타 사항 추가 시 입력할 영역 </p>
                    </div>

                </div>
            </main>

        </div>)
}

export default MainPage;