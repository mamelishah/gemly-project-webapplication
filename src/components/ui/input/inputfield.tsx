import type { RefObject } from "react";

import "./Inputfield.css";

interface InputFieldProps {
  inputRef?: RefObject<HTMLInputElement | null>;
  type: "text" | "password" | "email";
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  maxLength?: number;
  id: string;
  label: string;
}

function InputField({
  inputRef,
  type,
  placeholder,
  value,
  onChange,
  maxLength,
  id,
  label,
}: InputFieldProps) {
  return (
    <div className="input-field">
      {" "}
      <label htmlFor={id}>{label}</label>{" "}
      <input
        id={id}
        ref={inputRef}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={maxLength}
      />{" "}
    </div>
  );
}

export default InputField;
