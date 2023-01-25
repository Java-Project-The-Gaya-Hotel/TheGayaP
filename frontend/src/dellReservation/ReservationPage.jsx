import React from "react";
import RoutesLayout from "../dellMain/RoutesLayout";
import MainFooter from "../dellMain/MainFooter";
import "../dellReservation/dellReservCss/BreadCrumb.css"
import 'animate.css'
import ReservAccordion from "./ReservAccordion";


function ReservationPage() {
    return (
        <div>
            <p className={"pt-4 pb-4"}></p>

            <div className={"pt-4 pb-4 mt-5 mb-5 animate__animated animate__fadeInDown"}>
                <section>
                    <nav>
                        <ol className="cd-multi-steps text-top">
                            {/*<li className="visited"><a>01</a></li>*/}
                            {/*<li className="current"><em>02</em></li>*/}
                            <li><a> Reservation Condition </a></li>
                            <li><em>02</em></li>
                            <li><em>03</em></li>
                            <li><em>04</em></li>
                        </ol>
                    </nav>
                </section>
            </div>

            <h2 className={"text-center fw-bold pb-5"}> 예약 Page</h2>

            <div>
                {/*예약 메뉴 Line */}

                <ReservAccordion/>
            </div>

            {/*footer*/}
            <div>
                <MainFooter/>
            </div>


        </div>)
}

export default ReservationPage;