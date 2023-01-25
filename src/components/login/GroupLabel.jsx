import React from "react";
import { InputForm } from "../../style-components/login/Components";

const Label = ({ placeholder, type, valueData, onInput, error, name, darkTheme }) => {
  return (
    <label htmlFor={name} className="w-full">
      <InputForm
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={`${error ? "border-red-300" : "border-slate-200"}`}
        value={valueData}
        onChange={(e) => onInput(e)}
        darkTheme={darkTheme}
      />
    </label>
  );
};

export default Label;
