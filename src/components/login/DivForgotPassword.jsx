import React from 'react'
import { ContenedorForgotPassword } from '../../style-components/login/Components'

const DivForgotPassword = ({textA, textInput}) => {
  return (
    <ContenedorForgotPassword>
        <div>
            <label htmlFor="remember" className="">
                <input type="checkbox" id="remember" className="w-4 h-4 border-slate-200 focus:bg-indigo-600" />
                    {textInput}
            </label>
        </div>
        <div>
            <a href="#" className="font-medium text-indigo-600">{textA}</a>
        </div>
    </ContenedorForgotPassword>
  )
}

export default DivForgotPassword