import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {AuthorityCheck} from "../../functiontocheck/FunctionToCheck";


//문의 게시글의 정보를 가진 컴포넌트
function InquiryItem(props) {
    // const styleColor = () =>{
    //     if(props.data.inquiryStatus === "Y"){
    //
    //     }}

    const [goNum, setGoNum] = useState(0);
    const [title, setTitle] = useState("");
    const [inquiryId, setInquiryId] = useState("");
    const [memberId, setMemberId] = useState(props.memberInfo.memberId);
    const [memberRole, setMemberRole] = useState(props.memberInfo.memberRole);

    // 문의글들이 불러와질때
    useEffect(() => {
        setMemberId(props.memberInfo.memberId);
        setMemberRole(props.memberInfo.memberRole);
        setGoNum(props.data.inquiryNum);
        setInquiryId(props.data.inquiryUserName);


        // hidden 속성에 문의글과 유저아이디의 이름이 맞지않을시 비밀글 처리
        if (props.data.inquiryHidden === "Y" && props.data.inquiryUserName !== memberId) {

            if (memberRole != "ADMIN") {
                setTitle("비밀글입니다.");
            } else {
                setTitle(props.data.inquiryTitle);
            }
        } else {
            setTitle(props.data.inquiryTitle);
        }

    }, []);


    const navi = useNavigate();

    // 문의 글을 클릭했을시 발동
    const onClickHandler = () => {

        // 비밀글은 열람 불가
        if (title === "비밀글입니다.") {
            alert("비밀글은 볼수없습니다.")
        } else {
            if (props.data.inquiryHidden === "Y") {
                if (sessionStorage.getItem("token") != null) {
                    // 현재 가진 토큰이 만료인지 확인 만료일시
                    if (AuthorityCheck() === false) {
                        alert("토큰 만료.")
                        navi("/login")
                        //     만료가 아니면 상세글 페이지로 이동
                    } else {
                        navi(`/qa/list/detail?idx=${goNum}`);
                    }
                }
            } else {
                navi(`/qa/list/detail?idx=${goNum}`);
            }
        }
    }


    return (

        <tr key={props.data.inquiryNum} onClick={onClickHandler} style={{cursor: "pointer"}}>
            <td>{props.data.inquiryHotelName}</td>
            <td className={"text-start"}>{title}</td>
            <td>{inquiryId.replace(inquiryId.substring(3), '***')}</td>
            <td>{props.data.inquiryCreateDate}</td>
            <td>{props.data.inquiryStatus}</td>
        </tr>
    );
}

export default InquiryItem;