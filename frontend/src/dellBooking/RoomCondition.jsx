import React from "react";


function RoomCondition(props) {
    return (
        <>
            <table>
                <h5> Room Condition </h5>
                <tr>
                    <th> 객실 조건</th>
                    <td><button>객실 상세보기(swal Event)</button></td>
                    <td> 요금</td>
                    <td><button> 예약하러</button></td>
                </tr>
            </table>
        </>
    )

}

export default RoomCondition;