import styled from "styled-components";
import tw from "twin.macro";

export const CapaExternaFooter=styled.div`
    ${tw`
    flex h-screen w-screen mb-2 items-end
    `
    }
`
export const ContenedorDelFooter=styled.div`
    ${tw`
    flex w-full pt-2 justify-center bg-black py-10 md:py-0
    `
    }
`
export const ContenedorInterfazFooter=styled.div`
    ${tw`
    flex flex-col md:w-2/3 w-full px-4 text-white
    `
    }
`
export const ContenedorTituloFooter=styled.div`
    ${tw`
    hidden md:flex md:w-full md:text-4xl md:font-bold
    `
    }
`
export const TituloFooter=styled.h1`
    ${tw`
    w-full md:w-2/3 md:text-lg
    `
    }
`
export const ContenedorTextoFooter=styled.div`
    ${tw`
    hidden md:flex md:flex-row md:mt-5 md:justify-between
    `
    }
`
export const TextoFooter=styled.p`
    ${tw`
    hidden md:flex w-full md:w-2/3 md:text-sm text-gray-400
    `
    }
`
export const ContenedorBotonFooter=styled.div`
    ${tw`
    hidden md:flex md:w-44 md:pt-0
    `
    }
`
export const BotonFooter=styled.a`
    ${tw`
    hidden md:flex md:items-center md:bg-red-600 md:justify-center md:text-center md:rounded-lg md:shadow md:px-10 md:py-3 md:hover:active:bg-red-400 
    `
    }
`
export const ContenedorNavBarFooter=styled.div`
    ${tw`
    flex flex-col
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
export const CopyrightFooter=styled.p`
    ${tw`
    w-full text-center my-8 text-gray-600
    `
    }
`



