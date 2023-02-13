import styled from "styled-components";
import tw from "twin.macro";

export const ButtonAzulPrimary = styled.button(({ isDisabled }) => [
  tw`w-full py-2 font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg border-indigo-700 hover:shadow items-center justify-center`,
  isDisabled && tw`cursor-not-allowed bg-indigo-500 hover:bg-indigo-500`
]);

export const ButtonRedPrimary = styled.button`
  ${tw`
        w-full py-2 font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg border-red-600 hover:shadow inline-flex space-x-2 items-center justify-center
    `}
`;
