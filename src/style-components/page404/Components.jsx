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