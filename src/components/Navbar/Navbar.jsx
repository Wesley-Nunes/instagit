import React from 'react';

import PropTypes from 'prop-types';

import {StyledTitle, StyledNavBar, StyledUl} from './NavbarStyle';

const NavBar = ({children}) => (
  <StyledNavBar>
    <StyledTitle>
      Instagit
    </StyledTitle>
    <nav>
      <StyledUl>
        {children}
      </StyledUl>
    </nav>
  </StyledNavBar>
);

NavBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default NavBar;
