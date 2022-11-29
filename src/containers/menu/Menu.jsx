import React from "react";
import ItemsNavBar from "../../components/Menu/ItemsNavBar";
import { ContenedorDelMenu } from "../../style-components/public/Components";


const Menu = () => {
    return (
    
<ContenedorDelMenu>        
    <div class="bg-[#EAF4FF] h-[70vh] w-[60vw] rounded-3xl">
        <nav class="bg-[#D1CEEE] border-gray-200 sm:px-4 py-3 dark:bg-black ">
            <div class="container inline-flex md:h-auto md:w-auto">
                <div>
                    <img src="../../assets/images/logo.png" class="h-6 mr-3 sm:h-9" alt="Agendav Logo"/>
                </div>
                {/*items del navbar*/}
                <div class="w-auto md:flex from-purple-200" id="mobile-menu-language-select">
                    <ItemsNavBar nombreDelItem="Home"/>
                    <ItemsNavBar nombreDelItem="Sobre nosotros"/>
                    <ItemsNavBar nombreDelItem="Contactenos"/>  
                </div>          
                
            </div>
        </nav>
    </div>
</ContenedorDelMenu>  
    ) 
}

export default Menu;