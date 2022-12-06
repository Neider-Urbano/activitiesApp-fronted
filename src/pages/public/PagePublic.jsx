import React from "react";
import NavBar from "../../containers/menu/NavBar";
import TextInicio from "../../components/Menu/TextInicio"

const a=10;


const PagePublic=()=>{
    const b=50;
    return(
        <div class="h-[100vh] bg-[#EAF4FF] rounded-t-3xl">
            <NavBar/>
            <TextInicio/>
               <div>
                    <p>Hola</p>        
                </div>
        </div>
    )
};
export default PagePublic;
