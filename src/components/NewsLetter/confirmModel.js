import React from "react";

const ConfirmModal = ({ isOpen, onClose, message, type = "info" }) => {
  if (!isOpen) return null;

  const modalStyle = {
    success: "confirm-modal success",
    error: "confirm-modal error",
    info: "confirm-modal info",
  };

  return (
     <div className="custom-model">
      <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <p>{message}</p>
        <button className="primary-btn" onClick={onClose}>
          OK
        </button>
      </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
