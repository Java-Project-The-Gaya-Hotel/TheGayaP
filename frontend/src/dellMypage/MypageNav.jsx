import React from 'react';
import {Link} from "react-router-dom";

function MypageNav() {
    return(
        <div className={"container"}>
            <div>
                <dl>
                    <dt>내 정보</dt>
                    <hr className={"border-1"}/>
                    <dd>내 예약 확인</dd>
                    <dd>내 문의 내역</dd>
                    <dd>프로필 수정</dd>
                    <dd>회원 탈퇴</dd>
                </dl>
            </div>
        </div>
    )
}
export default MypageNav;