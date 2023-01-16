import React from "react";
import "../src/Test.css"
import Test2 from "./Test2";
import Test3 from "./Test3";


function Test1() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col"}>

                    <h3>회원정보</h3>
                </div>
                <hr/>
                <div className={"row"}>
                    <div className={"col"}>
                        <h5>기본정보</h5>
                    </div>
                    <div className={"col text-end"}>
                        <h5>* 표시 필수입력 사항</h5>
                    </div>
                </div>


            <Test3/>

                <Test2/>
                <br/><hr/>

                <button>
                    회원 가입
                </button>
            </div>

        </div>
    )
}

export default Test1;