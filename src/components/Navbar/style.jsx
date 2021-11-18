import styled from 'styled-components';

export const StyledTitle = styled.h1`
  font: italic 4rem "Brush Script MT", "Brush Script Std", cursive;
`;

export const StyledNavBar = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 6rem;
  width: 100vw;

  background-color: #fff;

  border-bottom: 1px solid #dbdbdb;
`;

export const StyledUl = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  height: 4rem; 
  width: 50vw;

  list-style: none;

  & > :nth-child(n) {
    height: 3.2rem;
    width: 3.2rem;

    font-size: 3.2rem;
  }

  & > :nth-child(n) > :visited {
    color: black;
  }
`;
