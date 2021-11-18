import React from 'react';
import {StyledTitle, StyledNavBar} from './style';

const Title = () => (
  <StyledTitle>
    instagit
  </StyledTitle>
);

const NavBar = () => (
  <StyledNavBar>
    <Title />
  </StyledNavBar>
);

export default NavBar;
