// Modal.js
import React from "react";
import ModalStyle from "./ModalCss.css"



function Modal(props) {

  function closeModal() {
    props.setModalOpen(false);
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
