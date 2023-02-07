import React, {useState} from "react";
import Modal from "./Modal";
import FindResv from "./FindResv";
import axios from "axios";

// 비회원 예약찾기
function NotMember(props){

    const [findResv, setFindResv] = useState(false);
    const [customerInfo, setCustomerInfo] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerTel, setCustomerTel] = useState("");

    const customerNameHandler = (e) => {
        setCustomerInfo(e.target.value);
    }

    const customerEmailHandler = (e) => {
        setCustomerEmail(e.target.value);
    }

    const resvBtn = () =>{
        setFindResv(!findResv)
        axios.get("http://localhost:8080/login/findResv", {params:
            {
                customerName: customerInfo,
                reservationNum: customerInfo,
                customerEmail: customerEmail,
                customerTel: customerTel
            }})
            .then((req) => {
                console.log("데이터 전송 성공");
                console.log(req.data);
                // setMemberId(req.data);
                // setIsFind(false);
                // if (req.data === "") {
                //     setIsMemberId(false);
                // }
                //
                // console.log(memberId);

            }).catch(err => {
                console.log(`데이터 전송 실패 ${err}`)
            })
    }

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
                                    <input onChange={customerNameHandler} type={"text"} className={"col-11 mb-3"} placeholder={"예약번호 or 이름"}/>
                                    {/* 이메일 */}
                                    <input onChange={customerEmailHandler} type={"text"} className={"col-11"} placeholder={"이메일"}/>
                                </div>

                                <div className={'col-4 p-0 d-flex row'}>
                                    {/*로그인 버튼*/}
                                    <button onClick={resvBtn} className={"custom-btn btn-Login fw-bolder"}>예약 찾기</button>
                                    {findResv && (
                                      <Modal closeModal={() => setFindResv(!findResv)}><FindResv closeModal={() => setFindResv(!findResv)}/></Modal>
                                    )}
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