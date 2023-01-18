import React from "react";
import RoutesLayout from "../dellMain/RoutesLayout";
import MainFooter from "../dellMain/MainFooter";
import "../dellReservation/dellReservCss/BreadCrumb.css"


function ReservationPageDetail() {
    return (
        <div>
            <div>
                <RoutesLayout/>
            </div>
            <p className={"pt-5 pb-5"}></p>
            {/*main*/}
            <div className={"container"}>
                {/*브레드 크럼*/}

                <div className={"pt-5 pb-5 mt-5 mb-5"}>
                    <section>
                        <nav>
                            <ol className="cd-multi-steps text-top">
                                <li className="visited"><a href="#0">Cart</a></li>
                                <li className="visited"><a href="#0">Billing</a></li>
                                <li className="current"><em>Delivery</em></li>
                                <li><em>Review</em></li>
                            </ol>
                        </nav>
                    </section>
                </div>
                <div className="accordion " id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                               객실 1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                             data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                               옵션 사항
                            </div>
                        </div>
                    </div>
                </div>

                <div className="accordion Acd pt-5 mt-5" id="accordionPanelsStayOpenExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true"
                                    aria-controls="panelsStayOpen-collapseOne">
                                유의 사항
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show"
                             aria-labelledby="panelsStayOpen-headingOne">
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
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false"
                                    aria-controls="panelsStayOpen-collapseTwo">
                             취소 및 환불 규정
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse"
                             aria-labelledby="panelsStayOpen-headingTwo">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default,
                                until the collapse plugin adds the appropriate classes that we use to style each
                                element. These classes control the overall appearance, as well as the showing and hiding
                                via CSS transitions. You can modify any of this with custom CSS or overriding our
                                default variables. It's also worth noting that just about any HTML can go within
                                the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <MainFooter/>
            </div>
        </div>
    )
}

export default ReservationPageDetail;