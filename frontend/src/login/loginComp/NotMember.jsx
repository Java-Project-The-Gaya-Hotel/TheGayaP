import React from "react";

// 비회원 예약찾기
function NotMember(props){
    return(
        <div>
            <div className={"border border-1 border-top-0 border-dark "}>
                <div className={"p-5 mb-4"}>
                    <div>
                        <div>
                            <div className={"row justify-content-center align-items-center"}>
                                <h3 className={"text-center pb-4 fw-bolder"}>예약 찾기</h3>
                                <div className={'col-8 mx-2'}>
                                    {/* 예약 번호 or 이름 */}
                                    <input type={"text"} className={"col-11 mb-3"} placeholder={"예약번호 or 이름"}/>
                                    {/* 이메일 */}
                                    <input type={"text"} className={"col-11"} placeholder={"이메일"}/>
                                </div>

                                <div className={'col-4 p-0 d-flex row'}>
                                    {/*로그인 버튼*/}
                                    <button className={"custom-btn btn-Login fw-bolder"}>예약 찾기</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotMember;