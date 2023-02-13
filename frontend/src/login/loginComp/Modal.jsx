// Modal.js
import React from "react";
import ModalStyle from "./ModalCss.css"



function Modal(props) {

  function closeModal() {
    props.closeModal();
  }

  return (
    <div className={"Modal"} onClick={closeModal}>
      <div className={"modalBody"} onClick={(e) => e.stopPropagation()}>
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
