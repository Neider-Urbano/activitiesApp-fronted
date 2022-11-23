import React from 'react'
import { ButtonLoginAzul } from '../../style-components/login/Components'

const ButtonLogin = ({textSpan}) => {
  return (
    <ButtonLoginAzul>
        <span>{textSpan}</span>
    </ButtonLoginAzul>
  )
}

export default ButtonLogin