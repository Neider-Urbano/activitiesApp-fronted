import React from "react";
import Logotipo from "../../assets/images/public/logoApp2.png"
import { ContenedorStyledLogoAgendav,StyledImagenLogo } from "../../style-components/public/Components";

const Logo=()=> {
    return(
        <ContenedorStyledLogoAgendav>
            <StyledImagenLogo src={Logotipo} alt="logo agendav"/>
        </ContenedorStyledLogoAgendav>
    )
};
export default Logo;