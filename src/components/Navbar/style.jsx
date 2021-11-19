import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font: italic 4rem "Brush Script MT", "Brush Script Std", cursive;
`;

const FlexRowWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const StyledNavBar = styled(FlexRowWrapper).attrs({as: 'header'})`
  height: 6rem;
  width: 100vw;

  background-color: #fff;

  border-bottom: 1px solid #dbdbdb;
`;

export const StyledUl = styled(FlexRowWrapper).attrs({as: 'ul'})`
  height: 4rem; 
  width: 50vw;

  list-style: none;

  // Set the styles to StyledUl children
  & > :nth-child(n) {
    height: 3.2rem;
    width: 3.2rem;

    font-size: 3.2rem;
  }

  & > :nth-child(n) > :visited {
    color: black;
  }
`;
