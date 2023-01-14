import React from "react";
import MainFooter from "./MainFooter";
import MainHeader from "./MainHeader";
import Carosel from "./Carosel"


function MainPage() {
    return (
        <div>
            {/*Header*/}
            <MainHeader/>

            {/*main*/}
            <main>
                <div id={"wrapper"} className={"align-items-center text-center"}>
                    <div>
                        <Carosel/>
                    </div>

                    <div>
                        <div className={"container text-center "}>
                            <div className={"row align-items-center"}>
                                <div className={"col"}>
                                    <select>
                                        <option>Hotel</option>
                                        <option>Stay</option>
                                    </select>
                                </div>
                                <div className={"col"}>
                                    {/*    Date Picker  들어갈 곳 */}
                                </div>
                                <div className={"col"}>
                                    {/*객실 */}
                                    <dl>
                                        <dt> 객실</dt>
                                        <dd> 객실 개수</dd>
                                    </dl>
                                    <dl>
                                        <dt> 성인</dt>
                                        <dd> 성인 인원</dd>
                                    </dl>
                                </div>
                                <div>
                                    <button> 검색하기</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        components 1
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