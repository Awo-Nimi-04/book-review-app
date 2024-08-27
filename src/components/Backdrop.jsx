import React from "react";
import ReactDOM from "react-dom";

const Backdrop = ({ onClose }) => {
  const handleBackdropClick = () => {
    onClose();
  };
  const content = (
    <div
      onClick={handleBackdropClick}
      className="fixed top-0 left-0 opacity-50 shadow-lg w-full bg-stone-900 z-10 min-h-screen"
    ></div>
  );
  return ReactDOM.createPortal(content, document.getElementById("backdrop"));
};

export default Backdrop;
