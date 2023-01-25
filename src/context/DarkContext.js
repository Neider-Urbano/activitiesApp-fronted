import { createContext } from 'react';
import React from 'react'
import useDarkProvider from '../hooks/useDarkTheme';

const DarkContext = createContext({});

const DarkProvider = (props) => {
    const { darkTheme, setDarkTheme } = useDarkProvider()
  return (
    <DarkContext.Provider value={{darkTheme,setDarkTheme}}>
        {props.children}
    </DarkContext.Provider>
  )
}

export default DarkProvider

