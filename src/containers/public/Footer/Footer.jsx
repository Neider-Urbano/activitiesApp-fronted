import React from "react";
import { Link } from "react-router-dom";
import {CapaExternaFooter,ContenedorDelFooter,ContenedorInterfazFooter,ContenedorTituloFooter,TituloFooter,ContenedorTextoYBotonFooter,TextoFooter,
        ContenedorBotonFooter,BotonFooter,ContenedorNavBarFooter,NavBarDelFooter,ContenedorLogoFooter,ContenedorIconosNavBar,LineaHorizontalGris,
        ContenedorDeCards
        } from "../../../style-components/public/Components";
import {VectorLogo,VectorFacebook,VectorInstagram,VectorYoutube} from "./Vectores/Vectores";
import CardAboutUs from "../../../components/Menu/CardAboutUs";
import ema from "../../../assets/images/public/ema.png"
import neider from "../../../assets/images/public/neider.png"
import FormMessage from "../../../components/FormMessage/FormMessage.jsx";

const Footer=()=> {
    return(
        <CapaExternaFooter>
            <ContenedorDelFooter>
                <ContenedorInterfazFooter>
                    <ContenedorTituloFooter>
                        <TituloFooter>Necesitas ayuda? contactanos</TituloFooter>
                    </ContenedorTituloFooter>
                    <ContenedorTextoYBotonFooter>
                        <TextoFooter>Somos la empresa número uno lider en el mercado</TextoFooter>
                        <ContenedorBotonFooter>
                            <BotonFooter type="button"><a href="#aboutUs">About us</a></BotonFooter>
                        </ContenedorBotonFooter>
                    </ContenedorTextoYBotonFooter>
                    <ContenedorNavBarFooter>
                        <NavBarDelFooter>
                            <ContenedorLogoFooter>
                                <VectorLogo/>    
                            </ContenedorLogoFooter>
                            
                            <a href="#aboutUs2" className="text-[13px] md:text-[17px] lg:text-[22px] md:block cursor-pointer text-gray-600 hover:text-rose-600 uppercase">About us</a>
                            <a href="#contact" className="text-[13px] md:text-[17px] lg:text-[22px] md:block cursor-pointer text-gray-600 hover:text-rose-600 uppercase">Contact</a>
                            
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
                    </ContenedorNavBarFooter>
                    <div className="max-h-max w-full pt-5 px-2 mt-2 mb-2 bg-gray-800 rounded-lg" id="aboutUs">
                        <h1 className="text-[13px] md:text-[25px] lg:text-[30px] text-rose-600" id="aboutUs2">About us</h1>
                        <hr className="md:border-2 border-gray-600"></hr>
                        <p>
                            <h3 className="text-[10px] md:text-[15px] lg:text-[25px] text-gray-400">
                                <br/>
                                Somos Neel, una empresa dedicada a la creación de páginas web. Nuestro compromiso
                                con el cliente es lo primero.<br/>
                                <br/> 
                            </h3>
                        </p>
                        <ContenedorDeCards>
                            <CardAboutUs imageCard={ema} nombre="Emanuel" apellido="carballal"/>
                            <CardAboutUs imageCard={neider} nombre="Neider" apellido="Urbano"/>
                        </ContenedorDeCards>
                    </div>
                    <div className="mx-1 mt-10 h-5/6 pt-5 px-2 mb-2 bg-gray-800 rounded-lg" id="contact">
                        <div className="mb-5">
                            <h1 className="mb-5 text-[13px] md:text-[25px] lg:text-[30px] text-rose-600">Contact</h1>
                            <h2 className="text-gray-200 text-[11px] md:text-[20px] lg:text-[23px]">Formulario de contacto</h2>
                            <hr className="md:border-2 border-gray-600"></hr>
                        </div>
                        <FormMessage/>
                    </div>    
                </ContenedorInterfazFooter>
            </ContenedorDelFooter>
        </CapaExternaFooter>
    )
}
export default Footer;