import React from "react";
import "../dellMain/dellmainCss/FooterCss.css"
import {Link} from "react-router-dom";
import footerTitle from "../mainImg/footerTitle.svg"

const styles = {
    footerTitleImg: {
        width: "350px",
        height: "350px"
    }
}


function MainFooter() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row align-items-center">
                            <div className="col-md-6 col-lg-3 about-footer">
                                <div><Link to={"/"}><img style={styles.footerTitleImg} src={footerTitle}/></Link></div>
                            </div>

                            <div className="col-md-6 col-lg-2 page-more-info">
                                <div className="footer-title">
                                    <h4>Reference</h4>
                                </div>
                                <ul>
                                    <li><a href={"https://www.shillahotels.com/index.do"} target={"_blank"}>The SHILLA </a></li>
                                    <li><a href={"https://www.josunhotel.com/intro.do"} target={"_blank"}>Josun Hotel </a></li>
                                    <li><Link to={"https://www.google.com/"} target={"_blank"}>Google</Link></li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-3 page-more-info">
                                <div className="footer-title">
                                    <h4>Team - The Gaya</h4>
                                </div>
                                <ul>
                                    <li>Leader - 신현섭</li>
                                    <li>Front - 박예린, 황하늘</li>
                                    <li>Back - 신현섭, 정종율</li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-4 open-hours">
                                <div className="footer-title mb-5">
                                    <h4>Contact</h4>
                                    <ul className="footer-social">
                                        <li><a href="" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td><i className="far fa-clock"></i>The Gaya Hotel</td>
                                        <td>051-2222-3333</td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-clock"></i>The Gaya Stay</td>
                                        <td>051-0000-1111</td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-clock"></i>Service center</td>
                                        <td>051-5555-0111</td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-clock"></i></td>
                                        <td><small>Service Open Till 12:00am</small></td>
                                    </tr>
                                    </tbody>
                                </table>

                                <div className="footer-logo">

                                    <table>
                                        <tbody>
                                        <tr>

                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row">
                            <div className="col-sm-4">
                                <div></div>
                            </div>
                            <div className="col-sm-8">
                                <p>Team 4 Project - The Gaya Hotel - @ 2023 All rights reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default MainFooter;


