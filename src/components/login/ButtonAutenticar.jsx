import React from "react";
import { Link } from "react-router-dom";
import { ButtonAutenticarStyle } from "../../style-components/login/Components";

const ButtonAutenticar = ({ textSpan, urlImg, nameAut }) => {
  return (
    <Link to={`/login/${nameAut}`} className="w-[45%]">
      <ButtonAutenticarStyle>
        <img src={urlImg} className="w-6 h-6" alt="" /> <span>{textSpan}</span>
      </ButtonAutenticarStyle>
    </Link>
  );
};

export default ButtonAutenticar;
