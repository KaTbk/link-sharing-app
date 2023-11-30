import React, { useState } from "react";
import { linksData } from "../../helpers/linksData";
import {
  DropDownHeader,
  DropDownList,
  DropDownWrapper,
  ListItem,
  SelectLabel,
} from "./linksSelect.styles";
import { ReactComponent as LinkIcon } from "../../assets/images/icon-link.svg";
import { ReactComponent as DownArrowIcon } from "../../assets/images/icon-chevron-down.svg";

const LinkSelect = ({ id }) => {
  const [selectedLink, setSelectedLink] = useState(null);
  const [isFocus, setFocusState] = useState(false);

  const renderSelectedLinkContent = () => {
    return selectedLink ? (
      <>
        {linksData[selectedLink].icon}
        <span>{linksData[selectedLink].platform}</span>
      </>
    ) : (
      <>
        <LinkIcon />
        <span>Select platform</span>
      </>
    );
  };

  const toggleFocus = (e) => {
    setFocusState((prev) => !prev);
  };

  return (
    <>
      <SelectLabel>Platform</SelectLabel>
      <DropDownWrapper>
        <DropDownHeader
          onClick={toggleFocus}
          tabIndex={id}
          onBlur={toggleFocus}
          $focus={isFocus}
        >
          <div>{renderSelectedLinkContent()}</div>
          <DownArrowIcon className="arrow" />
        </DropDownHeader>
        <DropDownList $focus={isFocus}>
          {linksData.map(({ platform, icon }, id) => (
            <ListItem key={id} name={platform}>
              {icon}
              <span>{platform}</span>
            </ListItem>
          ))}
        </DropDownList>
      </DropDownWrapper>
    </>
  );
};

export default LinkSelect;
