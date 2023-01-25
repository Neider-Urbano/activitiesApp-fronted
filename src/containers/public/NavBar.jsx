import React from "react";
import {ItemNavBar,IconoNavBar,Logo} from "../../components/Menu/index.js";
import { StyledNav,StyledContenedor,StyledItems,ContenedorDeItem } from "../../style-components/public/Components";
import search from "../../assets/icons/search.svg";
import menu from "../../assets/icons/menu.svg";

const NavBar=()=> {
    return(
        <StyledNav>     
            <StyledContenedor>
                <Logo/>
                <StyledItems>  
                    <ItemNavBar nombreDelItem="Home"/>
                    <ItemNavBar nombreDelItem="About us"/>
                    <ItemNavBar nombreDelItem="Contact"/>
                </StyledItems>
                <ContenedorDeItem>
                    <IconoNavBar icono={search}/>
                    <IconoNavBar icono={menu}/>
                </ContenedorDeItem>
            </StyledContenedor>        
        </StyledNav>   
    )
};
export default NavBar;