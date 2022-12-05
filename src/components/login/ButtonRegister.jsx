import React from "react";
import { ButtonRegisterA } from "../../style-components/login/Components";

const ButtonRegister = ({ textP, textSpan, href }) => {
  return (
    <p className="text-center">
      {textP}
      <ButtonRegisterA to={`/${href}`}>
        <span>{textSpan}</span>
      </ButtonRegisterA>
    </p>
  );
};

export default ButtonRegister;
