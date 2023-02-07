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
          <button id={"modalCloseBtn"} onClick={closeModal}>
            ✖
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
