import React from "react";
import MainFooter from "./MainFooter";
import Carosel from "./Carosel"
import DateChoose from "./DateChoose";
import MainExtra from "./MainExtra";
import 'animate.css'




function MainPage(props) {

    return (
        <div>

            {/*main*/}
            <main>
                <div id={"wrapper"} className={"align-items-center text-center"}>
                    {/*Main Carosel - 메인 이미지 캐러셀 */}
                    <div>
                        <Carosel/>
                    </div>

                    <div className={"animate__animated animate__fadeInDown pt-2 pb-3"}>
                        <hr/>
                        <DateChoose/>
                        <hr/>
                    </div>

                    <div>
                        <h5>예약 시 주의 사항</h5>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Curabitur faucibus tristique urna, sit amet placerat odio pretium ut.<br/>
                            Fusce tempor euismod neque eu egestas. Sed velit lectus, interdum nec sollicitudin</p>
                    </div>

                    <div className={"container"}>
                        <h2 className={"pt-5"}> Hotel Gallery</h2>
                        <MainExtra/>
                    </div>

                    <div>
                        추가
                    </div>

                </div>
            </main>

            {/* Footer */}
            <MainFooter/>
        </div>)
}

export default MainPage;