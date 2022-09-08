import React, { HTMLAttributes } from "react";
import "./button.css";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  /** Which is a special button!! */
  variant: "primary" | "secondary" | "success" | "danger";

  /** Provide a text for the button */
  children: string;

  disabled: boolean;
}

/** This is a special button!!! */
function Button({
  children,
  disabled,
  variant = "primary",
  ...props
}: ButtonProps) {
  //const { variant = "primary", children, ...rest } = props;
  return (
    <button className={`button ${variant}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
