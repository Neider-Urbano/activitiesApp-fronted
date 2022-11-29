import React from 'react'
import { Link } from 'react-router-dom'
import { ButtonAutenticarStyle } from '../../style-components/login/Components'

const ButtonAutenticar = ({textSpan, urlImg, nameAut}) => {
  return (
    <div className="my-5">
        <Link to={`/login/${nameAut}`}>
          <ButtonAutenticarStyle>
              <img src={urlImg} className="w-6 h-6" alt="" /> <span>{textSpan}</span>
          </ButtonAutenticarStyle>
        </Link>
    </div>
  )
}

export default ButtonAutenticar