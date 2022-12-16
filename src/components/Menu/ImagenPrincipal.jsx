import React from "react";
import notebook from "../../assets/images/notebook.gif"
import { ContenedorImagenPrincipal } from "../../style-components/public/Components";

const ImagenPrincipal=()=>{
    return(
        <ContenedorImagenPrincipal>
            <img src={notebook} alt="notebook"></img>
        </ContenedorImagenPrincipal>
    )
};

export default ImagenPrincipal;