import React from "react";
import { ButtonAzulPrimary } from "../../style-components/Buttons/Components";

const ButtonAzul = ({ textSpan, onActionForm, isDisabled }) => {
  return (
    <ButtonAzulPrimary onClick={(e) => onActionForm(e)} isDisabled={isDisabled}>
      {textSpan}
    </ButtonAzulPrimary>
  );
};

export default ButtonAzul;
