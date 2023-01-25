import React from "react";
import { ContenedorDeFormulario,ContenedorFirstAndLastName,ContenedorTextarea,LabelTextarea,InputTextarea,Boton} from "../../style-components/public/Components"
import LabelAndInput from "./LabelAndInput"
 
export const FormMessage=()=> {
    return(
        <ContenedorDeFormulario>
            <form>
                <ContenedorFirstAndLastName>
                    <LabelAndInput idLabelInput={"first_name"} typeInput="text" placeHolderInput="juan" required>nombre</LabelAndInput>
                    <LabelAndInput idLabelInput={"last_name"} typeInput="text" placeHolderInput="Castro" required>Apellido</LabelAndInput>
                    <LabelAndInput idLabelInput={"subjetct"} typeInput="tel" placeHolderInput="asunto..." required>Asunto</LabelAndInput>
                    <LabelAndInput idLabelInput={"email"} typeInput="text" placeHolderInput="johnDoe@gmail.com" required>Correo</LabelAndInput>
                </ContenedorFirstAndLastName>
                <ContenedorTextarea>
                    <LabelTextarea htmlFor="message">Mensaje</LabelTextarea>
                    <InputTextarea id="message" rows="4" placeholder="mensaje..."></InputTextarea>
                </ContenedorTextarea>
                <Boton type="submit" >Enviar</Boton>
            </form>
        </ContenedorDeFormulario>
    )
};
