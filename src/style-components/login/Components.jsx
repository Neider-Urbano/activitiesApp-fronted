
import styled from 'styled-components';
import tw from "twin.macro";

export const Main = styled.main`
    ${tw`
        antialiased bg-slate-200 py-[100px]
    `}
`;

export const DivContenedor = styled.div`
    ${tw`
        max-w-lg bg-white p-8 rounded-xl shadow shadow-slate-300
    `}
`;

export const Form = styled.form`
    ${tw`
        my-10 flex flex-col space-y-5
    `}
`;

export const InputForm = styled.input`
    ${tw`
        w-full py-3 border border-slate-200 rounded-lg px-3 focus:outline-none focus:border-slate-500 hover:shadow
    `}
`;

export const ButtonLoginAzul = styled.button`
    ${tw`
        w-full py-3 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center
    `}
`;

export const ButtonAutenticarStyle = styled.button`
    ${tw`
        w-full text-center py-3 my-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150
    `}
`;

export const ContenedorForgotPassword = styled.div`
    ${tw`
        flex flex-row justify-between
    `}
`;

export const ButtonRegisterA = styled.a`
    ${tw`
        text-indigo-600 font-medium inline-flex space-x-1 items-center
    `}
`;
