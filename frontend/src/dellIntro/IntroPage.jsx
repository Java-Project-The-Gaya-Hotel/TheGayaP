import React, {useEffect} from "react";
import {Link, Outlet} from "react-router-dom";


function IntroPage() {

    return (

        <div className={"container"}>
            <div className={"d-flex "}>
                <div className={"col-2"}>
                    <nav className={"p-3 grid bg-opacity-10 bg-secondary mt-5"}>
                        <h3>호텔 소개</h3>
                        <ul>
                            <li className="nav-item">
                                <Link to={"/welcome"} className={"nav-link  mb-2"} aria-current="page">개요</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"seoul"} className={"nav-link mb-2"}>서울 가야호텔</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"jeju"} className={"nav-link mb-2"}>제주 가야호탤</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"stay"} className={"nav-link mb-2"}>가야 스테이</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className={"col-12"}>
                    <Outlet/>
                </div>
            </div>
        </div>


    )
}

export default IntroPage;
