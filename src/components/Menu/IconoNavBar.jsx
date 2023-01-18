import React from "react";
import {ContenedorDeIconoNav,IconoDelNav} from "../../style-components/public/Components"


const IconoNavBar=({icono})=> {
    return(
        <ContenedorDeIconoNav>
            <IconoDelNav src={icono} alt="logo agendav"/>
        </ContenedorDeIconoNav>
    )
};
export default IconoNavBar;