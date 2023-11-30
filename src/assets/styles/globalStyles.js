import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`

:root{
  --color-purple-100: #EFEBFF;
  --color-purple-200: #BEADFF;
  --color-purple-300: #633CFF;
  --color-gray-100: #FAFAFA;
  --color-gray-200: #D9D9D9;
  --color-gray-300: #737373;
  --color-gray-400: #333333;
}

html {
  font-size: 62.5%;
  box-sizing: border-box;
}

body {
  background-color: var(--color-gray-100);
  margin: 0;
  padding: 0;
  font-family: 'Instrument Sans', sans-serif;
}

h2{
  font-size: 2.4rem;
  line-height: 1.5;
  margin: 0;
  margin-bottom: .8rem;

  @media screen and (min-width: 768px){
    font-size: 3.2rem;
  }
}

h3{
  font-size: 1.6rem;
  line-height: 1.5;
  margin: 0;
}

legend{
  font-size: 1.6rem;
  line-height: 1.5;
  color: #737373
}

button{
  font-family: 'Instrument Sans', sans-serif;
  cursor: pointer;
  border-radius: 8px;
}


`;

export const PageWrapper = css`
  padding: 0 16px 16px 16px;
  @media screen and (min-width: 768px) {
    padding: 0 24px 16px 24px;
  }
`;

export const HollowBtn = css`
  border: 1px solid var(--color-purple-300);
  background-color: transparent;
  color: var(--color-purple-300);
  &:hover {
    background-color: var(--color-purple-100);
  }
`;

export const FilledBtn = css`
  border: none;
  background-color: var(--color-purple-300);
  color: white;
  font-size: 1.6rem;
  line-height: 1.5;
  font-weight: 600;
  letter-spacing: 1px;
  &:disabled {
    opacity: 0.25;
  }
  &:not(:disabled):hover {
    background-color: var(--color-purple-200);
  }
`;

export const InputItem = css`
  display: flex;
  padding: 12px 16px;
  border-radius: 8px;
  border: 1px solid var(--color-gray-200);
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
