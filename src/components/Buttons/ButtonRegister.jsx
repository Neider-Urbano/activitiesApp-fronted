import React from "react";
import { ButtonRegisterA } from "../../style-components/login/Components";

const ButtonRegister = ({ textP, textSpan, href,darkTheme }) => {
  return (
    <p className={`text-center text-[15.5px] ${darkTheme ? "text-slate-400" : "text-slate-800"}`}>
      {textP}
      <ButtonRegisterA to={`/${href}`}>
        <span>{textSpan}</span>
      </ButtonRegisterA>
    </p>
  );
};

export default ButtonRegister;
