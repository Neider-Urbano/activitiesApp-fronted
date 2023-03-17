import React from "react";
import { InputForm } from "../../style-components/login/Components";

const LabelPrimary = ({
  placeholder,
  type,
  valueData,
  onInput,
  error,
  name,
  darkTheme,
}) => {
  return (
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
  );
};

export default LabelPrimary;
