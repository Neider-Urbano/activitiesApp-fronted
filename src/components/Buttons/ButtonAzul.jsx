import React from "react";
import { ButtonAzulPrimary } from "../../style-components/Buttons/Components";

const ButtonAzul = ({ textSpan, onActionForm }) => {
  return (
    <ButtonAzulPrimary onClick={(e) => onActionForm(e)}>
      {textSpan}
    </ButtonAzulPrimary>
  );
};

export default ButtonAzul;
