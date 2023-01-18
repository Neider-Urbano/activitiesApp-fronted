import styled from 'styled-components';
import tw from "twin.macro";

/*--------------------------------------------Styled Contenido de pagina------------------------------------------------------------------------------------------*/
export const StyledPagePublic=styled.div`
    ${tw`
    container lg:mx-auto 
    `}
`;
/*--------------------------------------------------capa externa Styled navbar--------------------------------------------------------------------------------------------*/
export const StyledNav=styled.div`
    ${tw`
    hidden border-b-blue-900 border-4 fixed w-full border-gray-200 px-0 py-0 dark:bg-black bg-gradient-to-bl from-[#bd1582] to-[#aba6d7] 
    `}
`;
export const StyledContenedor=styled.div`
    ${tw`
    flex h-full w-full justify-between border-8 border-red-700
    `}
`;
export const StyledItems=styled.div`
    ${tw`
    hidden md:flex items-center border-8 border-orange-800
    `}
`;
//Styled Item--------------------------------------------------------------------------------------------------------------------------------------------------- 
export const ContenedorDeItemNav=styled.div`
    ${tw` 
    border-8 border-amber-600
    `}
`;
export const UlItemNav=styled.ul`
    ${tw` 
    text-[20px] font-serif mt-2 border border-gray-100 rounded-lg md:text-[25px] lg:text-[28px] md:mt-0 md:font-black md:border-0 xl:mx-24
    `}
`;
export const LiDeItemNav=styled.li`
    ${tw` 
    text-[20px] font-serif mt-2 border border-gray-100 rounded-lg md:text-[25px] lg:text-[28px] md:mt-0 md:font-black md:border-0
    `}
`;
//Styled Icono--------------------------------------------------------------------------------------------------------------------------------------------------
export const ContenedorDeItem=styled.div`
    ${tw` 
    flex items-center border-8 border-black
    `}
`;
export const ContenedorDeIconoNav=styled.div`
    ${tw`
    hidden md:flex items-center 
    `}
`;
export const IconoDelNav=styled.img`
    ${tw`
    flex items-center h-7 mx-1 mt-2 md:h-14 md:mx-2 lg:h-16 lg:mx-3
    `}
`;
//Styled Logo-------------------------------------------------------------------------------------------------------------------------------------------------- 
export const ContenedorStyledLogoAgendav=styled.div`
    ${tw`
    flex items-center bg-green-500
    `}
`;
export const StyledImagenLogo=styled.img`
    ${tw`
    h-[3vh] bg-transparent ml-2 md:h-[5vh] 
    `}
`;

/*--------------------------------------------------------------------Interfaz del cuerpo---------------------------------------------------------------------*/
export const CapaExternaInterfaz=styled.div`
    ${tw`
    flex h-[90vh] w-screen md:h-[80vh] lg:h-[65vh] items-center xl:h-screen 
    `}
`;
export const ContenedorSinFooter=styled.div`
    ${tw`
    flex w-full justify-center bg-gray-200 opacity-70 lg:opacity-90 mt-[30%] md:mt-[35%] lg:mt-[5%]
    `}
`;
export const ContenedorInteractivo=styled.div`
    ${tw`
    flex flex-col mx-5 md:h-[60%] md:w-[70%] lg:h-[80%] lg:w-[80%] space-y-9 lg:space-y-7
    `}
`;
//Texto interfaz
//TITULO------------------------------------------------------ 
export const StyledTitulo=styled.div`
    ${tw`
    inline py-3 order-first
    `}
`;
export const Titulo=styled.h1`
    ${tw`
    text-[20px] font-black font-serif tracking-wide text-rose-600 text-center md:text-[25px] md:tracking-widest lg:text-[30px]
    `}
`;
//Parrafo interfaz------------------------------------------------------
export const StyledParrafo=styled.div`
    ${tw`
    container inline order-2
    `}
`;
export const Parrafo=styled.p`
    ${tw`
    text-[10px] md:text-[13px] lg:text-[16px] font-normal text-gray-500 lg:text-gray-700
    `}
`;
//Botones Login and register interfaz--------------------------------------
export const ContenedorButtonsInicio=styled.div`
    ${tw`
    flex justify-between order-last lg:justify-center
    `}
`;
export const StyledContenedorButtonsInicio=styled.div`
    ${tw`
    inline my-1 
    `
    }
`
export const StyledButtonInicio=styled.button`
    ${tw`
    text-[16px] md:text-[21px] lg:text-[25px] text-white bg-rose-600 hover:cursor-pointer hover:bg-rose-900 transition duration-500 transform hover:scale-90 focus:ring-1 focus:ring-red-900 rounded-lg h-[4vh] w-[40vw] md:w-[30vw] lg:w-[25vw] lg:mx-2 lg:h-[6vh]
    `
    }
`
//Contenedor Imagen principal----------------------------------------------
export const ContenedorImagenPrincipal=styled.div`
    ${tw`
    container md:flex md:justify-center order-3 
    `}
`;
//Imagen principal
export const StyledImagenPrincipal=styled.img`
    ${tw`
    h-[40vh] w-[40vw] lg:h-[35vh] lg:w-[35vw]
    `}
`;
/*----------------------------------------------------------------Footer--------------------------------------------------------------------------------------*/
export const CapaExternaFooter=styled.div`
    ${tw`
    flex w-screen mb-2 border-0 
    `
    }
`
export const ContenedorDelFooter=styled.div`
    ${tw`
    container flex w-full justify-center bg-black 
    `
    }
`
export const ContenedorInterfazFooter=styled.div`
    ${tw`
    flex flex-col mt-2 ml-0 md:mt-7 lg:mt-10 w-full px-4 text-white
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
export const ContenedorBotonFooter=styled.div`
    ${tw`
    hidden md:flex md:w-44 md:pt-0
    `
    }
`
//BOTON ABOUT US FOOTER---------------------------------------
export const BotonFooter=styled.button`
    ${tw`
    hidden w-full text-[11px] md:text-[15px] lg:text-[20px] md:flex md:items-center md:bg-red-600 md:justify-center md:text-center md:rounded-lg md:shadow md:px-10 md:py-3 transition duration-500 md:hover:bg-red-400 
    `
    }
`
export const ContenedorNavBarFooter=styled.div`
    ${tw`
    flex flex-col mt-4 md:mt-5 lg:mt-7
    `
    }
`
export const NavBarDelFooter=styled.div`
    ${tw`
    flex flex-row md:mt-8 md:mb-12 md:text-[15px] justify-between
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
export const ContenedorDeCards=styled.div`
    ${tw`
    flex space-x-2 md:space-x-4 lg:space-x-6 justify-center mb-[1%] mt-[1%] md:mt-[9%] 
    `
    }
`

//Formulario---------------------------------------------------------------------------------------------------------------------------------------------------
export const ContenedorDeFormulario=styled.div`
    ${tw`
    container
    `
    }
`
export const ContenedorFirstAndLastName=styled.div`
    ${tw`
    grid gap-6 mb-6 md:grid-cols-2 
    `
    }
`
//Input and label FIRST NAME-------------------------------------
export const LabelFirstName=styled.label`
    ${tw`
    block mb-2 text-sm font-medium text-gray-300 dark:text-white    `
    }
`
export const InputFirstName=styled.input`
    ${tw`
    bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500    `
    }
`
//Input and label LAST NAME-------------------------------------
export const LabelLastName=styled.label`
    ${tw`
    block mb-2 text-sm font-medium text-gray-300 dark:text-white
    `
    }
`
export const InputLastName=styled.input`
    ${tw`
    bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
    `
    }
`
//Input and label SUBJECT--------------------------------
export const LabelSubject=styled.label`
    ${tw`
    block mb-2 text-sm font-medium text-gray-300 dark:text-white
    `
    }  
`
export const InputSubject=styled.input`
    ${tw`
    bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
    `
    }  
`
//Input and label EMAIL-------------------------------
export const LabelEmail=styled.label`
    ${tw`   
    block mb-2 text-sm font-medium text-gray-300 dark:text-white
    `
    }  
`
export const InputEmail=styled.input`
    ${tw`
    bg-gray-700 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
    `
    }
`
//BOTON SUBMIT--------------------------------------
export const Boton=styled.button`
    ${tw`
    text-white bg-blue-700 mt-2 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
    `
    }  
`