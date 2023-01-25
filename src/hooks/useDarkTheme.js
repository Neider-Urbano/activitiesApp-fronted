import { useEffect, useState } from 'react';

const initialState = {
    "darkTheme":false,
    "textIdioma":"En"
}

export default function useDarkProvider() {
    const [optionPage, setOptionPage] = useState(initialState);
    const [refresh, setRefresh] = useState(null);

    const handleDarkTheme=()=>{
        const newObj=optionPage;
        newObj.darkTheme=!optionPage.darkTheme
        setOptionPage(newObj)
        setRefresh(true)
    }
    const handleTextIdioma=()=>{
        var valorTextIdioma="Es"
        if(optionPage.textIdioma==="Es") valorTextIdioma="En"
        const newObj=optionPage;
        newObj.textIdioma=valorTextIdioma
        setOptionPage(newObj)
        setRefresh(true)
    }

    function isValidObject(obj) {
        var valorResult=true
        for (var property in obj) {
            if(valorResult!==false){
                if(property==="darkTheme" && typeof obj[property]!=="boolean") valorResult=false
                else if(property==="textIdioma" && typeof obj[property]!=="string" && (obj[property]!=="En" && obj[property]!=="Es")) valorResult=false
            }
        }
        return valorResult;
    }

    useEffect(()=>{
        const optionPageLS=window.localStorage.getItem("optionPage");

        if(optionPageLS==null)  window.localStorage.setItem("optionPage",JSON.stringify(optionPage));

        else{
            try {
                if(refresh===null){
                    const obj=JSON.parse(optionPageLS)
                    var {darkTheme,textIdioma}=obj
                    if(!isValidObject(obj) || (darkTheme===undefined || textIdioma===undefined)){
                        window.localStorage.setItem("optionPage",JSON.stringify(optionPage));
                    }else{
                        const newObj=optionPage;
                        newObj.darkTheme=darkTheme;
                        newObj.textIdioma=textIdioma;
                        setOptionPage(newObj)
                    }
                    setRefresh(false)
                }
    
                else if(refresh===true){
                    window.localStorage.setItem("optionPage",JSON.stringify(optionPage));
                    setRefresh(false)
                }
            } catch (error) {
                window.localStorage.setItem("optionPage",JSON.stringify(optionPage));
            }
        }
    },[refresh])
  return [
    {
        optionPage
    },
    {
        handleDarkTheme,
        handleTextIdioma
    }
  ]
}