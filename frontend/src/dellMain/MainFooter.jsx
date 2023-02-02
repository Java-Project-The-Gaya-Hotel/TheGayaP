import React from "react";
import "../dellMain/dellmainCss/FooterCss.css"
import {Link} from "react-router-dom";


const styles = {
    headerTitle: {
        width: "350px", height: "100px"
    }
}


function MainFooter() {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 about-footer">
                                <h3> The Gaya Hotel </h3>

                            </div>
                            <div className="col-md-6 col-lg-2 page-more-info">
                                <div className="footer-title">
                                    <h4>Links</h4>
                                </div>
                                <ul>
                                    <li><Link to={"/reservation"}>Reservation</Link></li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-3 page-more-info">
                                <div className="footer-title">
                                    <h4>More Info</h4>
                                </div>
                                <ul>
                                    <li><a href="#">Lorem ipsum</a></li>
                                    <li><a href="#">Dolor sit amet</a></li>
                                    <li><a href="#">Consectetur Adipisicing </a></li>
                                    <li><a href="#">Ed do eiusmod tempor incididunt</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6 col-lg-4 open-hours">
                                <div className="footer-title">
                                    <h4>Open hours</h4>
                                    <ul className="footer-social">
                                        <li><a href="" target="_blank"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="" target="_blank"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="" target="_blank"><i className="fab fa-linkedin-in"></i></a></li>

                                    </ul>
                                </div>
                                <table className="table">
                                    <tbody>
                                    <tr>
                                        <td><i className="far fa-clock"></i>Monday Thursday</td>
                                        <td>09:00am - 05:00pm</td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-clock"></i>Friday</td>
                                        <td>09:00am - 04:00pm</td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-clock"></i>Sturday</td>
                                        <td>09:00am - 01:30pm</td>
                                    </tr>
                                    <tr>
                                        <td><i className="far fa-clock"></i>Sunday</td>
                                        <td>09:30am - 12:00pm</td>
                                    </tr>
                                    </tbody>
                                </table>
                                <hr/>
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
                                <a href="">Privacy policy</a>
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


