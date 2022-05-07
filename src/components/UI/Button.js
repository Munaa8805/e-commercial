import React from "react";
import classes from "./button.module.css";
const Button = props => {
  return (
    <button
      type={props.type}
      className={`${classes.button} ${classes[props.btnType]}`}
    >
      {props.text}
    </button>
  );
};

export default Button;
