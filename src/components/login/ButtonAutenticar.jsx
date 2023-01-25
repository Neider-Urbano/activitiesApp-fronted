import React from "react";
import { Link } from "react-router-dom";
import { ButtonAutenticarStyle } from "../../style-components/login/Components";

const ButtonAutenticar = ({ textSpan, urlImg, nameAut, darkTheme }) => {
  return (
    <Link to={`/login/${nameAut}`} className="w-[47%]">
      <ButtonAutenticarStyle darkTheme={darkTheme}>
        <img src={urlImg} className="w-6 h-6" alt={`logo ${nameAut}`} /> <span>{textSpan}</span>
      </ButtonAutenticarStyle>
    </Link>
  );
};

export default ButtonAutenticar;
