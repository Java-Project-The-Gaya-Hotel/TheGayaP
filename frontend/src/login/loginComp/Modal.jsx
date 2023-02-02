// Modal.js
import React, {useState} from "react";
import ModalStyle from "./ModalCss.css"
import axios from "axios";


function Modal(props) {

  function closeModal() {
    props.closeModal();
  }

  return (
    <div className={"Modal"}>
      <div className={"modalBody"}>
        <div>
          <div className={"mb-4"}>
            <h4>아이디 찾기</h4>
            <button id={"modalCloseBtn"} onClick={closeModal}>
              ✖
            </button>
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
}

export default Modal;
