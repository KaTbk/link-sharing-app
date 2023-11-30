import styled from "styled-components";
import { InputItem } from "../../assets/styles/globalStyles";

export const OuterWrapper = styled.div`
  margin-top: 24px;
  label {
    color: var(--color-gray-400);
    font-size: 1.2rem;
    line-height: 1.5;
  }
`;

export const InputWrapper = styled.div`
  ${InputItem}
  margin-top: 8px;
  input {
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    font-size: 1.6rem;
    line-height: 1.5;
    outline: none;
    color: var(--color-gray-300);
    font-family: inherit;
  }
  svg {
    width: 20px;
    aspect-ratio: 1;
  }
`;
