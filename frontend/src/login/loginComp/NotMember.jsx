import React, {useState} from "react";
import Modal from "./Modal";
import FindResv from "./FindResv";
import {default as Axios} from "axios";
const axios = Axios.create({
    baseURL: "http://ec2-13-125-220-237.ap-northeast-2.compute.amazonaws.com:8080"
});
// 비회원 예약찾기
function NotMember(props){

    const [resvList, setResvList] = useState([]);
    const [findResv, setFindResv] = useState(false);
    const [customerName, setCustomerName] = useState("");
    const [reservationNum, setReservationNum] = useState(0);

    const customerNameHandler = (e) => {
        setCustomerName(e.target.value);
    }

    const reservationNumHandler = (e) => {
        setReservationNum(e.target.value);
    }

    const resvBtn = () =>{

        axios.get("/login/findResv", {params:
            {
                customerName: customerName,
                reservationNum: reservationNum,
            }})
            .then((req) => {
                console.log("데이터 전송 성공");
                console.log(req.data);
                if(req.data === 0) alert('조회된 예약정보가 없습니다.');
                else {
                    setResvList(req.data[0]);
                    setFindResv(!findResv);
                }


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
                                    {/* 예약 번호 */}
                                    <input onChange={reservationNumHandler} type={"text"} className={"col-11 mb-3"} placeholder={"예약번호"}/>
                                    {/* 이름 */}
                                    <input onChange={customerNameHandler} type={"text"} className={"col-11"} placeholder={"이름"}/>
                                </div>

                                <div className={'col-4 p-0 d-flex row'}>
                                    {/*로그인 버튼*/}
                                    <button onClick={resvBtn} className={"custom-btn btn-Login fw-bolder"}>예약 찾기</button>
                                    {findResv && (
                                        <Modal closeModal={() => setFindResv(!findResv)}>
                                            <FindResv closeModal={() => setFindResv(!findResv)} resvList={resvList}/>
                                        </Modal>
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