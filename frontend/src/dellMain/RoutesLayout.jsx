import React, {useEffect, useState} from 'react';
import {Outlet, Link} from "react-router-dom";
import MainLogo from "../mainImg/headerTitle.svg"
import "./dellmainCss/LayoutCss.css"
import Menucon from "../mainImg/icons8-key.svg"
import MainFooter from "./MainFooter";
import login from "../login/Login";

const styles = {
    TitleImgSize: {
        width: "500px",
        height: "40px"
    },
    HrHidden: {
        visibility: "hidden",
        margin: "0px"
    },
    LiFont: {
        fontSize: "13px"
    }
}

function RoutesLayout(props) {

    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        let login ;

        if (localStorage.getItem("token") != null) {
            login = true;
        } else {
            login = false
        }
        setIsLogin(login);

    },[])

    const logout = () => {
        if(window.confirm("로그아웃 하시겠습니까?")){
            localStorage.removeItem("token");
            window.location.href="/";
        }

    }

    useEffect(()=>{
        console.log("토큰 정보")
    },[]);


    return (
        <div>
            <div id="mainNavigation">
                <nav role="navigation">
                    <div style={styles.LiFont}>
                        <ul className={"row row-cols-auto justify-content-end text-center px-5 pt-2"}>
                            <li className={"col"}>{
                                isLogin ? <div onClick={logout}>Log out</div> : <Link to={"/login"}>login</Link>
                            }</li>
                            <li className={"col"}><Link to={"/join"}>Join Us</Link></li>
                            <li className={"col"}><Link to={"/mypage"}>My Page</Link></li>
                        </ul>
                    </div>
                    <hr style={styles.HrHidden}/>
                    <div className="text-center border-bottom border-opacity-25 pb-2">
                        <img style={styles.TitleImgSize} src={MainLogo} alt="" className="invert"/>
                    </div>
                </nav>
                <div className="navbar-expand-md">
                    <div className="navbar-dark text-center my-2">
                        <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                            {/*<span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>*/}
                            <span><img src={Menucon}/> </span> <span
                            className="align-middle text-dark fw-bold">Menu</span>
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
                                <Link to={"/qa"} className="nav-link">Menu 3</Link>
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