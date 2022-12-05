import React from "react";
import { Link } from "react-router-dom";
import { ContenedorForgotPassword } from "../../style-components/login/Components";

const DivForgotPassword = ({ textA }) => {
  return (
    <ContenedorForgotPassword>
      <div>
        <Link to="/forgotpassword" className="font-medium text-indigo-600">
          {textA}
        </Link>
      </div>
    </ContenedorForgotPassword>
  );
};

export default DivForgotPassword;
