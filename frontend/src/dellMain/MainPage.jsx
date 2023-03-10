import React, {useEffect} from "react";
import Carosel from "./Carosel"
import DateChoose from "./DateChoose";
import MainExtra from "./MainExtra";
import 'animate.css'
import styled from "styled-components";
import "../dellFontCss/Font.css"
import Caution from "../mainImg/Artboard 1.png"


const MainCaroselDiv = styled.div`
animation:fadeIn;
animation-duration:2s;
`;

const MainDateChooseDiv = styled.div`
animation:fadeInUp;
animation-duration:3s;
`;

const MainExtraDiv = styled.div`
animation:fadeInUp;
animation-duration:4s;
`;

const MainCutionDiv = styled.div`
animation:fadeInUp;
animation-duration:4s;
`;

function MainPage(props) {


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
                    </MainDateChooseDiv>

                    <MainExtraDiv className={"container pt-3 pb-4"}>
                        <h2 className={"pt-5"}> Hotel Gallery</h2>
                        <MainExtra/>
                    </MainExtraDiv>

                    <MainCutionDiv className={"pt-5"}>
                        <h3> 예약 시 주의 사항 </h3>
                        <div className={"p-0 m-0"}><img src = {Caution}/></div>
                    </MainCutionDiv>

                </div>
            </main>

        </div>)
}

export default MainPage;