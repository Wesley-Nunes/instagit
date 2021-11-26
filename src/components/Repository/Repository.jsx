import React from 'react';

import {OptionsIcon, StarUncheckedIcon} from '../../services/icons/icons';

import {StyledSection, EdgeSections, StyledBody} from './RepositoryStyle';

// The context will populate the values of components
const Hearder = () => (
  <EdgeSections>
    <a
      href="https://www.github.com/Wesley-Nunes/fcc-javascript-calculator"
      target="_blank"
      rel="noreferrer"
      aria-label="Link to repository"
    >
      <h3>fcc-javascript-calculator</h3>
    </a>
    <button type="button" aria-label="repository options">
      <OptionsIcon />
    </button>
  </EdgeSections>
);

const Body = () => (
  <StyledBody>
    <p><strong>About: </strong>JavaScript Calculator
     is the fourth project of the course Front End
     Development Libraries by freecodecamp </p>
  </StyledBody>
);

const Footer = () => (
  <EdgeSections>
    <button type="button" aria-label="Favorite the current repository">
      <StarUncheckedIcon />
    </button>
    <a
      href="https://fcc-javascript-calculator-ten.vercel.app/"
      target="_blank"
      rel="noreferrer"
      aria-label="Link to preview"
    >
      Preview
    </a>
  </EdgeSections>
);

const Repository = () => (
  <StyledSection aria-label="Section with the repository info">
    <Hearder />
    <Body />
    <Footer />
  </StyledSection>
);

export default Repository;
