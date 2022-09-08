import "./input.css";

export interface InputProps {
  size?: "small" | "medium" | "large";
  placeholder?: string;
}

function Input({ size, placeholder, ...props }: InputProps) {
  return (
    <input className={`input ${size}`} placeholder={placeholder} {...props} />
  );
}

export default Input;
