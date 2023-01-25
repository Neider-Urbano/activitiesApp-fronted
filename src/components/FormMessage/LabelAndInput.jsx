import React from "react"
import { LabelFormMessage,InputFormMessage} from "../../style-components/public/Components"

const LabelInput=({idLabelInput,typeInput,placeHolderInput})=>{
    return(
        <div>
            <LabelFormMessage htmlFor={idLabelInput}>Nombre</LabelFormMessage>
            <InputFormMessage type={typeInput} id={idLabelInput} placeholder={placeHolderInput} required/>
        </div>
        )
}
export default LabelInput