import React from "react";

import introImg from "../intoroImg/Untitled-1 (8).jpg"
import introImg1 from "../intoroImg/intro1.jpg"
import introImg2 from "../intoroImg/intro4.jpg"

function IntroPageMain() {
    return (
        <div className={"container"}>
            <div><img src={introImg}/></div>

            <div className={"my-4"}>
                <h3>The Gaya</h3>
                <p>The Gaya는 고품격 라이프 스타일을 제안하는 서비스 전문 기업입니다. <br/>
                    호텔 뿐 아니라 외식사업, 오피스 빌딩 위탁 운영 등 품격 있는 서비스와 시설을 제공합니다.<br/>
                    항상 고객에게 신비롭고 설레는 경험을 제공하며, 글로벌 리딩 호텔로 거듭나기 위해 끊임없이 노력하고 있습니다.</p>
            </div>

            <br/>
            <br/>

            <div>
                <div className={"row align-items-center"}>
                    <div className={"col"}><img src={introImg1}/></div>
                    <div className={"col m-3"}>
                        <p>
                            도심 속에서 힐링이 가능한 The Gaya는,<br/>
                            천혜의 자연환경이 조성되어 있으며 호텔 내부의 <br/>
                            넓은 녹지공간과 연결되어 도심에서 바쁜 일상을 벗어나 <br/>
                            고객들이 편안한 오감만족 휴식을 취할 수 있습니다.
                        </p>
                    </div>
                </div>
            </div>

            <div>
                <div className={"row align-items-center"}>
                    <div className={"col m-3"}>
                        <p>
                            호스피탈리티 산업의 본질 탐구와 혁신을 통해 세계적 수준의 <br/>
                            호텔 경험을 제공합니다. 아무런 준비 없이 찾아도 머무는 동안 <br/>
                            최적의 편안함과 최고의 즐거움을 느낄 수 있는 곳, <br/>
                            선제적이고 유연한 서비스와 끊임없이 새로운 경험들로 잊지 못할<br/>
                            즐거운 여정을 선사하겠습니다.
                        </p>
                    </div>
                    <div className={"col"}><img src={introImg2}/></div>
                </div>
            </div>

            <br/>
            <br/>


        </div>
    )
}

export default IntroPageMain;