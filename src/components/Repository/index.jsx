import React from 'react';

import {StyledSection, EdgeSections, StyledBody} from './style';

import {FaRegSun, FaRegStar} from 'react-icons/fa';

// The context will populate the values of components
const Hearder = () => (
  <EdgeSections>
    <h2>fcc-javascript-calculator</h2>
    <a href="#"><FaRegSun /></a>
  </EdgeSections>
);

const Body = () => (
  <StyledBody>
    <p><strong>Sobre:</strong>JavaScript Calculator
     is the fourth project of the course Front End
     Development Libraries by freecodecamp </p>
  </StyledBody>
);

const Footer = () => (
  <EdgeSections>
    <FaRegStar />
    <a href="http://www.fcc-javascript-calculator-ten.vercel.app/">Preview</a>
  </EdgeSections>
);

const Repository = () => (
  <StyledSection>
    <Hearder />
    <Body />
    <Footer />
  </StyledSection>
);

export default Repository;
