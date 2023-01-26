import React, {useState} from "react";
import BeingImg from "../mainImg/pexels-castorly-stock-3761182.jpg";


function RoomCondition(props) {
    return (
        <div className={"container pt-5"}>
            <div className={"p-3"}>
                <h5 className={"p-2"}>Room Condition</h5>
                <div className={"row text-center align-items-center"}>
                    <div className={"col"}>객실 조건</div>
                    <div className={"col"}>
                        <button>객실 상세보기</button>
                    </div>
                    <div className={"col"}>요금</div>
                    <div className={"col"}>
                        <button>예약하기</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RoomCondition;
