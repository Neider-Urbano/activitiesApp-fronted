import React from "react";
import {TituloInicio,TextInicio,ButtonInicio,ImagenPrincipal} from "../../components/Menu/index.js";
import {ContenedorButtonsInicio,CapaExternaInterfaz,ContenedorInteractivo,ContenedorSinFooter} from "../../style-components/public/Components";

const InterfazDelFondo=()=> {
    return(
        <CapaExternaInterfaz>
            <ContenedorSinFooter>
                <ContenedorInteractivo>
                    <TituloInicio/>
                    <TextInicio/>
                    <ImagenPrincipal/>
                    <ContenedorButtonsInicio>
                        <ButtonInicio nombreDelBoton="Login"/>
                        <ButtonInicio nombreDelBoton="Register"/>
                    </ContenedorButtonsInicio>
                </ContenedorInteractivo>
            </ContenedorSinFooter>
        </CapaExternaInterfaz>
    )
};
export default InterfazDelFondo;