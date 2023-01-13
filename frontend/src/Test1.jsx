import React from "react";
import "../src/Test.css"
function Test1(){
    return(
        <div className={"container p-3"}>
            <div className={"row"}>
                <div className={"col-sm-8"}>
                    <h3>회정정보입력</h3>
                </div>
                <hr/>
                <div className={"m-5"}>
                    <h5>기본 입력</h5>
                    <h5 className={"Text"}>* 표시 필수입력사항</h5>
                </div>
            </div>

        </div>
    )
}
export default Test1;