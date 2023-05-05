import styled from "styled-components";

export const StylesListTravel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .addBtn {
    width: 10%;
    display: none;
  }
  section {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  ul {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 20px 0;
    box-sizing: border-box;
    align-self: center;
  }
  @media (min-width: 1000px) {
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: center;
    ul {
      width: 50%;
      padding-block: 20px;
      padding-inline: 20px;
      box-sizing: border-box;
      display: grid;
      grid-template-columns: 300px 300px 300px;
      gap: 20px;
      align-items: center;
      justify-content: center;
    }
    .addBtn {
      width: 100%;
      display: flex;
      gap: 20px;
      align-content: center;
      justify-content: end;
      button {
        width: 100px;
        height: 30px;
        background: var(--secondary);
        font-size: 16px;
        color: white;
        :hover {
          background: var(--secondary-hover);
        }
      }
    }
  }
`;
