// FindResv.jsx
import React, {useState} from "react";
import axios from "axios";
import Modal from "./Modal";

function FindResv(props) {

  function closeModal() {
    props.closeModal();
  }

  return (
    <div>


      <button onClick={closeModal} className={"btn btn-primary mt-4"}>확인</button>
    </div>
  );
}

export default FindResv;