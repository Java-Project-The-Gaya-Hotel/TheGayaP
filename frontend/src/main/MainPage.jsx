import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import Carosel from "./Carosel"
import MainDatePicker from "./MainDatePicker";
import {BrowserRouter, Routes, route} from "react-router-dom";


function MainPage(props) {


    return (
        <div>
            {/*pageRouter*/}
            {/*<BrowserRouter>*/}
            {/*    <Routes>*/}
            {/*        <Route>*/}

            {/*        </Route>*/}
            {/*    </Routes>*/}
            {/*</BrowserRouter>*/}

            {/*Header*/}
            <MainHeader/>

            {/*main*/}
            <main>
                <div id={"wrapper"} className={"align-items-center text-center"}>
                    {/*Main Carosel - 메인 이미지 캐러셀 */}
                    <div>
                        <Carosel/>
                    </div>

                    <div className={"p-5 m-5"}>
                        <div className={"container text-center"}>
                            <div className={"row"}>

                                <div className={"col"}>
                                    <select className={"m-0 p-0"}>
                                        <option>Hotel</option>
                                        <option>Stay</option>
                                    </select>
                                </div>

                                <div className={"col"}>
                                    <MainDatePicker/>
                                </div>
                                {/* 인원 수 - 수정 예정 */}
                                <div className={"col m-0 p-0"}>
                                    <p>인원</p>
                                </div>
                                {/* 페이지 이동 - 수정 중*/}
                                <div className={"col"}>
                                    <button type={"button"}> 검색하기</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                    </div>

                    <div>
                        components 1
                    </div>
                </div>
            </main>

            {/* Footer */}
            <MainFooter/>
        </div>
    )
}

export default MainPage;