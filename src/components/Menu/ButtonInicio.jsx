import React from "react";
import {StyledContenedorButtonsInicio, StyledButtonInicio } from "../../style-components/public/Components";
import { Link } from "react-router-dom";

const ButtonsInicio=({nombreDelBoton})=> {
    return(
        <StyledContenedorButtonsInicio>
            <StyledButtonInicio>
                <Link to={nombreDelBoton}>{nombreDelBoton}</Link>
            </StyledButtonInicio>
        </StyledContenedorButtonsInicio>
    )
};
export default ButtonsInicio;