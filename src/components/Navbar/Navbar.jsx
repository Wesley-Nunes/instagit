import React from 'react';
import {Link} from 'react-router-dom';

import {Search, AvatarUser} from '..';
import {getBasename} from '../../services/router/Router';
import {HomeIcon} from '../../services/icons/icons';
import {StyledTitle, StyledNavBar, StyledUl} from './NavbarStyle';

const NavBar = () => (
  <StyledNavBar>
    <StyledTitle>
      Instagit
    </StyledTitle>
    <nav>
      <StyledUl>
        <li>
          <Link to={`${getBasename()}/home`} aria-label="home">
            <HomeIcon />
          </Link>
        </li>
        <li aria-label="search" tabIndex="0">
          <Search />
        </li>
        <li>
          <Link to={`${getBasename()}/profile`} aria-label="profile">
            <AvatarUser />
          </Link>
        </li>
      </StyledUl>
    </nav>
  </StyledNavBar>
);

export default NavBar;
