import React, {useState} from "react";
import MainDatePicker from "./MainDatePicker";
import {Link} from "react-router-dom";
import MainCounter from "./MainCounter";

const styles = {
    selectCenter: {
        width: "300px",
        padding: "25px"
    },
    optionBox: {
        width: "125px",
        textAlign: "center"
    },
    linkDecoLine: {
        textDecorationLine: "none",
        color: "inherit"
    }

}


function DateChoose(props) {
    //인원 수 count 함수


    return (
        <div className={"container justify-content-center align-items-baseline"}>
            <div className={"row align-items-center p-3"}>
                <div className={"col"} style={styles.selectCenter}>
                    <select style={styles.optionBox} className={"form-select form-select"}>
                        <option>Hotel</option>
                        <option>Stay</option>
                    </select>
                </div>

                <div className={"col"}>
                    <MainDatePicker/>
                </div>

                <div className={"col"}>
                    <div className={"container p-0 m-0"}>
                        <dt> 인원</dt>
                        <dd>
                            <MainCounter/>
                        </dd>
                    </div>
                </div>

                <div className={"col"}>
                    <button className={"btn btn-outline-dark"}><Link to='/menu1' style={styles.linkDecoLine}>Reservation</Link></button>
                </div>
            </div>
        </div>)
}

export default DateChoose