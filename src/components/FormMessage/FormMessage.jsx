import React from "react";
import { ContenedorDeFormulario,ContenedorFirstAndLastName,
    InputFirstName,
    LabelFirstName,InputLastName,
    LabelLastName,InputEmail,
    LabelEmail,InputSubject,
    LabelSubject,Boton} from "../../style-components/public/Components";

const FormMessage=()=> {
    return(
        <ContenedorDeFormulario>
            <form>
                <ContenedorFirstAndLastName>
                    
                    <div>
                        <LabelFirstName htmlFor="first_name">Nombre</LabelFirstName>
                        <InputFirstName type="text" id="first_name" placeholder="juan" required/>
                    </div>
                    
                    <div>
                        <LabelLastName htmlFor="last_name">Apellido</LabelLastName>
                        <InputLastName type="text" id="last_name" placeholder="Castro" required/>
                    </div>
                    
                    <div>
                        <LabelSubject htmlFor="subjetct">Asunto</LabelSubject>
                        <InputSubject type="tel" id="subject" placeholder="asunto..." pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    </div>
                    
                    <div>
                        <LabelEmail htmlFor="email">Correo</LabelEmail>
                        <InputEmail type="text" id="email" placeholder="johnDoe@gmail.com" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                    </div>

                    
                </ContenedorFirstAndLastName>
                <div>
                    <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-300 dark:text-white">Mensaje</label>
                    <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-700 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mensaje..."></textarea>
                </div>
                <Boton type="submit" >Enviar</Boton>
            </form>
        </ContenedorDeFormulario>
    )
};
export default FormMessage;