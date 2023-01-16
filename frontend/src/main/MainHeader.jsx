import React from "react";
import MainTitle from "../mainImg/Title ver kingsman.png"
import {Link, Outlet} from "react-router-dom";

function MainHeader() {
    const styles={
        TitleImgSize:{
            width:"210px",
            height:"50px"
        }
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href = "#"><img src={MainTitle} style={styles.TitleImgSize} alt={""}/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu 2</a>
                        </li>
                    </ul>
                </div>
            </nav>

            <Outlet/>
        </div>
    )
}

export default MainHeader;