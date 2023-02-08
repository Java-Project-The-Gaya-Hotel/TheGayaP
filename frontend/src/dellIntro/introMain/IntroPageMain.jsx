import React from "react";
import introImg1 from "../intoroImg/intro1.jpg"
import introImg2 from "../intoroImg/intro2.jpg"
import introImg3 from "../intoroImg/intro3.jpg"
import introImg4 from "../intoroImg/intro4.jpg"
import introImg5 from "../intoroImg/intro5.jpg"

import introTitle from "../intoroImg/aboutTitle.jpg"
import styled from "styled-components";


const ImgSize = styled.img`
width : 450px;
height :250px;
object-fit:cover
;
`


function IntroPageMain() {
    return (
        <div className={"container"}>
            <div className={"p-5"}><img src={introTitle}/></div>


            <br/>
            <div className={"container p-5"}>
                <div className={"my-5"}>
                    <h3 className={"fw-bold"}>The Gaya</h3>
                    <br/>
                    <p className={"fw-light"}>The Gaya는 고품격 라이프 스타일을 제안하는 서비스 전문 기업입니다. <br/>
                        호텔 뿐 아니라 외식사업, 오피스 빌딩 위탁 운영 등 품격 있는 서비스와 시설을 제공합니다.<br/>
                        항상 고객에게 신비롭고 설레는 경험을 제공하며, 글로벌 리딩 호텔로 거듭나기 위해 끊임없이 노력하고 있습니다.</p>
                </div>
            </div>
            <br/>
            <br/>


            <div className={"container text-center align-content-center"}>
                <div className={"p-2"}>

                    <div className={"container"}>
                        <div className={"row align-items-center p-1"}>
                            <div className={"col p-0"}><ImgSize src={introImg1}/></div>
                            <div className={"col"}>
                                <div className={"fw-bold h4"}>
                                    도심 속 자연
                                </div>
                            </div>
                            <div className={"col p-0"}><ImgSize src={introImg3}/></div>
                        </div>
                    </div>

                    <div className={"container"}>
                        <div className={"row align-items-center p-1"}>
                            <div className={"col"}>
                                <div className={"fw-bold h4"}>
                                    안정적인 공간
                                </div>
                            </div>

                            <div className={"col p-0"}><ImgSize src={introImg2}/></div>

                            <div className={"col"}>
                                <div className={"fw-bold h4"}>
                                    최적의 편안함
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={"container"}>
                        <div className={"row align-items-center p-1"}>
                            <div className={"col p-0"}><ImgSize src={introImg4}/></div>
                            <div className={"col"}>
                                <div className={"fw-bold h4"}>
                                    맞춤 서비스
                                </div>
                            </div>
                            <div className={"col p-0"}><ImgSize src={introImg5}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default IntroPageMain;