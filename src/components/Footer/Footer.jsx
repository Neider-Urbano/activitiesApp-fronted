import React from "react";
import { Link } from "react-router-dom";
import {CapaExternaFooter,ContenedorDelFooter,ContenedorInterfazFooter,ContenedorTituloFooter,TituloFooter,ContenedorTextoFooter,TextoFooter,
        ContenedorBotonFooter,BotonFooter,ContenedorNavBarFooter,NavBarDelFooter,ContenedorLogoFooter,ContenedorIconosNavBar,LineaHorizontalGris,
        CopyrightFooter
        } from "../../style-components/Footer/Components";
import {VectorLogo,VectorFacebook,VectorInstagram,VectorYoutube} from "./Vectores/Vectores";

const Footer=()=> {
    return(
        <CapaExternaFooter>
            <ContenedorDelFooter>
                <ContenedorInterfazFooter>
                    <ContenedorTituloFooter>
                        <TituloFooter>Necesitas ayuda? contactanos</TituloFooter>
                    </ContenedorTituloFooter>
                    <ContenedorTextoFooter>
                        <TextoFooter>Somos la empresa número uno lider en el mercado</TextoFooter>
                        <ContenedorBotonFooter>
                            <BotonFooter><Link to={"/Contact"}>Contact</Link></BotonFooter>
                        </ContenedorBotonFooter>
                    </ContenedorTextoFooter>
                    <ContenedorNavBarFooter>
                        <NavBarDelFooter>
                            <ContenedorLogoFooter>
                                <VectorLogo/>    
                            </ContenedorLogoFooter>
                            <Link to={"/Aboutus"} className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">About us</Link>
                            <Link className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">Why us</Link>
                            <ContenedorIconosNavBar>
                                <Link>
                                    <VectorFacebook/>                            
                                </Link>
                                <Link>
                                    <VectorInstagram/>    
                                </Link>
                                <Link to={"https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw"}>
                                    <VectorYoutube/>                      
                                </Link>
                            </ContenedorIconosNavBar>
                        </NavBarDelFooter>
                        <LineaHorizontalGris/>
                        <CopyrightFooter>Copyright © 2022 Neel</CopyrightFooter>
                    </ContenedorNavBarFooter>
                </ContenedorInterfazFooter>
            </ContenedorDelFooter>
        </CapaExternaFooter>
    )
}
export default Footer;