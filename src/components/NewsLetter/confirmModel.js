import React from "react";

const ConfirmModal = ({ isOpen, onClose, message, type = "info" }) => {
  if (!isOpen) return null;

  const modalStyle = {
    success: "confirm-modal success",
    error: "confirm-modal error",
    info: "confirm-modal info",
  };

  return (
     <div className="custom-model custom-model-last">
      <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
       <button class="cancil-btn"  onClick={onClose} ><img alt="cross" src="../images/cross.svg"/></button>

      </div>
      <div className="birdss">
         <img src="../images/justfory.png"/> 
         <img src="../images/tmpas.png"/> 
       </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
