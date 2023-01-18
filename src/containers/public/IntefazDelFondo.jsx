import React from "react";
import {TituloInicio,TextInicio,
        ButtonInicio,ImagenPrincipal} from "../../components/Menu/index.js";
import {ContenedorButtonsInicio,CapaExternaInterfaz,
        ContenedorInteractivo,ContenedorSinFooter} from "../../style-components/public/Components";

const InterfazDelFondo=()=> {
    return(
        <CapaExternaInterfaz className="container h-full w-full bg-no-repeat bg-contain bg-fixed bg-[url('https://raw.githubusercontent.com/emanuel3288/colarg/master/Frame%201PortadaAgendav.png')] xl:bg-cover">
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