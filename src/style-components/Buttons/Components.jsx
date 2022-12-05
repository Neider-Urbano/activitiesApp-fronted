import styled from "styled-components";
import tw from "twin.macro";

export const ButtonAzulPrimary = styled.button`
  ${tw`
        w-full py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-lg border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center
    `}
`;

export const ButtonRedPrimary = styled.button`
  ${tw`
        w-full py-2 font-medium text-white bg-red-600 hover:bg-red-500 rounded-lg border-red-500 hover:shadow inline-flex space-x-2 items-center justify-center
    `}
`;
