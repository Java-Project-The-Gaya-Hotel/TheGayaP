import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import styled from "styled-components";


const CrumbAni = styled.div`
animation:fadeInUp;
animation-duration:1s;
`;

const FormBox = styled.div`
animation:fadeInUp;
animation-duration:2s;
`;

const Information = styled.div`
animation:fadeInUp;
animation-duration:3s;
`;


function collapse(element) {
    const before = document.getElementsByClassName("active")[0];               // 기존에 활성화된 버튼
    if (before && document.getElementsByClassName("active")[0] !== element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
        before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
        before.classList.remove("active");                  // 버튼 비활성화
    }
    element.classList.toggle("active");         // 활성화 여부 toggle

    const content = element.nextElementSibling;
    if (content.style.maxHeight !== 0) {         // 버튼 다음 요소가 펼쳐져 있으면
        content.style.maxHeight = null;         // 접기
    } else {
        content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
    }
}

function ReservationPageDetail2() {

    //////////////////////////////////////////////
    // 결제 추가
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const startDate = searchParams.get('sDate');
    const endDate = searchParams.get('eDate');
    const adultCount = searchParams.get('adultCount');
    const childCount = searchParams.get('childCount')
    const totalCount = searchParams.get('total')
    const hotelName = searchParams.get('hotelName');
    const roomCode = searchParams.get('roomCode');
    const roomCost = searchParams.get('roomCost');
    const nights = searchParams.get('nights');

    useEffect(() => {
        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery); document.head.removeChild(iamport);
        }
    }, []);


    const onClickPayment = () => {
        /* 1. 가맹점 식별하기 */
        const { IMP } = window;
        IMP.init('imp73778403');

        /* 2. 결제 데이터 정의하기 */
        const data = {
            pg: 'html5_inicis',                           // PG사
            pay_method: 'card',                           // 결제수단
            merchant_uid: `${new Date().getTime()}`,   // 주문번호
            amount: 100,                                 // 결제금액
            name: '결제 테스트',                  // 주문명
            buyer_name: `${name}`,                           // 구매자 이름
            buyer_tel: `${num}`,                     // 구매자 전화번호
            buyer_email: `${email}`,               // 구매자 이메일
        };

        /* 4. 결제 창 호출하기 */
        IMP.request_pay(data, callback);
    }

    /* 3. 콜백 함수 정의하기 */
    function callback(response) {
        const {
            success,
            merchant_uid,
            error_msg,
        } = response;

        if (success) {
            axios.post("http://localhost:8080/gaya/bookRoom",
                {
                    reservationNum: merchant_uid,
                    hotelName: hotelName,
                    roomCode: roomCode,
                    customerName: name,
                    customerEmail: email,
                    customerTel: num,
                    checkIn: startDate,
                    checkOut: endDate,
                    nights: nights,
                    reservationPeople: totalCount,
                    totalCost: roomCost
                })
                .then((req) => {
                    alert('결제 성공');
                    console.log("결제 성공");
                    window.location.href = "/";
                }).catch(err => {
                console.log(`데이터 전송 실패 ${err}`)
            })

        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    }

        /////////////////////////////////////////////////////////

    const style = {
        boxSize: {
            width: "300px"
        },
        boxSizePh: {
            width: "238px"
        }
    }


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [num, setNum] = useState("");

    const onNumHandler = (event) => {
        setNum(event.target.value)
    }
    const onNameHandler = (event) => {
        setName(event.target.value)
    }
    const onEmailHandler = (event) => {
        setEmail(event.target.value)
    }


    const handlePress = (e) => {
        const regex = /^[0-9\b -]{0,13}$/;
        if (regex.test(e.target.value)) {
            setNum(e.target.value);
        }
    }

    useEffect(() => {
        if (num.length === 10) {
            setNum(num.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3'));
        }
        if (num.length === 13) {
            setNum(num.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        }
    }, [num]);


    return (
        <div>
            {/*main*/}
            <div className={"container"}>
                {/*breadcrumb*/}
                <CrumbAni>
                    <section>
                        <nav>
                            <ol className="cd-multi-steps text-top">
                                <li className={"visited fw-lighter"}><em> Booking Condition </em></li>
                                <li className={"visited fw-lighter"}><em> Room Condition</em></li>
                                <li className={"visited fw-lighter"}><em> Find Room </em></li>
                                <li className={"current fw-bold"}>
                                    <div> Payment Information</div>
                                </li>
                            </ol>
                        </nav>
                    </section>
                </CrumbAni>


                <FormBox className={"container"}>
                    <div className={"row"}>
                        <div className={"row"}>
                            <div>
                                <div className={"col text-end"}>
                                    <div><em className="ast">*</em> 표시 필수입력 사항</div>
                                </div>
                            </div>
                            {/* 테이블 구역 */}
                            <hr className={"mb-4"}/>
                            <div className={"container row justify-content-center align-items-center m-3"}>
                                <div className={"container col"}>
                                    <table className={"table table-hover m-0"}>

                                        <thead className={"container"}>
                                        <tr>
                                            <th colSpan={4} className={"fw-bold h4 p-2"} style={{borderBottom: "none"}}>기본 정보</th>
                                        </tr>
                                        </thead>

                                        <tbody className={"container"}>

                                        <tr>
                                            <td><em className="ast">*</em> 이름 :</td>
                                            <td><input onChange={onNameHandler} style={style.boxSize} type={"text"} className={"id"} autoComplete={"off"} placeholder={"Please Input Your Name"}/></td>
                                        </tr>
                                        <tr>
                                            <td><em className="ast">*</em> 이메일 :</td>
                                            <td><input onChange={onEmailHandler} style={style.boxSize} type={"email"} placeholder={"Please Input Your Email"}/></td>
                                        </tr>

                                        <tr>
                                            <td><em className="ast">*</em> 전화번호 :</td>
                                            <td>
                                                <select>
                                                    <option value="+82" title="+82">+82</option>
                                                </select>
                                                <input style={style.boxSizePh} className={"mx-2"} value={num} placeholder={"Please Input Your Phone Number"} onChange={onNumHandler}/></td>
                                        </tr>

                                        </tbody>
                                    </table>
                                </div>

                                <div className={"container col text-center"}>
                                    <div className={"m-4 fw-bold h5"}>결제 하기</div>
                                    <button onClick={onClickPayment} className={"btnDate"} role={"button"}><span className="text">결제하기</span>Payment</button>
                                </div>
                            </div>

                            <hr className={"mt-5"}/>
                        </div>

                    </div>
                </FormBox>

                <Information>
                    <div className={"container mt-4 m-2 p-3"}>
                        <h3 className={"fw-bold"}>주의사항</h3>
                        {/*안내 구역 */}
                        <div className={"row m-3 small opacity-75"}>
                            <div className={"col"}>
                                <h5 className={"fw-bold"}>호텔 이용안내</h5>
                                <ul>
                                    <li>기준 인원을 초과하여 투숙 시 추가 인원에 대해 별도의 요금이 부과됩니다.
                                        추가 인원에 대한 기본 요금은 성인 60,500원, 어린이 36,300원이며, 객실 타입 및 패키지 혜택에 따라 상이합니다.
                                        (성인 기준 : 만 13세 이상, 어린이 기준 : 37개월 이상 ~ 만 12세 이하)
                                    </li>
                                    <li>37개월 미만의 유아 동반 시 추가 인원 요금 및 조식은 무료이며, 유아(37개월 미만) 동반 여부는 체크인 시 프런트 데스크 직원에게 알려
                                        주셔야 무료로 이용 가능합니다.
                                    </li>
                                    <li>크인은 오후 2시 이후, 체크아웃은 오전 11시까지입니다.
                                        오후 2시 이전 Early Check-in 또는 오전 11시 이후 Late Check-out 하실 경우 추가 요금이 부과될 수 있습니다.
                                    </li>
                                    <li>체크인 시 등록카드 작성 및 투숙객 본인 확인을 위해 본인 사진이 포함된 신분증을 반드시 제시해 주시기 바랍니다.</li>
                                    <li>본 홈페이지 요금은 할인 적용된 요금이며, 카드사 할인 등의 중복 할인 혜택이 적용되지 않습니다.</li>
                                    <li>어린이 동반 고객을 위한 영유아 용품(아기 욕조, 아기 침대, 어린이 베개 및 아동용 배스 로브와 슬리퍼)은 객실예약과를 통해 사전 요청
                                        가능하며, 이용 상황에 따라 조기 마감될 수 있습니다.
                                        (단, 유모차는 현장에서만 대여 가능합니다.)
                                    </li>
                                    <li>호텔 내 객실과 공공장소는 모두 금연 장소입니다. 흡연은 금지되며 위반 시 페널티가 부과됩니다.</li>
                                    <li>대출 요청이 완료된 영유아 용품, 엑스트라 베드는 체크인 당일 18시까지 객실에 준비해 드립니다.</li>
                                </ul>
                            </div>

                            <div className={"col"}>
                                <h5 className={"fw-bold"}>부대시설 이용안내</h5>
                                <ul>
                                    <li>체련장(Gym), 및 수영장, 실내 사우나(유료 시설)는 매월 3번째 수요일 정기 휴무입니다.</li>
                                    <li>체련장은 만 16세 이상, 실내 사우나는 만 13세 이상부터 이용 가능합니다.</li>
                                    <li>실내 수영장은 성인 고객 전용 시설로, 만 13세 미만 고객은 주말 및 공휴일에 한해 성인 보호자의 보호 하에 이용 가능합니다.</li>
                                    <li>야외 수영장인 어번 아일랜드는 유료 시설로서 입장 혜택이 포함된 상품 외에는 이용 시 입장료가 추가로 부과되며 사전 예약은 불가합니다. 쾌적하고
                                        안전한 운영을 위해 적정 인원 초과 시 입장이 제한될 수 있습니다.
                                    </li>
                                    <li>2023년 어번 아일랜드(야외 수영장) 운영 기간 : 3월 11일 ~ 11월 26일</li>
                                    <li>실내 및 야외 수영장의 성인풀에서는 신장 140cm 미만인 고객은 성인 보호자의 보호 하에 구명조끼 착용 시에만 이용 가능합니다.</li>
                                    <li>실내 및 야외 수영장에서 다이빙은 금지되어 있습니다.</li>
                                    <li>성인풀, 키즈풀 및 자쿠지 등의 시설 이용 시 현장 라이프 가드 직원의 안내를 받으시기 바랍니다.</li>
                                    <li>호텔 부대시설은 감염병 예방법, 재난 안전법 등 관련 법령 및 방역당국 등의 규제, 조치 사항 등에 따라 사전 고지 없이 이용이 제한되거나
                                        변경될 수 있습니다.
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className={"container mt-2 px-3"}>
                        <h3 className={"fw-bold"}>취소 및 환불규정</h3>
                        <div className={"row m-3 small opacity-75"}>
                            <h5 className={"fw-bold"}>[취소/변경 및 노쇼(No-show) 안내]</h5>
                            <ul>
                                <li>숙박 예정일 1일 전 18시까지는 위약금 없이 취소 및 변경이 가능합니다.</li>
                                <li>숙박 예정일 1일 전 18시 이후 취소/변경 및 노쇼(No-show) 발생 시,</li>
                                <li>- 성수기(5월~10월, 12월 24일~31일) : 최초 1일 숙박 요금의 80%가 위약금으로 부과됩니다.</li>
                                <li>- 비수기(성수기 외 기간) : 최초 1일 숙박 요금의 10%가 위약금으로 부과됩니다.</li>
                            </ul>
                        </div>
                    </div>
                </Information>
            </div>

        </div>
    )
}

export default ReservationPageDetail2;