import React from 'react'
import { useNavigate } from 'react-router-dom';
import { AUno, DivPrincipal, DivUno, SpanDos, SpanUno, TitleH1 } from '../../style-components/page404/Components'

const Error404 = () => {
    const navigate = useNavigate();

    return (
        <DivPrincipal>
            <TitleH1> 404</TitleH1> 
            <DivUno>
                Page Not Found
            </DivUno>
            <button className="mt-5">
                <AUno className="group">
                    <SpanUno/>

                    <SpanDos onClick={()=>navigate(-1)}>
                        Go Home
                    </SpanDos>
                </AUno>
            </button>
        </DivPrincipal>
    )
}

export default Error404