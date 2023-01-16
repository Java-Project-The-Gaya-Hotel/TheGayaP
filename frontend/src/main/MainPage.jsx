import React from "react";
import MainFooter from "./MainFooter";
import Carosel from "./Carosel"
import MainDatePicker from "./MainDatePicker";
import DateChoose from "./DateChoose";
import MainExtra from "./MainExtra";


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

                    <div>
                        <DateChoose/>
                    </div>

                    <div>
                        <MainExtra/>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <MainFooter/>
        </div>)
}

export default MainPage;