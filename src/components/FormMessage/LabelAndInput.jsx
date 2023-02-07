import React from "react"
import { LabelFormMessage,InputFormMessage} from "../../style-components/public/Components"

const LabelInput=({textoDelInput,nameLabel,idLabelInput,typeInput,placeHolderInput})=>{
    return(
        <div>
            <LabelFormMessage htmlFor={idLabelInput}>{nameLabel}</LabelFormMessage>
            <InputFormMessage type={typeInput} id={idLabelInput} placeholder={placeHolderInput} required>{textoDelInput}</InputFormMessage>
        </div>
        )
}
export default LabelInput