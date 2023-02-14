import styled from 'styled-components';
import tw from "twin.macro";

export const DivPrincipal=styled.div`
    ${tw`
        w-full flex flex-col justify-center items-center
    `} 
`;

export const TitleH1=styled.h1(({ darkTheme }) => [
    tw`text-9xl font-extrabold text-slate-700 tracking-widest`,
    darkTheme && tw`text-white`
]);

export const DivUno=styled.div`
    ${tw`
        bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute
    `}
`;



export const SpanDos=styled.span(({ darkTheme }) => [
    tw`px-8 py-3 bg-slate-700 mt-5 rounded-full cursor-pointer font-normal text-white hover:font-bold`,
    darkTheme && tw`bg-[#FF6A3D] text-[#1c1c1c]`
]);