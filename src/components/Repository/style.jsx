import styled from 'styled-components';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;

  // space-up + hearder + body + Footer
  height: ${3+4+32+4}rem;
  width: 100vw;

  background-color: #fafafa;
`;

export const EdgeSections = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 4rem;
  width: 100vw;

  background-color: #fff;

  padding: 0 2rem;
`;

export const StyledBody = styled.main`
  display: flex;
  flex-direction: column;    
  align-items: center;
  justify-content: center;

  height: 32rem;
  width: 100vw;

  background-color: aliceblue;

  font-size: 1.8rem;

  padding: 0 2rem;
`;
