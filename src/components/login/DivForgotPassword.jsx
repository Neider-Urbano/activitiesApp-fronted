import React from 'react'
import { ContenedorForgotPassword } from '../../style-components/login/Components'

const DivForgotPassword = ({textA, textInput}) => {
  return (
    <ContenedorForgotPassword>
        <div>
            <a href="#" className="font-medium text-indigo-600">{textA}</a>
        </div>
    </ContenedorForgotPassword>
  )
}

export default DivForgotPassword