import React from "react";
import { StyledTitulo,StyledParrafo} from "../../style-components/public/Components";

export const TituloInicio=()=> {
    return(
        <StyledTitulo>
            <br/>
            Agendav
        </StyledTitulo>   
    )
};

export const TextInicio=()=>{
    return(
        <StyledParrafo>
            <br/>
            <br/>                                                            
            Es una aplicación en la cuál se puede agendar todas las actividades que necesite recordar.<br/> 
            <br/>
            A través de este servicio podrá recordar todas las citas relevantes.<br/>
        </StyledParrafo>
    )
};