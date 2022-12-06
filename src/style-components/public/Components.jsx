import styled from 'styled-components';
import tw from "twin.macro";


export const StyledNav=styled.div`
    ${tw`
    bg-[#D1CEEE] border-gray-200 sm:px-2 py-2 dark:bg-black rounded-t-[5vh]
    `}
`;

export const StyledContenedor=styled.div`
    ${tw`
    container flex justify-between
    `}
`;

export const StyledContenedorDeIconos=styled.div`
    ${tw` 
    flex mr-2
    `}
`;

export const StyledItems=styled.div`
    ${tw`
    hidden md:flex md:mt-2 
    `}
`;