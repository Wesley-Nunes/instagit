import React from 'react';

import PropTypes from 'prop-types';

import {StyledTitle, StyledNavBar, StyledUl} from './style';

const NavBar = ({children}) => (
  <StyledNavBar>
    <StyledTitle>
      instagit
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
