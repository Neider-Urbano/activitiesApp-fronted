import React from "react";
import useDarkProvider from "../../hooks/useDarkTheme";
import notebook from "../../assets/images/public/notebook2.gif";
import Header from "../../components/header/Header";
import Buttons from "../../components/hero/Buttons"
import { OptionPage } from "../../components/optionPage/OptionPage";

const InterfazDelFondo=()=> {
    const [states,handles,t]=useDarkProvider()
    const {darkTheme,textIdioma}=states.optionPage
    return(
          <div>  
            <div>
              <div className={`flex h-[35px] pr-2 md:pr-5 ${darkTheme ? "bg-[#0C2751]" :" bg-white"}`}>
                <OptionPage darkTheme={darkTheme} textIdioma={textIdioma} actionsOP={handles}/>
              </div>
            </div>
            <div className="h-[5px] bg-indigo-900"/>
              <Header/> 
            <div className="pt-5 w-full bg-[#0C0631]">
              <div className={`hero bg-base-200 ${darkTheme ? "bg-gray-900" : "divLogin"}`} >
                <div className="hero-content min-h-max flex-col-reverse w-full lg:flex-row-reverse lg:mx-10 px-0">
                  <div className={`-mt-4 md:mt-0 w-full rounded-sm` }>
                    <h1 className={`flex text-xl md:text-5xl font-bold justify-center ${darkTheme ? "text-indigo-500" : "text-indigo-600"}`}>{t("interfaceText.tittle")}</h1> 
                    <br/>
                    <p className={`text-medium px-4 font-bold justify-center text-center ${darkTheme ? "text-white" : "text-slate-700"}`}>{t("interfaceText.subtitle")}</p>
                    <br/>
                    <Buttons/>
                  </div>
                  <img src={notebook} className="-mt-10 md:-mt-8 lg:-mt-4 xl:-mt-1 border-white border w-full md:block md:shadow-xl"/>
                </div>
              </div>
            </div>
        </div>
    )
};
export default InterfazDelFondo;