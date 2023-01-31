import React, {useEffect, useState} from "react";
import RoutesLayout from "../dellMain/RoutesLayout";
import MainFooter from "../dellMain/MainFooter";
import Swal from "sweetalert2";
import ReservationPageDetail2 from "./ReservationPageDetail2";


function ReservationPageDetail() {

    const [count, setCount] = useState(2);
    const [childCount, setChildCount] = useState(0);
    const [personnel, setPersonnel] = useState(0)


    const plusBtn = () => {

        let adult = count;
        let totalP;

        adult++
        totalP = adult + childCount;

        if (totalP > 4) {
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 총 인원 수는 4명까지 선택할 수 있습니다. ',
                footer: '<a href=""> 고객문의 안내는 여기로 </a>'
            })
        } else {
            setCount(adult);
            setPersonnel(totalP);
        }


    }

    const minusBtn = () => {

        let adult = count;

        adult--

        if (adult < 1) {
            setCount(1);
        } else {

            setCount(adult);
        }

    }

    const cdPlusBtn = () => {
        let child = childCount;
        let totalP;

        child++
        totalP = count + child;
        if (totalP > 4) {
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 총 인원 수는 4명까지 선택할 수 있습니다. ',
                footer: '<a href=""> 고객문의 안내는 여기로 </a>'
            })
        } else {
            setChildCount(child);
            setPersonnel(totalP);
        }
    }

    const cdMinusBtn = () => {
        let child = childCount;

        child--
        if (child < 0) {
            setChildCount(0);
        } else {

            setChildCount(child);
        }
    }


    return (

        <div>
            {/*main*/}

            <div className="accordion pt-5 mt-5 Acc">
                <div className="accordion-item Acc">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                aria-controls="panelsStayOpen-collapseTwo">
                            <h3 className={"col"}>객실 및 인원 선택</h3>
                            <div className={"col-md-1"}>성인 : {count} </div>
                            <div className={"col-md-1"}>어린이 : {childCount}</div>
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                        <div className="accordion-body ">

                            <div className={"container"}>
                                <div className={"row"}>
                                    <button className={"col-auto"} onClick={minusBtn}>
                                        인원수 감소
                                    </button>
                                    <div className={"col-auto"}>
                                        <h4>어른 : {count}</h4>

                                    </div>
                                    <button className={"col-auto"} onClick={plusBtn}>
                                        인원수 증가
                                    </button>
                                </div>

                                <div className={"row"}>
                                    <button className={"col-auto"} onClick={cdMinusBtn}>
                                        인원수 감소
                                    </button>
                                    <div className={"col-auto"}>
                                        <h4>아이 : {childCount}</h4>
                                    </div>
                                    <button className={"col-auto"} onClick={cdPlusBtn}>
                                        인원수 증가
                                    </button>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                aria-controls="panelsStayOpen-collapseOne">
                            유의 사항
                        </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                        <div className="accordion-body">
                            <strong>호텔 이용안내</strong>
                            <ul className={""}>
                                <li>요금에는 10% 부가가치세가 부과됩니다.</li>
                                <li>2인 1실 기준</li>
                                <li>체크인 시 등록카드 작성 및 투숙객 본인 확인을 위해 본인 사진이 포함된 신분증을 반드시 제시해 주시기 바랍니다.</li>
                                <li>13세 이하 어린이는 객실 인원 추가 요금을 받지 않습니다.</li>
                                <li>37개월 미만 유아는 조식이 무료입니다.</li>
                                <li>안내견을 제외한 애완견 등 동물 입장은 불가합니다.</li>
                                <li>부모를 동반하지 않은 만 19세 미만 미성년자는 투숙할 수 없습니다. (청소년 보호법 30조/58조)</li>
                                <li>상기 요금은 할인 요금이며, 중복 할인은 적용되지 않습니다.</li>
                                <li>자세한 객실안내는 02-2230-0700로 문의 바랍니다.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReservationPageDetail;