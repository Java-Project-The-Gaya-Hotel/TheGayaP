// CancelPay.jsx
import React from "react";
import {default as Axios} from "axios";
const axios = Axios.create({
  baseURL: "http://ec2-13-125-220-237.ap-northeast-2.compute.amazonaws.com:8080"
});

function CancelPay() {

  const onClickCancel = () => {
    axios({
      url: "/payments/cancel", // 예: http://www.myservice.com/payments/cancel
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        merchant_uid: "{결제건의 주문번호}", // 주문번호
        cancel_request_amount: 2000, // 환불금액
        reason: "테스트 결제 환불", // 환불사유
        refund_holder: "홍길동", // [가상계좌 환불시 필수입력] 환불 수령계좌 예금주
        refund_bank: "97", // [가상계좌 환불시 필수입력] 환불 수령계좌 은행코드(예: KG이니시스의 경우 카카오페이는 97번)
        refund_account: "56211105948400" // [가상계좌 환불시 필수입력] 환불 수령계좌 번호
      }
    }).then(response => { // 환불 성공시 로직
      alert("환불 성공");
    }).catch(error => { // 환불 실패시 로직
      alert("환불 실패");
    });

  }



  return (
    <div>
      <button onClick={onClickCancel}>환불하기</button>
    </div>
  );
}

export default CancelPay;