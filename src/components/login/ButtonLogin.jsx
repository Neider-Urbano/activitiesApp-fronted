import React from 'react'
import { ButtonLoginAzul } from '../../style-components/login/Components'

const ButtonLogin = ({textSpan,onActionForm}) => {
  return (
    <ButtonLoginAzul onClick={(e)=>onActionForm(e)}>
      {textSpan}
    </ButtonLoginAzul>
  )
}

export default ButtonLogin