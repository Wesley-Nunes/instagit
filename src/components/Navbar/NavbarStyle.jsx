import styled from 'styled-components';

const FlexRowWrapper = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const StyledTitle = styled.h1`
  font: 4rem 'Patrick Hand', cursive, sans-serif;
`;

export const StyledNavBar = styled(FlexRowWrapper).attrs({as: 'header'})`
  height: 6rem;
  width: 100vw;

  background-color: #fff;

  border-bottom: 1px solid #dbdbdb;

  padding: 0 2rem;
`;

export const StyledUl = styled(FlexRowWrapper).attrs({as: 'ul'})`
  height: 4rem; 
  width: 40vw;

  list-style: none;

  // Set the styles to StyledUl children
  & > :nth-child(n) {
    height: 3.2rem;
    width: 3.2rem;

    font-size: 3.2rem;
  }

  & > :nth-child(n) > :visited {
    color: #000;
  }
`;
