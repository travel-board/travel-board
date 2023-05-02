import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  align-self: center;

  input,
  button {
    width: 100%;
  }

  form > div {
    height: 50px;
  }

  div > div {
    height: 50px;
  }
  div > input {
    height: 100%;
  }
`;
