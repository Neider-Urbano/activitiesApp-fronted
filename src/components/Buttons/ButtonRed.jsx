import React from "react";
import { ButtonRedPrimary } from "../../style-components/Buttons/Components";

const ButtonRed = ({ textSpan, onActionForm }) => {
  return (
    <ButtonRedPrimary onClick={(e) => onActionForm(e)}>
      {textSpan}
    </ButtonRedPrimary>
  );
};

export default ButtonRed;
