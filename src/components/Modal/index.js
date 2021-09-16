import React, { useState } from "react";
import { createPortal } from "react-dom";

const Modal = ({ children, activator }) => {
  const [show, setShow] = useState(false);

  const content = show && (
    <div className="fixed inset-0 z-30 flex justify-center lg:items-center">
      <span
        id="blackOverlay"
        className="absolute w-full h-full bg-black opacity-60"
      ></span>
      <div className="relative modal lg:w-2/6 sm:w-4/6 mn:w-11/12 mn:top-20">
        {React.cloneElement(children, { setShow })}
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {activator({ setShow })}
      {createPortal(content, document.body)}
    </React.Fragment>
  );
};
export default Modal;
