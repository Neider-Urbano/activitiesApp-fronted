import React,{ useRef } from "react";
import { ContenedorDeFormulario,ContenedorFirstAndLastName,ContenedorTextarea,LabelTextarea,InputTextarea,Boton} from "../../style-components/public/Components"
import LabelAndInput from "./LabelAndInput";
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';
 
export const FormMessage=()=> {
    const form = useRef();
    //swal para es un alert(ventana/dialogo)
    const sendEmail = (e) => {
        e.preventDefault();
        swal({
            title:"Tu comentario ha sido enviado con éxito",
            text:"Te responderemos en la brevedad",
            icon:"success",
            button:"aceptar"
        });

    emailjs.sendForm('service_3ej9qba', 'template_jfvfi0e', form.current, '_wMS5z3g6oZJTWS9t')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
    });
    }


    return(
        <div className="bg-gray-800">
            <div className="max-w-7xl h-5/6 pt-5 px-2 md:px-5 pb-2 xl:mx-auto bg-gray-800 border border-gray-700" id="contact">
                <div className="mb-5">
                    <h1 className="mb-5 text-[18px] md:text-[25px] lg:text-[30px] text-rose-600 font-black" id="formularioEmanuel">Contact</h1>
                    <h2 className="text-[15.5px] md:text-[20px] lg:text-[23px] text-rose-100" id="formularioNeider">Formulario de contacto</h2>
                    <hr className="md:border-2 border-gray-600"></hr>
                </div>
                <ContenedorDeFormulario>
                    <form ref={form} onSubmit={sendEmail}>
                        <ContenedorFirstAndLastName>
                            <LabelAndInput name="from_name"  nameLabel="Nombre"    idLabelInput={"first_name"} typeInput="text" placeHolderInput="juan" required/>
                            <LabelAndInput name="user_name"  nameLabel="Apellido"  idLabelInput={"last_name"} typeInput="text" placeHolderInput="Castro" required/>
                            <LabelAndInput name="asunto"     nameLabel="Asunto"       idLabelInput={"subjetct"} typeInput="tel" placeHolderInput="asunto..." required/>
                            <LabelAndInput name="user_email" nameLabel="Correo"   idLabelInput={"email"} typeInput="text" placeHolderInput="johnDoe@gmail.com" required/>
                        </ContenedorFirstAndLastName>
                        <ContenedorTextarea>
                            <LabelTextarea htmlFor="message">Mensaje</LabelTextarea>
                            <InputTextarea name="message" id="message" rows="4" placeholder="mensaje..."></InputTextarea>
                        </ContenedorTextarea>
                        <Boton type="submit">Enviar</Boton>
                    </form>
                </ContenedorDeFormulario>
            </div>
        </div>
    )
};
export default FormMessage;