import styled from "styled-components";
import {
  FilledBtn,
  HollowBtn,
  PageWrapper,
} from "../../assets/styles/globalStyles";

export const Wrapper = styled.div`
  ${PageWrapper};
`;

export const CustomeLinkForm = styled.form`
  --navbar-height: 84px;
  --margin: 24px;
  --padding: 64px;
  height: calc(100vh - (var(--navbar-height) + var(--margin) + var(--padding)));
  background-color: white;
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  button {
    &[type="button"] {
      ${HollowBtn};
      width: 100%;
      padding: 11px 0;
      font-size: 1.6rem;
      line-height: 1.5;
      margin: 40px 0 22px;
    }
    &[type="submit"] {
      ${FilledBtn};
      padding: 11px 0;
      margin-top: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    --margin: 48px;
    --padding: 104px;

    padding: 40px;
  }
`;

export const LinkItemWrapper = styled.div`
  padding: 46px 0px;
  border-radius: 8px;
  height: 100%;
  &:empty {
      background-color: var(--color-gray-100);
      padding: 46px 20px;
  }
`;

export const LinkItem = styled.div`
  border-radius: 8px;
  background-color: var(--color-gray-100);
  padding: 20px;
  div {
    &:first-of-type {
      display: flex;
      justify-content: space-between;
      div {
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        h3 {
          color: var(--color-gray-300);
        }
      }
      span {
        background-color: transparent;
        font-size: 1.6rem;
        color: var(--color-gray-300);
      }
    }
  }
`;
