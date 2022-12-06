import React from "react";
import ItemNavBar from "../../components/Menu/ItemNavBar"
import logo from "../../assets/images/logo.png"
import search from "../../assets/icons/search.svg"
import menu from "../../assets/icons/menu.svg"
import { StyledNav,StyledContenedor,StyledItems } from "../../style-components/public/Components";
import IconoNavBar from "../../components/Menu/IconoNavBar";
import { StyledContenedorDeIconos } from "../../style-components/public/Components";

const NavBar=()=> {
    return(
        <StyledNav>     
            <StyledContenedor>
                <IconoNavBar icono={logo}/>
                <StyledItems>  
                    <ItemNavBar nombreDelItem="Home"/>
                    <ItemNavBar nombreDelItem="Sobre nosotros"/>
                    <ItemNavBar nombreDelItem="Contactenos"/>
                    <h1>Hola mundo desde el navbar</h1>  
                </StyledItems>
                <StyledContenedorDeIconos>
                    <IconoNavBar icono={search}/>
                    <IconoNavBar icono={menu}/>
                </StyledContenedorDeIconos>
            </StyledContenedor>        
        </StyledNav>   
    )
};
export default NavBar;