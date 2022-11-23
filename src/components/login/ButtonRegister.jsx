import React from 'react'
import { ButtonRegisterA } from '../../style-components/login/Components'

const ButtonRegister = ({textP, textSpan}) => {
  return (
    <p className="text-center">
        {textP}
        <ButtonRegisterA href="#">
            <span>{textSpan}</span>
            <span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
            </span>
        </ButtonRegisterA>
    </p>
  )
}

export default ButtonRegister