// PaymentTest.jsx

import React, { useEffect } from 'react';

function PaymentTest() {

  useEffect(() => {
    const jquery = document.createElement("script");
    jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
    const iamport = document.createElement("script");
    iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
    document.head.appendChild(jquery);
    document.head.appendChild(iamport);
    return () => {
      document.head.removeChild(jquery); document.head.removeChild(iamport);
    }
  }, []);


  const onClickPayment = () => {
    /* 1. 가맹점 식별하기 */
    const { IMP } = window;
    IMP.init('imp73778403');

    /* 2. 결제 데이터 정의하기 */
    const data = {
      pg: 'html5_inicis',                           // PG사
      pay_method: 'card',                           // 결제수단
      merchant_uid: `${new Date().getTime()}`,   // 주문번호
      amount: 100,                                 // 결제금액
      name: '결제 테스트',                  // 주문명
      buyer_name: '홍길동',                           // 구매자 이름
      buyer_tel: '01012341234',                     // 구매자 전화번호
      buyer_email: 'example@example',               // 구매자 이메일
    };

    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }

  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const {
      success,
      merchant_uid,
      error_msg,
    } = response;

    if (success) {
      alert('결제 성공');
    } else {
      alert(`결제 실패: ${error_msg}`);
    }
  }

  return (
    <div>
      <button onClick={onClickPayment}>결제하기</button>
    </div>
  );
}

export default PaymentTest;













//
// const PaymentTest = (effect, deps) => {
//   useEffect(() => {
//     const jquery = document.createElement("script");
//     jquery.src = "https://code.jquery.com/jquery-1.12.4.min.js";
//     const iamport = document.createElement("script");
//     iamport.src = "https://cdn.iamport.kr/js/iamport.payment-1.1.7.js";
//     document.head.appendChild(jquery);
//     document.head.appendChild(iamport);
//     return () => {
//       document.head.removeChild(jquery); document.head.removeChild(iamport);
//     }
//   }, []);
//
//   const onClickPayment = () => {
//     const { IMP } = window;
//     IMP.init('imp73778403'); // 결제 데이터 정의
//     const data = {
//       pg: 'html5_inicis', // PG사
//       // pay_method: 'card', // 결제수단
//       merchant_uid: `${new Date().getTime()}`, // 주문번호
//       name: '결제 테스트', // 주문명
//       amount: '100', // 금액
//       custom_data: { name: '부가정보', desc: '세부 부가정보' },
//       buyer_name: '홍길동', // 구매자 이름
//       buyer_tel: '01012341234',                     // 구매자 전화번호
//       buyer_email: 'example@example',               // 구매자 이메일
//     };
//     IMP.request_pay(data, callback);
//   }
//
//   const callback = (response) => {
//     const {success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status} = response;
//     if (success) {
//       alert('결제 성공');
//     } else {
//       alert(`결제 실패 : ${error_msg}`);
//     }
//   }
//
//
//   return (
//     <div>
//       <button onClick={onClickPayment}>결제하기</button>
//       <button onClick={testBtn}>테스트</button>
//     </div>
//   );
// }
//
// export default PaymentTest;