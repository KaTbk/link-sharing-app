import styled from "styled-components";
import smallLogo from "../../assets/images/logo-devlinks-small.svg";

export const StyledNav = styled.nav`
  margin-bottom: 24px;
  background-color: white;
  @media screen and (min-width: 768px) {
    margin: 24px;
    border-radius: 12px;
  }
`;

export const StyledMenu = styled.menu`
  padding: 16px 24px;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  position: relative;
  div:has(li) {
    display: flex;
  }

  li {
    &:has(svg + svg) {
      svg:last-of-type {
        display: none;
      }
    }
    label {
      padding: 16px 27px;
      display: flex;
      gap: 8px;
      justify-content: center;
      align-items: center;
      position: relative;
      cursor: pointer;
    }
    label:has(input:checked) {
      background-color: #efebff;
      border-radius: 8px;
    }

    input {
      display: none;
    }
    span {
      display: none;
    }
    button {
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 11px 16px;
      border-radius: 8px;
      border: 1px solid #633cff;
      cursor: pointer;
      svg {
        width: 20px;
        aspect-ratio: 1;
      }
    }
  }
  li:has(span) {
    svg {
      width: 20px;
      aspect-ratio: 1;
    }
  }
  @media screen and (min-width: 768px) {
    li {
      &:has(svg + svg) {
        svg:first-of-type {
          display: none;
        }
        svg:last-of-type {
          display: block;
        }
      }
      label {
        span {
          display: block;
        }
      }
    }
  }
`;
