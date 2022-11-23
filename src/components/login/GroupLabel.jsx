import React from 'react'
import { InputForm } from '../../style-components/login/Components'

const Label = ({textP, placeholder, type}) => {
  return (
    <label htmlFor={type}>
      <p className="font-medium text-slate-700 pb-2">{textP}</p>
      <InputForm id={type} name={type} type={type} placeholder={placeholder} />
    </label>
  )
}

export default Label