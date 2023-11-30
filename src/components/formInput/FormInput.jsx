import React from "react";
import { InputWrapper, OuterWrapper } from "./FormInput.styles";

const FormInput = ({ icon, label, ...props }) => {
  return (
    <OuterWrapper>
      <label htmlFor={props.id}>{label}</label>
      <InputWrapper>
        {icon}
        <input {...props} />
      </InputWrapper>
    </OuterWrapper>
  );
};

export default FormInput;
