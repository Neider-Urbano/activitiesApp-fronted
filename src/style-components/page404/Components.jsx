import styled from 'styled-components';
import tw from "twin.macro";

export const DivPrincipal=styled.div`
    ${tw`
        h-screen w-full flex flex-col justify-center items-center bg-[#1A2238]
    `}
`;

export const TitleH1=styled.h1`
    ${tw`
        text-9xl font-extrabold text-white tracking-widest
    `}
`;

export const DivUno=styled.div`
    ${tw`
        bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute
    `}
`;

export const AUno=styled.a`
    ${tw`
        relative inline-block text-sm font-medium text-[#FF6A3D] active:text-orange-500 focus:outline-none focus:ring
    `}
`;

export const SpanUno=styled.span`
    ${tw`
        absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#FF6A3D] group-hover:translate-y-0 group-hover:translate-x-0
    `}
`;

export const SpanDos=styled.span`
    ${tw`
        relative block px-8 py-3 bg-[#1A2238] border border-current
    `}
`;