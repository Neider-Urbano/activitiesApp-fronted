import React from 'react'
import { ButtonAutenticarStyle } from '../../style-components/login/Components'

const ButtonAutenticar = ({textSpan, urlImg}) => {
  return (
    <div className="my-5">
        <ButtonAutenticarStyle>
            <img src={urlImg} className="w-6 h-6" alt="" /> <span>{textSpan}</span>
        </ButtonAutenticarStyle>
    </div>
  )
}

export default ButtonAutenticar