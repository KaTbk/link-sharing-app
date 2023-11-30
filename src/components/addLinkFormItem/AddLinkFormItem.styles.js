import styled from "styled-components";

export const ItemWrapper = styled.div`
  background-color: var(--color-gray-100);
  border-radius: 8px;
  padding: 20px;
`;

export const ItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  div {
    display: flex;
    align-content: center;
    gap: 8px;
    cursor: pointer;
    svg {
      width: 12px;
    }
    span {
      color: var(--color-gray-300);
      font-weight: bold;
      line-height: 1.5;
      font-size: 1.6rem;
    }
  }
  button {
    background-color: transparent;
    border: none;
    font-weight: bold;
    color: var(--color-gray-300);
    font-size: 1.6rem;
    line-height: 1.5;
    letter-spacing: 1px;
  }
`;
