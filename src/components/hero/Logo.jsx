import React from "react";
import imagenLogo from "../../assets/images/public/logoApp2.png"

const Logo=()=> {
    return(
      <div>
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={imagenLogo} className="h-[30px] w-[50px]"></img>
          <span className="ml-3 text-xl ">Agendav</span>
        </a>
      </div>
    )
};
export default Logo;