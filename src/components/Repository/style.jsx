import styled from 'styled-components';

const FlexWrapper = styled.section`
  display: flex;
  align-items: center;

  width: 100vw;
`;

export const StyledSection = styled(FlexWrapper)`
  flex-direction: column;
  justify-content: end;

  // space-up + hearder + body + Footer
  height: ${3+4+32+4}rem;

  background-color: #fafafa;
`;

export const EdgeSections = styled(FlexWrapper)`
  flex-direction: row;
  justify-content: space-between;

  height: 4rem;

  font-size: 1.5rem;

  background-color: #fff;

  padding: 0 2rem;

  & > :nth-child(n) {
    color: black;
    background-color: #fff;

    border: none;

    cursor: pointer;
  }
`;

export const StyledBody = styled(FlexWrapper).attrs({as: 'main'})`
  flex-direction: column;    
  justify-content: center;

  height: 32rem;

  background-color: aliceblue;

  font-size: 1.8rem;

  padding: 0 2rem;
`;
