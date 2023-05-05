import styled from "styled-components";

export const StyledModalDelete = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 60px;
  div {
    width: 100%;
    display: flex;
    justify-content: center;
    button {
      width: 70%;
      font-size: 16px;
      font-weight: 400;
    }
  }
  h2 {
    color: black;
    text-align: center;
    font-size: 20px;
  }
  button {
    height: 40px;
  }
  .blue {
    background: var(--primary);
    :hover {
      background: #09857e;
      color: white;
    }
  }
  .gray {
    background: var(--gray-4);
    color: var(--gray-1);
    :hover {
      background: var(--gray-2);
      color: white;
    }
  }
`;
