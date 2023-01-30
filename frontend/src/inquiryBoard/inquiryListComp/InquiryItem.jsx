import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


function InquiryItem(props) {

  const [goNum, setGoNum] = useState();
  const [title, setTitle] = useState();
  const [status, setStatus] = useState();

  useEffect(() => {
  setGoNum(props.data.inquiryNum);
  setTitle(props.data.inquiryTitle);
  setStatus(props.data.inquiryStatus);

  },[]);


  const navi = useNavigate();

const onClickHandler = () => {
//     컴포넌트를 하나 더만들어서 idx를 넘겨서 그 페이지가 보이게하기
//     쿼리스트링을 쓰기 주소값으로 url?페이지=goIdx
    navi(`/qa/list/detail?idx=${goNum}&title=${title}&status=${status}`);

}

    return (

        <tr key={props.data.inquiryNum} onClick={onClickHandler} style={{cursor:"pointer"}}>
            <td>{props.data.inquiryHotelName}</td>
            <td>{props.data.inquiryTitle}</td>
            <td>{props.data.inquiryUserName}</td>
            <td>{props.data.inquiryCreateDate}</td>
            <td>{props.data.inquiryStatus}</td>
        </tr>


    );
}

export default InquiryItem;