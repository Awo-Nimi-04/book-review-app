import React from "react";
import ReactDOM from "react-dom";
import NavLinks from "./NavLinks";
import { CSSTransition } from "react-transition-group";

const SideDrawer = ({ show, onClick }) => {
  const content = (
    <CSSTransition
      in={show}
      timeout={1000}
      classNames={{
        enter: "-translate-x-full",
        enterActive: "translate-x-0 opacity-100 transition-all duration-1000",
        exit: "translate-x-0 opacity-100",
        exitActive: "-translate-x-full opacity-0 transition-all duration-1000",
      }}
      mountOnEnter
      unmountOnExit
    >
      <aside className="min-h-screen flex flex-col justify-center items-center fixed shadow-lg md:hidden z-50 bg-white w-[70%]">
        <nav className="h-40 flex flex-col justify-between">
          <NavLinks onClick={onClick} />
        </nav>
      </aside>
    </CSSTransition>
  );

  return ReactDOM.createPortal(content, document.getElementById("drawer-hook"));
};

export default SideDrawer;
