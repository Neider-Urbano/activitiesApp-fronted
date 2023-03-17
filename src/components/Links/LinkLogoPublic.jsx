import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../assets/images/public/logoApp2.png";

const LinkLogoPublic = ({ darkTheme }) => {
  return (
    <Link to="/">
      <div className="flex flex-col items-center cursor-pointer">
        <img src={imgLogo} alt="logo app" className="h-[45px] w-[90px]" />
        <h1
          className={`font-medium text-lg ${
            darkTheme ? "text-indigo-500" : "text-slate-700"
          }`}
        >
          Activities App
        </h1>
      </div>
    </Link>
  );
};

export default LinkLogoPublic;
