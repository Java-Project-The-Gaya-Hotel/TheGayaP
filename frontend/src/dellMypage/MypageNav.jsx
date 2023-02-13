import React from 'react';
import {Link, Outlet} from "react-router-dom";

function MypageNav() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-3"}>
                    <nav>
                        <ul>내 정보
                            <div className={"container my-3"}>
                                <li><Link to={"myBookingSchedule"}>내 예약 확인</Link></li>
                                <li><Link to={"myqalist"}>내 문의 내역</Link></li>
                                <li><Link to={"profilesave"}>프로필 수정</Link></li>
                                <li><Link to={"mypasswordchange"}>비밀번호 변경</Link></li>
                                <li><Link to={"memberoff"}>회원 탈퇴</Link></li>
                                <br/>
                                <li className={"small"}><Link to={"/mypage"}>My Page Home </Link></li>
                            </div>
                        </ul>
                    </nav>
                </div>

                <div className={"col-9"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default MypageNav;