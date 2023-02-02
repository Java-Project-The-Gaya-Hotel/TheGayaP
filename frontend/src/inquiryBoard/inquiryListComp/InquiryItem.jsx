import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthorityCheck, GetMemberIdByToken} from "../../functiontocheck/FunctionToCheck";


function InquiryItem(props) {

    const [goNum, setGoNum] = useState();
    const [title, setTitle] = useState();
    const [status, setStatus] = useState();
    const [inquiryId, setInquiryId] = useState();
    const [memberId, setMemberId] = useState(props.memberId);

    useEffect(() => {
        if (props.data.inquiryHidden === "Y" && inquiryId !== memberId) {
            setTitle("비밀글입니다.");
        } else {
            setTitle(props.data.inquiryTitle);

        }
        setGoNum(props.data.inquiryNum);
        setStatus(props.data.inquiryStatus);
        setInquiryId(props.data.inquiryUserName);

    }, []);


    const navi = useNavigate();

    const onClickHandler = () => {
//     컴포넌트를 하나 더만들어서 idx를 넘겨서 그 페이지가 보이게하기
//     쿼리스트링을 쓰기 주소값으로 url?페이지=goIdx
        // 세션 스토리지의 토큰이 null이 아닐시

        if (title === "비밀글입니다.") {
            alert("비밀글은 볼수없습니다.")
        } else {
            if (AuthorityCheck() === false) {
                alert("토큰 만료.")
                navi("/login")
            } else {
                navi(`/qa/list/detail?idx=${goNum}&title=${title}&status=${status}`);
            }
        }
    }


    return (

        <tr key={props.data.inquiryNum} onClick={onClickHandler} style={{cursor: "pointer"}}>
            <td>{props.data.inquiryHotelName}</td>
            <td>{title}</td>
            <td>{inquiryId}</td>
            <td>{props.data.inquiryCreateDate}</td>
            <td>{props.data.inquiryStatus}</td>
        </tr>


    );
}

export default InquiryItem;