import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'

export const OptionPage = ({darkTheme, textIdioma, actionsOP}) => {
    const {handleDarkTheme,handleTextIdioma}=actionsOP;

    return (
        <div className="flex items-center space-x-2 w-full justify-end mb-5 lg:mb-10 px-[30px] md:px-[70px]">
            <FontAwesomeIcon icon={darkTheme ?  faSun : faMoon } color={darkTheme ? "#ffffff" : "#334155"} className="cursor-pointer" onClick={()=>handleDarkTheme()}/>
            <button className={`font-normal ${darkTheme ? "text-white" : "text-slate-700"}`} onClick={()=>handleTextIdioma()}>{textIdioma}</button> 
        </div>
  )
}
