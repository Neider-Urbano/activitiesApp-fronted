import React from 'react'
import { InputForm } from '../../style-components/login/Components'

const Label = ({placeholder, type,valueData, onInput, error}) => {
  return (
    <label htmlFor={type}>
      <InputForm id={type} name={type} type={type} placeholder={placeholder} 
        className={`${error ? "border-red-300" : "border-slate-200"}`}
        value={valueData} onChange={(e)=>onInput(e)}
      />
    </label>
  )
}

export default Label