import React from 'react';
import {Outlet, Link} from "react-router-dom";
import MainLogo from "../mainImg/Title ver kingsman.png"
import "./dellmainCss/LayoutCss.css"

const styles = {
    TitleImgSize: {
        width: "180px",
        height: "50px"
    }
}

function RoutesLayout(props) {
    return (
        <div>
            <div id="mainNavigation">
                <nav role="navigation">
                    <div className="py-3 text-center border-bottom border-opacity-25">
                        <img style={styles.TitleImgSize} src={MainLogo} alt="" className="invert"/>
                    </div>
                </nav>
                <div className="navbar-expand-md">
                    <div className="navbar-dark text-center my-2">
                        <button className="navbar-toggler w-75" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span> <span className="align-middle">Menu</span>
                        </button>
                    </div>
                    <div className="text-center mt-3 collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav mx-auto ">
                            <li className="nav-item">
                                <Link to ={"/"} className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/menu1"} className="nav-link">Menu 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/menu1"} className="nav-link">Menu 2</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/menu1"} className="nav-link">Menu 3</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <Outlet/>
        </div>
    )

}

export default RoutesLayout;