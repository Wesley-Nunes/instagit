import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.2rem;

  background-color: #fafafa;

  & > :nth-child(n) {
    line-height: 2.4rem;

    background-color: #fff;

    margin-top: 3rem;
  }

  & > :nth-child(n+2) {
    display: flex;
    flex-direction: column;    
    align-items: center;
    justify-content: center;

    height: 30rem;
    width: 100vw;
  }
`;

export const UserDetailsWrapper = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-auto-rows: 20rem;
  justify-items: center;
  align-items: center;

  & > :nth-child(1) {
    font-size: 5rem;
  }
`;

export const RepoWrapper = styled.div`
  height: 3rem;
  width: 75vw;

  text-align: center;

  margin: 0.5rem 0;

  border: 1px solid #dbdbdb;
  border-radius: 6px;
`;
