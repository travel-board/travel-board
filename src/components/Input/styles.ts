import styled from "styled-components";

export const BlockInput = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  span {
    color: red;
  }
`;

export const Inputs = styled.div`
  height: 35px;
  border: 1px solid #dbdbdb;
  border-radius: 34px;
  display: flex;
  align-items: center;
  padding-left: 3px;
  padding-right: 5px;
  box-sizing: border-box;
  background: #fafafa;
  gap: 10px;
  position: relative;
  width: 100%;

  input {
    border: none;
    border-radius: 34px;
    height: 25px;
    background: transparent;
    padding-inline: 10px;
    box-sizing: border-box;
    color: black;
    :focus {
      outline: none;
    }
    ::placeholder {
      color: #d9d9d9;
    }
    -webkit-box-shadow: 0 0 0px 1000px #fafafa inset;
  }
  button {
    width: 30px;
    height: 30px;
    border: none;
    background: #ef8f38;
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover {
      background: #e37008;
    }
    cursor: pointer;
  }
  :has(input:focus) {
    border: 1px solid red;
  }
`;
