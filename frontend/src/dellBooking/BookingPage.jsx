import React from "react";
import RoutesLayout from "../dellMain/RoutesLayout";
import MainFooter from "../dellMain/MainFooter";
import "../dellBooking/dellBookingCss/BreadCrumb.css"
// import 'animate.css'
import BookingAccordion from "./BookingAccordion";
import styled from "styled-components";


const CrumbAni = styled.div`
animation:fadeInUp;
animation-duration:0.8s;
`;

const H2Text = styled.div`
animation:fadeInUp;
animation-duration:1s;
`;

const BookAccodion = styled.div`
animation:fadeInUp;
animation-duration:1.5s;
`

function BookingPage() {


    return (
        <div>

            <CrumbAni className={"pt-2 pb-4  mb-5"}>
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
            </CrumbAni>

            <H2Text>
                <h2 className={"text-center fw-bold pb-5"}> 예약 Page</h2>
            </H2Text>


            <BookAccodion>
                {/*예약 메뉴 Line */}
                <BookingAccordion/>
            </BookAccodion>


        </div>)
}

export default BookingPage;