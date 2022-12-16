import React from "react";
import {TituloInicio,TextInicio} from "../../components/Menu/TextInicio";
import ButtonInicio from "../../components/Menu/ButtonInicio";
import {ContenedorButtonsInicio} from "../../style-components/public/Components";
import ImagenPrincipal from "../../components/Menu/ImagenPrincipal";
import { ContenedorInteractivo} from "../../style-components/public/Components";

const InterfazDelFondo=()=> {
    return(
        <div className="flex h-screen">
            <ContenedorInteractivo>
                <TituloInicio/>
                <TextInicio/>
                <ContenedorButtonsInicio>
                    <ButtonInicio nombreDelBoton="Login"/>
                    <ButtonInicio nombreDelBoton="Register"/>
                </ContenedorButtonsInicio>
            </ContenedorInteractivo>
            <ImagenPrincipal/>
        </div>
    )
};
export default InterfazDelFondo;