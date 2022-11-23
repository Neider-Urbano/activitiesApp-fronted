import React from 'react'
import { ButtonRegisterA } from '../../style-components/login/Components'

const ButtonRegister = ({textP, textSpan}) => {
  return (
    <p className="text-center">
        {textP}
        <ButtonRegisterA href="#">
            <span>{textSpan}</span>
        </ButtonRegisterA>
    </p>
  )
}

export default ButtonRegister