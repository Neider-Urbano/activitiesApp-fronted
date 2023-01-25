import styled from "styled-components";
import tw from "twin.macro";
import { Link } from "react-router-dom";

export const Main = styled.main`
  ${tw`
      overflow-auto h-[100vh]
    `}
`;

export const DivContenedor = styled.div`
  ${tw`
    flex justify-center flex-col bg-none w-[270px] md:w-[335px]
    `}
`;

export const Form = styled.form`
  ${tw`
        mt-3 flex flex-col space-y-3
    `}
`;

export const InputForm = styled.input(({ darkTheme }) => [
  tw`w-full py-2 border rounded-lg px-3 focus:outline-none focus:border-slate-300 hover:shadow`,
  darkTheme && tw`bg-transparent text-slate-200`]);

export const ButtonAutenticarStyle = styled.button(({ darkTheme }) => [
  tw`w-full text-center py-2 px-3 border flex space-x-2 items-center justify-center border-slate-200 rounded-lg text-slate-700 hover:border-slate-400 hover:text-slate-900 hover:shadow transition duration-150`,
    darkTheme && tw`text-slate-300 border-slate-300 hover:border-slate-200 hover:text-slate-200`
  ]);

export const ContenedorForgotPassword = styled.div`
  ${tw`
        flex flex-row justify-end
    `}
`;

export const ButtonRegisterA = styled(Link)`
  ${tw`
        text-indigo-600 font-normal items-center pl-[5px] hover:font-medium
    `}
`;
