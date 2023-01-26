import React from "react";

function NotMember(props){
    return(
        <div>
            <div className={"bg-opacity-25 bg-dark p-0 "}>
                <div className={"container-fluid p-5"}>
                    <div className={"d-grid justify-content-center"}>
                        <div className={"d-grid"}>
                            <div className={"row mt-1 mb-1"}>
                                <h3 className={"text-center"}>예약 찾기</h3>
                                <div className={'col-8'}>
                                    {/* 예약 번호 or 이름 */}
                                    <input type={"text"} className={"col-11 mb-3"} placeholder={"예약번호 or 이름"}/>
                                    {/* 이메일 */}
                                    <input type={"text"} className={"col-11"} placeholder={"이메일"}/>
                                </div>
                                <div className={'col-4 p-0 d-flex row'}>
                                    {/*로그인 버튼*/}
                                    <button className={"btn btn-secondary btn-lg p-0"}
                                            style={{borderRadius: 0}}>예약 찾기
                                    </button>
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