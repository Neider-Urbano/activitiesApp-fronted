import styled from 'styled-components';
import tw from "twin.macro";
//Pongo la dirección relativa del componente al cuál están conectados los estilos.
//menu
//menu/textAndTittleInicio.jsx------------------------------------------------------ 
export const StyledTitulo=styled.div`
    ${tw`
    inline py-3 
    `}
`;
export const Titulo=styled.h1`
    ${tw`
    text-[20px] font-black font-serif tracking-wide text-rose-600 text-center md:text-[25px] md:tracking-widest lg:text-[30px]
    `}
`;
//menu/textAndTittleInicio.jsx------------------------------------------------------
export const StyledParrafo=styled.div`
    ${tw`
    container inline 
    `}
`;
export const Parrafo=styled.p`
    ${tw`
    text-[10px] md:text-[13px] lg:text-[16px] font-normal text-gray-500 lg:text-gray-700 
    `}
`;
//----------------------------------------------------Footer--------------------------------------------------------------------------------------*/
/*containers/public/footer/Footer.jsx-----------------------!---------------Footer--------------------------------------------------------------------------------------*/
export const CapaExternaFooter=styled.div`
    ${tw`
    flex bg-black py-4
    `
    }
`
export const ContenedorDelFooter=styled.div`
    ${tw`
    flex w-full max-w-7xl xl:mx-auto
    `}
`
export const ContenedorInterfazFooter=styled.div`
    ${tw`
    flex flex-col mt-2 mb-2  w-full px-5 text-white border-0 
    
    `
    }
`
export const ContenedorTituloFooter=styled.div`
    ${tw`
    hidden md:flex md:w-full md:font-bold 
    `
    }
`
export const TituloFooter=styled.h1`
    ${tw`
    w-full md:w-2/3 text-[15px] md:text-[20px] lg:text-[25px]
    `
    }
`
export const ContenedorTextoYBotonFooter=styled.div`
    ${tw`
    hidden md:flex md:flex-row md:mt-5 md:justify-between
    `
    }
`
export const TextoFooter=styled.p`
    ${tw`
    hidden md:flex w-full md:w-2/3 text-[13px] md:text-[17px] lg:text-[22px] text-gray-400 
    `
    }
`
//BOTON ABOUT US FOOTER---------------------------------------
export const ContenedorBotonFooter=styled.div`
    ${tw`
    hidden md:flex md:w-44 md:pt-0 
    `
    }
`
export const BotonFooter=styled.button`
    ${tw`
    hidden w-full text-[11px] md:text-[15px] lg:text-[20px] md:flex md:items-center md:bg-red-600 md:justify-center md:text-center md:rounded-lg md:shadow md:px-10 md:py-3 transition duration-500 md:hover:bg-red-400 
    `
    }
`
/*----------------------------------------------NavBar del Footer-------------------------------------------------------------------------------*/
export const ContenedorNavBarFooter=styled.div`
    ${tw`
    flex flex-col   
    `
    }
`
export const NavBarDelFooter=styled.div`
    ${tw`
    flex flex-row mt-5 mb-5 md:text-[15px] justify-between
    `
    }
`
export const ContenedorLogoFooter=styled.div`
    ${tw`
    
    `
    }
`
export const ContenedorIconosNavBar=styled.div`
    ${tw`
    flex flex-row space-x-8 items-center justify-between
    `
    }
`
export const LineaHorizontalGris=styled.hr`
    ${tw`
    border-gray-600
    `
    }
`
//Formulario-!------------------------------------------------------------------------------------------------------------------------------------------------
//components/formMessage/FormMessage.jsx----------------------------------
export const ContenedorDeFormulario=styled.div`
    ${tw`
    container
    `
    }
`
export const ContenedorFirstAndLastName=styled.div`
    ${tw`
    grid gap-6 mb-6 md:grid-cols-2 
    `}
`
//Input and label FormMessage------------------------------------
export const LabelFormMessage=styled.label`
    ${tw`
    block mb-2 text-sm font-medium text-gray-300 dark:text-white xl:text-[20px]
    `}
`
export const InputFormMessage=styled.input`
    ${tw`
    bg-gray-700 border border-gray-300 text-gray-300 text-sm xl:font-light xl:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500    
    `}
`
//Textarea del form message
export const ContenedorTextarea=styled.div`
    ${tw`
    
    `}
`
export const LabelTextarea=styled.label`
    ${tw`
    block mb-2 text-sm font-medium text-gray-300 dark:text-white xl:text-[20px]
    `}
` 
export const InputTextarea=styled.textarea`
    ${tw`
    block p-2.5 w-full text-sm text-gray-300 bg-gray-700 font-light rounded-lg xl:text-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-700 
    `}
` 

//BOTON SUBMIT--------------------------------------
export const Boton=styled.button`
    ${tw`
    text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center xl:px-10 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
    `
    }  
`

//-------------------------------------------------------------Card --!---------------------------------------------------------------------------------
//container/public/CardAboutUs.jsx--------------------------------------
export const ContenedorDeCards=styled.div`
    ${tw`
    flex space-x-4 md:space-x-6 lg:space-x-14 justify-center bg-gray-900 py-5 
    `
    }
`
//components/AboutUs/CardAboutUs.jsx-------------------------------------
export const ContenedorExternoCard=styled.div`
    ${tw`
    w-full md:w-56 max-w-sm border rounded-lg shadow-2xl bg-gray-900 border-gray-500 hover:bg-[rgb(17, 28, 45)]
    `}
`
export const ContenedorInternoCard=styled.div`
    ${tw`
    flex flex-col items-center pt-5 pb-5 md:pb-10
    `}
`
export const ImageCard=styled.img`
    ${tw`
    w-24 h-24 mb-3 rounded-full md:w-40 md:h-40 border border-gray-800
    `}
`
export const TittleCard=styled.h5`
    ${tw`
    mb-1 text-[13px] md:text-[15px] lg:text-[17px] font-medium text-white text-center
    `}
`
export const TextCard=styled.span`
    ${tw`
    text-[10px] md:text-[13px] lg:text-[16px] text-gray-500 dark:text-gray-300
    `}
`
export const ContenedorBotonesCard=styled.div`
    ${tw`
    hidden md:flex mt-4 space-x-3 md:mt-6
    `}
`