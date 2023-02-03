import React from 'react';

const styles = {
    cardBox: {
        height: "550px"
    }
}

function MyBookingSchedule() {
    return (
        <div>
            <div className={"container"}>
                <div className={"row justify-content-center p-5"}>
                    <div className="card text-center col-md-11 p-0 border-dark">
                        <div className="card-header border-dark bg-white"> ~ 님 | No. ~</div>
                        <div className="card-body" style={styles.cardBox}>
                            <h5 className="card-title">예약 확인</h5>
                            {/*<div  className="card-text"></div>*/}
                            <div className={"container p-3"}>

                                <table className={"table table-hover"}>
                                    <thead>
                                    <tr>
                                        <th>예약 날짜</th>
                                        <th>예약 인원</th>
                                        <th>Check In</th>
                                        <th>Check Out</th>
                                        <th>결제 금액</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>2</td>
                                        <td>3</td>
                                        <td>4</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={5}>조회된 예약 없음.</td>
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div className="card-footer text-muted border-dark bg-white">&nbsp;</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyBookingSchedule;