import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";
import styled from "styled-components";
import Swal from "sweetalert2";
import {GetMemberIdByToken} from "../functiontocheck/FunctionToCheck";
import {tr} from "date-fns/locale";


const CrumbAni = styled.div`
  animation: fadeInUp;
  animation-duration: 1s;
`;

const FormBox = styled.div`
  animation: fadeInUp;
  animation-duration: 2s;
`;

const Information = styled.div`
  animation: fadeInUp;
  animation-duration: 3s;
`;

function ReservationPageDetail2() {

    //////////////////////////////////////////////
    // 결제 추가
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const startDate = searchParams.get('sDate');
    const endDate = searchParams.get('eDate');
    const adultCount = searchParams.get('adultCount');
    const childCount = searchParams.get('childCount');
    const totalCount = searchParams.get('total')
    const hotelName = searchParams.get('hotelName');
    const hotelNum = searchParams.get('hotelNum');
    const roomCode = searchParams.get('roomCode');
    const costSum = searchParams.get('costSum')
    const nights = searchParams.get('nights');
    const roomName = searchParams.get("roomName");
    const [customerData, setCustomerData] = useState([]);
    const [customerName, setCustomerName] = useState("");
    const [customerEmail, setCustomerEmail] = useState("");
    const [customerTel, setCustomerTel] = useState("");
    const [totalCostSum, setTotalCostSum] = useState("");
    const [memberTotalCostSum, setMemberTotalCostSum] = useState("");
    const [costComma, setCostComma] = useState("");
    const [discountCostComma, setDiscountCostComma] = useState("");
    const [adultMealNum, setAdultMealNum] = useState(0);
    const [childMealNum, setChildMealNum] = useState(0);
    const [adultMealCost, setAdultMealCost] = useState(0);
    const [childMealCost, setChildMealCost] = useState(0);
    const [memberId, setMemberId] = useState("");
    const [reservationRequest, setReservationRequest] = useState("");
    const [memberTier, setMemberTier] = useState("");
    const [reRender, setReRender] = useState(false);


    useEffect(() => {


        if (sessionStorage.getItem("token") != null) {
            GetMemberIdByToken().then(response => {
                setMemberId(response.data);
                axios.get("http://localhost:8080/gaya/userinfo", {
                    params: {
                        memberId: response.data,
                    }
                }).then(async (res) => {
                    const user = res.data;


                    setCustomerData(user);
                    setCustomerName(user.memberName);
                    setCustomerEmail(user.memberEmail);
                    setCustomerTel(user.memberTel);
                    setMemberTier(customerData.memberTier);
                    // await setReRender(true);


                })
            }).catch(e => {
                setMemberId("");
            })
        }


        axios.get("http://localhost:8080/gaya/checkmealcost", {
            params: {
                hotelNum: searchParams.get('hotelNum'),
            }
        })
            .then((response) => {
                setAdultMealCost(response.data.hotelMealAdult);
                setChildMealCost(response.data.hotelMealChild);
            }).catch(e => {
            console.log(e);
        })
        setTotalCostSum(costSum);

        const jquery = document.createElement("script");
        jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
        const iamport = document.createElement("script");
        iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        }


    }, []);



    // 멤버쉽에 따른 할인율 적용
    useEffect(() => {
        setMemberTier(customerData.memberTier);
        let cost = Number(totalCostSum);
        let discountCost;

        setCostComma(cost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));

        if (memberTier == "GOLD") {
            discountCost = Math.floor(cost * 0.90);

        } else if (memberTier == "PLATINUM") {
            discountCost = Math.floor(cost * 0.85);
        } else if (memberTier == "BLACK") {
            discountCost = Math.floor(cost * 0.80);
        } else if (memberTier == "PREMIER") {
            discountCost = Math.floor(cost * 0.95);
        } else {
            discountCost = Math.floor(cost * 0.95);
        }


        setMemberTotalCostSum(discountCost);
        setDiscountCostComma(discountCost.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));



    }, [{memberTier,totalCostSum}])


    const onClickPayment = () => {
        /* 1. 가맹점 식별하기 */
        const {IMP} = window;
        IMP.init('imp73778403');

        /* 2. 결제 데이터 정의하기 */
        const data = {
            pg: 'html5_inicis',                           // PG사
            pay_method: 'card',                           // 결제수단
            merchant_uid: `${new Date().getTime()}`,   // 주문번호
            amount: 100,                                 // 결제금액
            name: '결제 테스트',                  // 주문명
            buyer_name: `${customerName}`,                           // 구매자 이름
            buyer_tel: `${customerTel}`,                     // 구매자 전화번호
            buyer_email: `${customerEmail}`,               // 구매자 이메일
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

        let earnPoint;
        let resultSum;
        if (memberId !== "" || memberId != null) {
            earnPoint = memberTotalCostSum * 0.01;
            resultSum = memberTotalCostSum;
        } else {
            resultSum = totalCostSum;
            earnPoint = 0;
        }

        if (success) {
            axios.post("http://localhost:8080/gaya/bookroom",
                {
                    reservationNum: merchant_uid,
                    reservationHotelNum: Number(hotelNum),
                    reservationRoomName: roomName,
                    reservationRoomCode: roomCode,
                    reservationCheckIn: startDate,
                    reservationCheckOut: endDate,
                    reservationNights: Number(nights),
                    reservationPeople: Number(totalCount),
                    reservationCost: resultSum,
                    reservationMealAdult: adultMealNum,
                    reservationMealChild: childMealNum,
                    customerId: memberId,
                    customerEmail: customerEmail,
                    customerName: customerName,
                    customerTel: customerTel,
                    earnPoint: earnPoint,
                    reservationRequest: reservationRequest,
                    memberTier: memberTier,
                })
                .then((req) => {
                    Swal.fire({
                        icon: 'info',
                        title: '결제 완료!',
                        text: ' 예약이 완료 됐습니다. '
                    }).then(result => {
                        if (result.isConfirmed) {
                            window.location.href = "/";
                        }
                    })

                }).catch(err => {
                console.log(`데이터 전송 실패 ${err}`)
            })

        } else {
            Swal.fire({
                icon: 'warning',
                title: '결제 실패!',
                text: `결제 실패: ${error_msg}`
            })
        }
    }

    /////////////////////////////////////////////////////////

    const style = {
        boxSize: {
            width: "300px",
            height: "30px"
        },
        boxSizePh: {
            width: "220px",
            height: "30px"
        },
        selectSize: {
            width: "50px",
            height: "30px"
        },
        formBoxSize: {
            width: "300px"
        }
    }


    const onNumHandler = (event) => {
        setCustomerTel(event.target.value)
    }
    const onNameHandler = (event) => {
        setCustomerName(event.target.value)
    }
    const onEmailHandler = (event) => {
        setCustomerEmail(event.target.value)
    }


    useEffect(() => {

        // if (customerTel.length === 13) {
        //     setCustomerTel(customerTel.replace(/-/g, '').replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'));
        // }else{
        //
        // }
    }, [customerTel]);

    // 조식 변경에 따른 총 가격 변경 useEffect
    useEffect(() => {

        setTotalCostSum((Number(costSum) + Number(adultMealCost * adultMealNum * nights) + Number(childMealCost * childMealNum * nights)).toString());
    }, [childMealNum, adultMealNum])


    const plusBtn = () => {

        let adult = adultCount;
        let adultM = adultMealNum;

        adultM++


        if (adult < adultM) {
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 예약한 인원수 만큼 조식 선택이 가능합니다. '
            })
        } else {
            setAdultMealNum(adultM);
        }

    }

    const minusBtn = () => {

        let adultM = adultMealNum;

        adultM--

        if (adultM < 0) {
            setAdultMealNum(0);
        } else {

            setAdultMealNum(adultM);
        }

    }

    const cdPlusBtn = () => {
        let child = childCount;
        let childM = childMealNum;

        childM++

        if (childM > child) {
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 예약한 인원수 만큼 조식 선택이 가능합니다 ',
            })
        } else {
            setChildMealNum(childM);
        }
    }

    const cdMinusBtn = () => {
        let childM = childMealNum;

        childM--

        if (childM < 0) {
            setChildMealNum(0);
        } else {

            setChildMealNum(childM);
        }
    }

    return (
        <div>
            {/*main*/}
            <div className={"container "}>
                {/*breadcrumb*/}
                <CrumbAni>
                    <section>
                        <nav>
                            <ol className="cd-multi-steps text-top">
                                <li className={"visited fw-lighter"}><em> Booking Condition </em></li>
                                <li className={"visited fw-lighter"}><em> Room Condition</em></li>
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
                                <div className={"container col-6"}>
                                    <table className={"table table-hover m-0"}>

                                        <thead className={"container"}>
                                        <tr>
                                            <th colSpan={4} className={"fw-bold h4 p-2"}
                                                style={{borderBottom: "none"}}>기본 정보
                                            </th>
                                        </tr>
                                        </thead>

                                        <tbody className={"container"}>

                                        <tr>
                                            <td><em className="ast">*</em> 이름 :</td>
                                            <td><input onChange={onNameHandler} style={style.boxSize} type={"text"}
                                                       className={"id form-control rounded-0"} autoComplete={"off"}
                                                       placeholder={"Please Input Your Name"} value={customerName}/>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td><em className="ast">*</em> 이메일 :</td>
                                            <td><input onChange={onEmailHandler} style={style.boxSize} type={"email"}
                                                       className={"form-control rounded-0"}
                                                       placeholder={"Please Input Your Email"} value={customerEmail}/>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td><em className="ast">*</em> 전화번호 :</td>
                                            <td>
                                                <div className={"row"}>
                                                    <select className={"col-2 mx-2"}>
                                                        <option value="+82" title="+82">+82</option>
                                                    </select>
                                                    <input style={style.boxSizePh}
                                                           className={"col-9 form-control rounded-0"}
                                                           value={customerTel}
                                                           placeholder={"Please Input Your Phone Number"}
                                                           onChange={onNumHandler}/></div>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>


                                    <div className={"fw-bold h4 p-2"}>조식 인원 선택</div>
                                    <div className={"d-flex"}>
                                        <div className={"container text-center my-3"}>
                                            <div className={""}>
                                                <div className={"fw-bold"}>성인</div>
                                                <button onClick={minusBtn}
                                                        className={"btn btn-outline-dark rounded-0 btn-sm"}> -
                                                </button>
                                                <span className={"p-2 mx-3"}>  {adultMealNum} </span>
                                                <button onClick={plusBtn}
                                                        className={"btn btn-outline-dark rounded-0 btn-sm"}> +
                                                </button>
                                            </div>
                                        </div>
                                        {
                                            childCount == 0 ? null :
                                                <div className={"container text-center my-3"}>
                                                    <div className={""}>
                                                        <div className={"fw-bold"}>어린이</div>
                                                        <button onClick={cdMinusBtn}
                                                                className={"btn btn-outline-dark rounded-0 btn-sm"}> -
                                                        </button>
                                                        <span className={"p-2 mx-3"}>  {childMealNum} </span>
                                                        <button onClick={cdPlusBtn}
                                                                className={"btn btn-outline-dark rounded-0 btn-sm"}> +
                                                        </button>
                                                    </div>
                                                </div>

                                        }

                                    </div>
                                </div>

                                <div className={"col-6"}>
                                    <table className={"table table-hover m-0"}>
                                        <thead className={"container"}>
                                        <tr>
                                            <th colSpan={4} className={"fw-bold h4 p-2"}
                                                style={{borderBottom: "none"}}>예약 정보
                                            </th>
                                        </tr>
                                        </thead>

                                        <tbody className={"container"}>

                                        <tr>
                                            <td> 예약할 호텔 :</td>
                                            <td><span style={style.boxSize}/>{hotelName}</td>
                                        </tr>
                                        <tr>
                                            <td> 예약할 방 이름 :</td>
                                            <td><span style={style.boxSize}/>{roomName}</td>
                                        </tr>
                                        <tr>
                                            <td>체크인 :</td>
                                            <td><span style={style.boxSize}/>{startDate}</td>
                                        </tr>
                                        <tr>
                                            <td>체크아웃 :</td>
                                            <td><span style={style.boxSize}/>{endDate}</td>
                                        </tr>
                                        {
                                            memberId === "" ? <tr>
                                                    <td>총 금액 :</td>
                                                    <td><span style={style.boxSize}/>{costComma} 원</td>
                                                </tr> :
                                                <tr>
                                                    <td>할인 전 금액 :</td>
                                                    <td><span style={style.boxSize}/><s>{costComma} 원</s></td>
                                                </tr>

                                        }
                                        {
                                            memberId === "" ? null : <tr>
                                                <td>할인 후 금액 :</td>
                                                <td><span style={style.boxSize}/>{discountCostComma} 원</td>
                                            </tr>
                                        }
                                        <tr>
                                            <td>요청 사항 :</td>
                                            <td><textarea className={"form-control rounded-0 small"}
                                                          style={style.boxSize} onChange={(e) => {
                                                setReservationRequest(e.target.value)
                                            }
                                            }></textarea></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>

                                <div className={"container col text-center pt-5"}>
                                    <div className={"m-4 fw-bold h5"}>결제 하기</div>
                                    <button onClick={onClickPayment} className={"btnDate"} role={"button"}><span
                                        className="text">결제하기</span>Payment
                                    </button>
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