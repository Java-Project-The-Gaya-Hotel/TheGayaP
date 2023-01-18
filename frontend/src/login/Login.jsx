import React from "react";


function Login() {
    return (
        <div className={"container mt-5 py-4 vh-100"}>
            <div id={"login-head"} className={"container-fluid col-md-10 mx-auto border-bottom pb-5"}>
                <h4 className={"text-lg-start"}>로그인</h4>
            </div>
            <div className={"grid justify-content-center col-md-8 mx-auto"}>
                <div className={"text-center mt-5"}>
                    <h2>가야리워즈에 오신 것을 환영합니다.</h2>
                    <span>
                      <p>가야리워즈의 번호와 비밀번호를 입력해주시기 바랍니다.</p>
                      <p>※ 호텔가야의 회원이 되시면 다양한 신라호텔의 정보 및  서비스 혜택을 받으실 수 있습니다.</p>
                  </span>
                </div>
                <div className={"bg-opacity-25 bg-dark p-0 "}>
                    <div className={"btn-group container p-0"} role={"group"} aria-label={"LoginGroup"}>
                        <button type={"button"} className={"btn btn-outline-secondary py-3"}
                                style={{borderRadius: 0}}>회원
                        </button>

                        <button type={"button"} className={"btn btn-outline-secondary"} style={{borderRadius: 0}}>비회원
                        </button>
                    </div>
                    <div className={"container-fluid p-5"}>
                        <div className={"d-grid justify-content-center"}>
                            <div className={"d-grid"}>
                                <div className={"row mt-2"}>
                                    {/*아이디*/}
                                    <div className={'col-10'}>
                                        <input type={"text"} className={"col-11"}/>
                                        {/*비밀번호*/}
                                        <input type={"text"} className={"col-11"}/>
                                    </div>
                                    <div className={'col-2 p-0 d-flex row'}>
                                        <button className={"btn btn-secondary btn-lg"}
                                                style={{borderRadius: 0}}>로그인
                                        </button>
                                    </div>
                                </div>
                                <div className={"d-flex my-2"}>
                                    <input type={"checkbox"}/>
                                    <label className={"ms-2"}>가야 리워즈 번호 또는 아이디 저장</label>
                                </div>
                            </div>
                            <div className={"d-flex"}>
                                <button className={"btn btn-dark"} style={{borderRadius: 0}}>가야 리워즈 가입</button>
                                <button className={"btn btn-secondary mx-1"} style={{borderRadius: 0}}>가야 리워즈 번호 또는 아이디 찾기
                                </button>
                                <button className={"btn btn-secondary"} style={{borderRadius: 0}}>비밀번호 찾기</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"bg-opacity-10 bg-dark text-center mt-3"}>
                    <p className={"text-center mx-2 my-2 py-2"}>이메일, 연락처 등의 정보가 변경되면 웹사이트에서 회원정보를 수정해주시기 바랍니다.</p>
                </div>
            </div>
        </div>
    );
}

export default Login;