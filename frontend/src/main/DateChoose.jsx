import React from "react";
import MainDatePicker from "./MainDatePicker";

const styles = {
    selectCenter: {
        width: "300px",
        padding: "25px"
    },
    optionBox: {
        width: "125px",
        height: "30px",
        textAlign: "center"
    }
}


function DateChoose() {

    return (
        <div className={"container justify-content-center align-items-baseline"}>
            <div className={"row align-items-center p-3"}>
                <div className={"col"} style={styles.selectCenter}>
                    <select style={styles.optionBox}>
                        <option> Hotel</option>
                        <option> Stay</option>
                    </select>
                </div>

                <div className={"col"}>
                    <MainDatePicker/>
                </div>

                <div className={"col"}>
                    <div className={"container p-0 m-0"}>
                    <dt> 인원</dt>
                    <dd>
                        <button> ←</button> value <button> → </button>
                    </dd>
                    </div>
                </div>

                <div className={"col"}>
                    <button className={"btn btn-outline-dark"}> Reservation</button>
                </div>
            </div>
        </div>)
}

export default DateChoose