import React from 'react'
import { InputForm } from '../../style-components/login/Components'

const Label = ({textP, placeholder, type}) => {
  return (
    <label htmlFor={type}>
      <InputForm id={type} name={type} type={type} placeholder={placeholder} />
    </label>
  )
}

export default Label