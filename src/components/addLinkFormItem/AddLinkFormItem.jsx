import React from "react";
import { ItemHeader, ItemWrapper } from "./AddLinkFormItem.styles";
import LinkSelect from "../linkSelect/LinkSelect";
import { ReactComponent as DropDragIcon } from "../../assets/images/icon-drag-and-drop.svg";
import { ReactComponent as LinkIcon } from "../../assets/images/icon-link.svg";
import FormInput from "../formInput/FormInput";

const AddLinkFormItem = ({ id }) => {
  return (
    <ItemWrapper>
      <ItemHeader>
        <div>
          <DropDragIcon />
          <span>Link #{id}</span>
        </div>
        <button>Remove</button>
      </ItemHeader>
      <LinkSelect id={id} />
      <FormInput icon={<LinkIcon />} type="text" label="Link" />
    </ItemWrapper>
  );
};

export default AddLinkFormItem;
