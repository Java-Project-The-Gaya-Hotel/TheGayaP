import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {AuthorityCheck, GetMemberIdByToken} from "../../functiontocheck/FunctionToCheck";

//문의 게시글의 정보를 가진 컴포넌트
function InquiryItem(props) {

    const [goNum, setGoNum] = useState();
    const [title, setTitle] = useState();
    const [status, setStatus] = useState();
    const [inquiryId, setInquiryId] = useState();
    const [memberId, setMemberId] = useState(props.memberId);

    // 문의글들이 불러와질때
    useEffect(() => {
        // hidden 속성에 문의글과 유저아이디의 이름이 맞지않을시 비밀글 처리
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

    // 문의 글을 클릭했을시 발동
    const onClickHandler = () => {

        // 비밀글은 열람 불가
        if (title === "비밀글입니다.") {
            alert("비밀글은 볼수없습니다.")
        } else {
            // 현재 가진 토큰이 만료인지 확인 만료일시
            if (AuthorityCheck() === false) {
                alert("토큰 만료.")
                navi("/login")
            //     만료가 아니면 상세글 페이지로 이동
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