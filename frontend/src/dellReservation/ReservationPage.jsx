import React from "react";
import RoutesLayout from "../dellMain/RoutesLayout";
import MainFooter from "../dellMain/MainFooter";
import "../dellReservation/dellReservCss/BreadCrumb.css"

const styles = {
    a: {
        color: "#96c03d",
        textDecoration: "none",
    },
    section:{

    }
}

function ReservationPage() {
    return (
        <div>
            {/*header*/}
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

                <div>
                    호텔 날짜, 인원 선택
                </div>

                <div>
                    선택 줄
                </div>

                <div>
                    예약을 원하는 호텔 날짜, 인원 선택(선택 시 table 보이기)
                </div>
            </div>

            {/*footer*/}
            <div>
                <MainFooter/>
            </div>


        </div>)
}

export default ReservationPage;