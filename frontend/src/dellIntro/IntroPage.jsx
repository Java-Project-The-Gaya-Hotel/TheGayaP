import React from "react";
import MainFooter from "../dellMain/MainFooter";
import {Link, Outlet} from "react-router-dom";

function IntroPage() {
    return (
        <div className={"container"}>
            <div className={"row"}>
                <div className={"col-3"}>
                    <nav>
                        <ul>
                            <h4>호텔 소개</h4>
                            <hr className={"border-0"}/>
                            <div className={"container my-3"}>
                                <li><Link to={"/welcome"}>About The Gaya </Link></li><br/>
                                <li><Link to={"seoul"}>서울 가야 호텔</Link></li>
                                <li><Link to={"jeju"}>제주 가야 호텔</Link></li>
                                <li><Link to={"stay"}>가야 스테이</Link></li>
                            </div>
                        </ul>
                    </nav>
                </div>

                <div className={"col-9"}>
                    <Outlet/>
                </div>
            </div>
        </div>
    )
}

export default IntroPage;