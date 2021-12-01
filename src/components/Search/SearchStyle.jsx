import styled from 'styled-components';

const StyledInput = styled.input`
  background-color: aliceblue;
  color: tomato;

  height: 3rem;
  width: 100vw;

  visibility: ${(props) => props.visibility};

  position: absolute;
  left: 0;
  top: 6rem;
`;

export default StyledInput;
