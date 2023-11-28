import React from "react";
import { StyledMenu, StyledNav } from "./Navbar.styles";
import { ReactComponent as LinkIcon } from "../../assets/images/icon-link.svg";
import { ReactComponent as ProfileIcon } from "../../assets/images/icon-profile-details-header.svg";
import { ReactComponent as LogoSmall } from "../../assets/images/logo-devlinks-small.svg";
import { ReactComponent as LogoLarge } from "../../assets/images/logo-devlinks-large.svg";
import { ReactComponent as PreviewIcon } from "../../assets/images/icon-preview-header.svg";

const Navbar = () => {
  return (
    <StyledNav>
      <StyledMenu>
        <li>
          <LogoSmall />
          <LogoLarge />
        </li>
        <div>
          <li>
            <label htmlFor="links">
              <LinkIcon />
              <span>Links</span>
              <input type="radio" name="menuItem" id="links" defaultChecked />
            </label>
          </li>
          <li>
            <label htmlFor="profileDetails">
              <ProfileIcon />
              <span>Profile Details</span>
              <input type="radio" name="menuItem" id="profileDetails" />
            </label>
          </li>
        </div>
        <li>
          <button>
            <PreviewIcon />
          </button>
        </li>
      </StyledMenu>
    </StyledNav>
  );
};

export default Navbar;
