import React from 'react';
import {Outlet, Link} from "react-router-dom";
import MainLogo from "../mainImg/headerTitle.svg"
import "./dellmainCss/LayoutCss.css"
import Menucon from "../mainImg/icons8-key.svg"
import MainFooter from "./MainFooter";

const styles = {
    TitleImgSize: {
        width: "300px",
        height: "40px"
    },
    HrHidden: {
        visibility: "hidden",
        margin: "0px"
    },
    LiFont:{
        fontSize:"13px"
    }
}

function RoutesLayout(props) {
    return (
        <div>
            <div id="mainNavigation">
                <nav role="navigation">
                    <div style = {styles.LiFont}>
                        <ul className={"row row-cols-auto justify-content-end text-center px-5 pt-1 pb-1"}>
                            <li className={"col"}> <Link to={"/login"}>{
                                1 === 1 ? <div> Login </div> : <div> Log Out </div>
                            }</Link></li>
                            <li className={"col"}><Link to={"/join"}><div>Join Us</div></Link></li>
                            <li className={"col"}><Link to={"/mypage"}><div>My Page</div></Link></li>
                        </ul>
                    </div>
                    <hr style={styles.HrHidden}/>
                    <div className="text-center border-bottom border-opacity-25 pb-3">
                        <img style={styles.TitleImgSize} src={MainLogo} alt="" className="invert"/>
                    </div>
                </nav>
                <div className="navbar-expand-md">
                    <div className="navbar-dark text-center">
                        <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                            {/*<span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>*/}
                            <span><img src={Menucon}/> </span> <span className="align-middle text-dark fw-bold">Menu</span>
                        </button>
                    </div>
                    <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto fw-bold">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/reservation"} className="nav-link">Booking</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/welcome"} className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/qa"} className="nav-link">Helpdesk</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Outlet/>
            <div>
                <MainFooter/>
            </div>

        </div>
    )

}

export default RoutesLayout;