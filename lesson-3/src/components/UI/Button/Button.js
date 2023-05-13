import react from "react";

import cl from "./Button.module.css";

function Button({ children, type, color }) {
  const propsStyles = {
    backgroundColor: color,
    color: color === "#FCFCFC" ? "black" : "white",
  };
  return (
    <button className={cl.button + " " + cl[type]} style={propsStyles}>
      {children}
    </button>
  );
}

export default Button;
