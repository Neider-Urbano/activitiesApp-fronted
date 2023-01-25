import React from "react";
import { Link } from "react-router-dom";
import { ContenedorForgotPassword } from "../../style-components/login/Components";

const DivForgotPassword = ({ textA }) => {
  return (
    <ContenedorForgotPassword>
        <Link to="/forgotpassword" className="text-indigo-600 font-normal text-[15.5px] hover:font-medium">
          {textA}
        </Link>
    </ContenedorForgotPassword>
  );
};

export default DivForgotPassword;
