import React from "react";
import Logotipo from "../../assets/images/logo.png"

const Logo=()=> {
    return(
        <div>
            <img src={Logotipo} className="h-[5vh] rounded-tl-full ml-2 md:h-[7vh]" alt="logo agendav"/>
        </div>
    )
};
export default Logo;