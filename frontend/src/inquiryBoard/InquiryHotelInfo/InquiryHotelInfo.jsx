import React from "react";
import RewardImg from "../inquiryImg/reward.jpg"

function InquiryHotelInfo() {
    return (
        <div>
            <div className={"container "}>
                <div className={"pb-5"}><img src={RewardImg}/></div>
                <div className={"container bg-light small "}>
                    <p className={"p-5"}>
                        1. 회원에게 제공되는 등급별 특전 사항은 투숙 호텔에 따라 상이하며, 호텔 상황에 따라 제한될 수 있습니다.<br/>
                        2. 등급에 따른 특전 내용은 각 투숙 기간 동안 1회에 한해 제공되며, 모든 할인 혜택은 다른 할인 혜택과 중복 제공되지 않습니다.<br/>
                        3. 포인트는 적립 포인트 기준 소수점 이하 절사되어 적립되며 적립 기준은 결제 시점 기준일의 익일에 자동 적립됩니다.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default InquiryHotelInfo;