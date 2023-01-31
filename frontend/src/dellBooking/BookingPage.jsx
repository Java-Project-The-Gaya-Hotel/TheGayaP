import React from "react";
import RoutesLayout from "../dellMain/RoutesLayout";
import MainFooter from "../dellMain/MainFooter";
import "../dellBooking/dellBookingCss/BreadCrumb.css"
// import 'animate.css'
import BookingAccordion from "./BookingAccordion";


function BookingPage() {
    return (
        <div>

            <div className={"pt-2 pb-4  mb-5 animate__animated animate__fadeInDown"}>
                <section>
                    <nav>
                        <ol className="cd-multi-steps text-top">
                            {/*<li className="visited"><a>01</a></li>*/}
                            {/*<li className="current"><em>02</em></li>*/}
                            <li className={"current fw-bold"}><a> Reservation Condition </a></li>
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

                <BookingAccordion/>
            </div>



        </div>)
}

export default BookingPage;