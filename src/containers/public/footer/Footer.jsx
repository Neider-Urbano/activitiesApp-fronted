import {React} from "react";
import {CapaExternaFooter,ContenedorDelFooter,ContenedorInterfazFooter,ContenedorTituloFooter,TituloFooter,ContenedorTextoYBotonFooter,TextoFooter,
        ContenedorBotonFooter,BotonFooter,ContenedorNavBarFooter,NavBarDelFooter,ContenedorLogoFooter,ContenedorIconosNavBar,LineaHorizontalGris,
        } from "../../../style-components/public/Components";
import {VectorFacebook,VectorInstagram,VectorYoutube} from "./vectores/Vectores";
import Logo from "../../../assets/images/public/logoApp2.png";

const Footer=()=> {
    return(
        <CapaExternaFooter>
            <ContenedorDelFooter>
                <ContenedorInterfazFooter>
                    <ContenedorTituloFooter>
                        <TituloFooter>
                            Necesitas ayuda? contactanos
                        </TituloFooter>
                    </ContenedorTituloFooter>
                    <ContenedorTextoYBotonFooter>
                        <TextoFooter>Somos la empresa número uno lider en el mercado</TextoFooter>
                        <ContenedorBotonFooter>
                            <a href="#aboutUs2"><BotonFooter type="button">About us</BotonFooter></a>
                        </ContenedorBotonFooter>
                    </ContenedorTextoYBotonFooter>
                    <ContenedorNavBarFooter>
                        <NavBarDelFooter>
                            <ContenedorLogoFooter>
                                <img src={Logo} className="h-[35px] w-[50px] -mt-4 md:h-[5vh] md:w-[5vh] lg:h-[6vh] lg:w-[6vw]"></img>
                            </ContenedorLogoFooter>
                            <a href="#aboutUs2" className="text-[13px] md:text-[17px] lg:text-[22px] md:block cursor-pointer text-gray-600 hover:text-rose-600 uppercase">About us</a>
                            <a href="#contact" className="text-[13px] md:text-[17px] lg:text-[22px] md:block cursor-pointer text-gray-600 hover:text-rose-600 uppercase">Contact</a>
                            <ContenedorIconosNavBar> 
                                <a href="//www.facebook.com/profile.php?id=100075657317007" target="_self" title="Facebook">
                                    <button>
                                        <VectorFacebook/>                      
                                    </button>
                                </a>
                                <a href="//www.instagram.com/emanuelcarballal/" target="_self" title="Instagram">
                                    <button>
                                        <VectorInstagram/>                      
                                    </button>
                                </a>
                                <a href="//www.youtube.com/@neider-developments2355/videos" target="_self" title="Youtube">
                                    <button>
                                        <VectorYoutube/>                      
                                    </button>
                                </a>
                            </ContenedorIconosNavBar>
                        </NavBarDelFooter>
                        <LineaHorizontalGris/>
                    </ContenedorNavBarFooter>
                </ContenedorInterfazFooter>
            </ContenedorDelFooter>
        </CapaExternaFooter>
    )
}
export default Footer;