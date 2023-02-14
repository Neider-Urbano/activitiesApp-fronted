import React from 'react'
import { useNavigate } from 'react-router-dom';
import { OptionPage } from '../../components/optionPage/OptionPage';
import useDarkProvider from '../../hooks/useDarkTheme';
import { Main } from '../../style-components/login/Components';
import { DivPrincipal, DivUno, SpanDos, TitleH1 } from '../../style-components/page404/Components'

const Error404 = () => {
    const navigate = useNavigate();
    const [statesOP,actionsOP,t]=useDarkProvider() 
    const {darkTheme,textIdioma}=statesOP.optionPage;
    
    return (
        <Main className={`${darkTheme ? "darkTheme": "divLogin"}`}>
            <div className={`flex items-center min-w-[320px] min-h-[480px] max-w-[1500px] flex-col w-[100%]`}>
                <div className="my-[20px] w-full pr-[30px] md:my-[40px]">
                    <OptionPage darkTheme={darkTheme} textIdioma={textIdioma} actionsOP={actionsOP}/>
                </div>
                <DivPrincipal>
                    <TitleH1 darkTheme={darkTheme}> 404</TitleH1> 
                    <DivUno darkTheme={darkTheme}>
                        Page Not Found
                    </DivUno>
                    <SpanDos onClick={()=>navigate(-1)} darkTheme={darkTheme}>
                        {t("errors.go-back")}
                    </SpanDos>
                </DivPrincipal>
            </div>
        </Main>
    )
}

export default Error404