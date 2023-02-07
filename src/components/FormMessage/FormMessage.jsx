import React from "react";
import { ContenedorDeFormulario,ContenedorFirstAndLastName,ContenedorTextarea,LabelTextarea,InputTextarea,Boton} from "../../style-components/public/Components"
import LabelAndInput from "./LabelAndInput"
 
export const FormMessage=()=> {
    return(
        <ContenedorDeFormulario>
            <form>
                <ContenedorFirstAndLastName>
                    <LabelAndInput nameLabel="nombre" idLabelInput={"first_name"} typeInput="text" placeHolderInput="juan" required/>
                    <LabelAndInput nameLabel="Apellido" idLabelInput={"last_name"} typeInput="text" placeHolderInput="Castro" required/>
                    <LabelAndInput nameLabel="Asunto" idLabelInput={"subjetct"} typeInput="tel" placeHolderInput="asunto..." required/>
                    <LabelAndInput nameLabel="Correo" idLabelInput={"email"} typeInput="text" placeHolderInput="johnDoe@gmail.com" required/>
                </ContenedorFirstAndLastName>
                <ContenedorTextarea>
                    <LabelTextarea htmlFor="message">Mensaje</LabelTextarea>
                    <InputTextarea id="message" rows="4" placeholder="mensaje..."></InputTextarea>
                </ContenedorTextarea>
                <Boton type="submit">Enviar</Boton>
            </form>
        </ContenedorDeFormulario>
    )
};
