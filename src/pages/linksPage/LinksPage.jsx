import React, { useState } from "react";
import {
  CustomeLinkForm,
  LinkItem,
  LinkItemWrapper,
  Wrapper,
} from "./LinksPage.styles";

import { ReactComponent as DragDropIcon } from "../../assets/images/icon-drag-and-drop.svg";
import FormInput from "../../components/formInput/FormInput";
import LinkSelect from "../../components/linkSelect/LinkSelect";
import AddLinkFormItem from "../../components/addLinkFormItem/AddLinkFormItem";

const LinksPage = () => {
  const [linksList, setLinksList] = useState([]);

  const handleAddItem = () => {
    setLinksList((prev) => [...prev, { platform: "sienma", link: "siema" }]);
  };

  return (
    <Wrapper>
      <CustomeLinkForm>
        <div>
          <h2>Customize your links</h2>
          <legend>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </legend>
          <button type="button" onClick={handleAddItem}>
            + Add new link
          </button>
        </div>

        {linksList.map(({ platform, link }, index) => (
          <AddLinkFormItem id={index + 1} key={`select${index}`} />
        ))}

        <button type="submit" disabled={linksList.length === 0}>
          Save
        </button>
      </CustomeLinkForm>
    </Wrapper>
  );
};

export default LinksPage;
