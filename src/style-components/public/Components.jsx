import styled from 'styled-components';
import tw from "twin.macro";

/*Styled navbar public*/
export const StyledNav=styled.div`
    ${tw`
    border-gray-200 px-2 py-2 md:py-3 dark:bg-black rounded-t-[5vh] bg-gradient-to-br from-[#4534e2] to-[#aba6d7]
    `}
`;
export const StyledContenedor=styled.div`
    ${tw`
    container flex justify-between 
    `}
`;
export const StyledContenedorDeIconos=styled.div`
    ${tw` 
    flex 
    `}
`;
export const StyledItems=styled.div`
    ${tw`
    hidden md:flex md:mt-4 
    `}
`;


/*text public*/
export const StyledTitulo=styled.h1`
    ${tw`
    block text-3xl font-semibold tracking-normal text-[#4534e2] text-center md:text-4xl md:tracking-widest
    `}
`;
export const StyledParrafo=styled.p`
    ${tw`
    block text-[#8c82ec] font-normal text-lg md:text-xl 
    `}
`;


//Botones de inicio
export const StyledContenedorButtonsInicio=styled.div`
    ${tw`
    flex flex-col my-3 md:my-5
    `
    }
`
export const StyledButtonInicio=styled.button`
    ${tw`
    text-[#e0dfe7] bg-[#6a5ce5] hover:cursor-pointer hover:bg-[#6a5ce589] focus:ring-1 focus:ring-gray-500 m-2 rounded-lg px-7 py-1 md:px-10 md:py-2 
    `
    }
`


/*page public*/
export const StyledPagePublic=styled.div`
    ${tw`
    bg-gradient-to-bl from-red-100 to-indigo-200 rounded-t-3xl 
    `}
`;
export const ContenedorButtonsInicio=styled.div`
    ${tw`
    inline 
    `}
`;
export const ContenedorInteractivo=styled.div`
    ${tw`
    flex flex-col mt-5 space-y-4 md:space-y-10 md:h-[50%] md:w-[50%] mx-5 md:mx-12 md:my-10 lg:h-[60%] lg:w-[40%] 
    `}
`;

export const ContenedorImagenPrincipal=styled.div`
    ${tw`
    hidden md:flex md:mt-20 md:h-[35%] md:w-[50%] lg:h-screen lg:w-[60%] lg:mt-0
    `}
`;



