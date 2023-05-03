import styled from "styled-components";

export const Form = styled.form`
  width: 250px;
  height: 300px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    width: 100%;
  }
  .select {
    height: 35px;
    border: 1px solid var(--gray-3);
    border-radius: 34px;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    background: #fafafa;
    gap: 10px;
    position: relative;
    -webkit-appearance: none;
    color: var(--gray-2);
    font-size: 16px;
    line-height: 19px;
    select {
      width: 100%;
      height: 30px;
      border:none;
      border-radius: 34px;
      display: flex;
      align-items: center;
      padding-left: 14px;
      padding-right: 5px;
      box-sizing: border-box;
      background: #fafafa;
      gap: 10px;
      position: relative;
      -webkit-appearance: none;
      color: var(--gray-2);
      font-size: 16px;
      line-height: 19px;
      -moz-appearance: none; /* Firefox */
      -webkit-appearance: none; /* Safari and Chrome */
      appearance: none;
    }
    :focus {
      border: 1px solid var(--gray-1);
    }
  }
  .selectError {
      color: red;
      font-size: 12px;
      align-self: center;
    }
`;