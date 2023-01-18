import React from "react";
import { StyledTitulo,StyledParrafo,Titulo,Parrafo} from "../../style-components/public/Components";

export const TituloInicio=()=> {
    return(
        <StyledTitulo>
            <Titulo>
                Agenda de actividades
            </Titulo>
        </StyledTitulo>   
    )
};
export const TextInicio=()=>{
    return(
        <StyledParrafo>
            <Parrafo> 
                Es una aplicación en la cuál se puede agendar todas las actividades que necesite recordar.                                                            
                Es una aplicación en la cuál se puede agendar todas las actividades que necesite recordar. 
                <br/>
                <br/>
                A través de este servicio podrá recordar todas las citas relevantes.
            </Parrafo>
        </StyledParrafo>
    )
};