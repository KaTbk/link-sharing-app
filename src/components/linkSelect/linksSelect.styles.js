import styled from "styled-components";
import { InputItem } from "../../assets/styles/globalStyles";

export const DropDownWrapper = styled.div`
  position: relative;
  margin-top: 8px;
  svg {
    width: 20px;
  }
  span {
    font-size: 1.6rem;
    line-height: 1.5;
    color: var(--color-gray-300);
  }
`;
export const DropDownHeader = styled.div`
  ${InputItem}

  div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .arrow {
    ${({ $focus }) => $focus && "transform:rotate(180deg)"};
    transition: transform 0.2s ease-in-out;
  }
`;
export const DropDownList = styled.ul`
  --select-header-hight: 50px;
  --drop-list-offset: 16px;
  --drop-list-padding: 32px;
  --drop-list-border-width: 2px;
  --list-item-height: 49px;

  max-height: calc(3 * var(--list-item-hight));
  overflow-y: scroll;
  list-style: none;
  border-radius: 8px;
  margin: 0;
  padding: 0 16px;
  border: 1px solid var(--color-gray-200);
  position: absolute;
  z-index: 10;
  top: calc((var(--select-header-hight) + var(--drop-list-offset)));
  width: calc(
    100% - (var(--drop-list-padding) + var(--drop-list-border-width))
  );
  max-height: ${({ $focus }) =>
    $focus ? "calc(3 * var(--list-item-height))" : "0"};
  opacity: ${({ $focus }) => ($focus ? 1 : 0)};
  transition: max-height 0.3s ease-out;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ListItem = styled.li`
  padding: 12px 0px;
  border-bottom: 1px solid var(--color-gray-100);
  display: flex;
  align-items: center;
  gap: 8px;
  &:last-of-type {
    border-bottom: none;
  }
`;

export const SelectLabel = styled.span`
  color: var(--color-gray-400);
  font-size: 1.2rem;
  line-height: 1.5;
`;
