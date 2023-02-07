// FindResv.jsx
import React from "react";

function FindResv(props) {

  function closeModal() {
    props.closeModal();
  }

  return (
    <div>
      <h4 className={"mb-4"}>예약 찾기</h4>

      <button onClick={closeModal} className={"btn btn-primary mt-4"}>확인</button>
    </div>
  );
}

export default FindResv;