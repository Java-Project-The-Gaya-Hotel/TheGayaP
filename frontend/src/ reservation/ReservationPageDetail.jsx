import React, {useEffect, useState} from "react";
import RoutesLayout from "../dellMain/RoutesLayout";
import MainFooter from "../dellMain/MainFooter";
import "../dellReservation/dellReservCss/BreadCrumb.css"
import Swal from "sweetalert2";


function ReservationPageDetail() {
    const [count, setCount] = useState(2);
    const [childCount, setChildCount] = useState(0);
    const [personnel, setPersonnel] = useState(2)

    const peopleChange = () => {



        setPersonnel(count + childCount);
        console.log(personnel);
    }

    // const counts = () => {
    //
    //     if (personnel < 4) {
    //
    //         Swal.fire({
    //             icon: 'info',
    //             title: '확인해주세요!',
    //             text: ' 인원 수는 4명까지 선택할 수 있습니다. ',
    //             footer: '<a href=""> 고객문의 안내는 여기로 </a>'
    //         })
    //
    //         setPersonnel(personnel => Math.max(4))
    //     }
    // }


    //
    useEffect(() => {
        if (personnel > 4 ) {
            Swal.fire({
                icon: 'info',
                title: '확인해주세요!',
                text: ' 인원 수는 4명까지 선택할 수 있습니다. ',
                footer: '<a href=""> 고객문의 안내는 여기로 </a>'
            });

                setPersonnel(Math.max(4))

        }
    },[personnel])


    const plusBtn = () => {
        // setCount(count + 1 < 5 ? count + 1 : 4)
        setCount( personnel+1 < 5 ?  count +1 : count)

        setPersonnel(count + childCount);

        if(personnel > 4){
          setCount(prevState => prevState);
            setPersonnel(4);
            // setCount((count)=>Math.max(4))

        }

    }

    const minusBtn = () => {
        setCount(count - 1 > 1 ? count - 1 : 1)
    }

    const cdPlusBtn = () => {
        // setChildCount(childCount + 1 < 4 ? childCount + 1 : 3);
        setChildCount( personnel+1 < 5 ?  childCount +1 : childCount)

        setPersonnel(count + childCount);

        if(personnel > 4){
            setChildCount(prevState => prevState);
            setPersonnel(4);
        }
    }
    const cdMinusBtn = () => {
        setChildCount(childCount - 1 > 0 ? childCount - 1 : 0)
    }



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
                                <h3>객실 및 인원 선택</h3>
                                <div>객실</div>
                                <div> 총 인원 : </div>
                                <div>성인 : {count} </div>
                                <div>어린이 : {childCount}</div>
                                <div className={"row"}>
                                    <button className={"col"} onClick={minusBtn}>
                                        인원수 감소
                                    </button>
                                    <div className={"col"}>
                                        <input value={count} onChange={peopleChange}/>


                                    </div>
                                    <button className={"col"} onClick={plusBtn}>
                                        인원수 증가
                                    </button>
                                    <button className={"col"} onClick={cdMinusBtn} >
                                        인원수 감소
                                    </button>
                                    <div className={"col"}>
                                        <h4>아이 : {childCount}</h4>
                                    </div>
                                    <button className={"col"} onClick={cdPlusBtn} >
                                        인원수 증가
                                    </button>
                                </div>

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