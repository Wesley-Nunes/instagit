import styled from 'styled-components';

export const StyledLabel = styled.label`
  cursor: pointer;
`;

export const StyledInput = styled.input`
  font-weight: bold;

  accent-color: #ff7c44;
  background-color: #9cc2e2;
  color: #000;

  height: 3rem;
  width: 100vw;

  visibility: ${(props) => props.visibility};

  position: absolute;
  left: 0;
  top: 6rem;
`;
