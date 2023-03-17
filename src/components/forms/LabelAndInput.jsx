import React from "react"
import { LabelFormMessage,InputFormMessage} from "../../style-components/public/Components"

const LabelInput=({textoDelInput,nameLabel,idLabelInput,typeInput,placeHolderInput,name})=>{
    return(
        <div>
            <LabelFormMessage htmlFor={idLabelInput}>{nameLabel}</LabelFormMessage>
            <InputFormMessage name={name} type={typeInput} id={idLabelInput} placeholder={placeHolderInput} required>{textoDelInput}</InputFormMessage>
        </div>
        )
}
export default LabelInput;