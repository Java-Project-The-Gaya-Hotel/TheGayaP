// FindResv.jsx
import React from "react";

function FindResv(props) {



    function closeModal() {
        props.closeModal();
    }


    return (
        <div>
            <h4 className={"my-4"}>예약 조회</h4>
            <table className={'table'}>
                <thead>
                <tr>
                    <th>예약 번호</th>
                    <th>호텔 이름</th>
                    <th>체크인</th>
                    <th>체크아웃</th>
                    <th>인원수</th>
                </tr>
                </thead>

                <tbody>
                <tr>
                    <td>{props.resvList.reservationNum}</td>
                    <td>{props.resvList.hotelName}</td>
                    <td>{props.resvList.reservationCheckIn}</td>
                    <td>{props.resvList.reservationCheckOut}</td>
                    <td>{props.resvList.reservationPeople}</td>
                </tr>
                </tbody>
            </table>

            <button onClick={closeModal} className={"btn btn-primary mt-4"}>확인</button>
        </div>
    );
}

export default FindResv;