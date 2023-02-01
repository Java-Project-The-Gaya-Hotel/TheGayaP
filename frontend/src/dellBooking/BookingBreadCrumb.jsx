import React from "react";
import "../dellBooking/dellBookingCss/BreadCrumb.css"



// pageRouting & 조건문 사용해 active 시켜야 함.
function BookingBreadCrumb() {
    return (
        <div>
            <p className={"pt-4 pb-4"}></p>

            <div className={"pt-4 pb-4 mt-5 mb-5"}>
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
        </div>
    )
}

export default BookingBreadCrumb