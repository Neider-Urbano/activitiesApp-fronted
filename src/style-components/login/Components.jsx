
import styled from 'styled-components';
import tw from "twin.macro";

export const Main = styled.main`
    ${tw`
        antialiased bg-slate-200
    `}
`;

export const DivContenedor = styled.div`
    ${tw`
        max-w-lg mx-auto bg-white p-8 rounded-xl shadow shadow-slate-300
    `}
`;

export const Form = styled.form`
    ${tw`
        my-10
    `}
`;