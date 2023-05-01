import styled from "styled-components";
import imgUrl from "../../assets/female-tourists-hand-have-happy-travel-map.jpg";

export const StyledLogin = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  padding: 2rem;

  .imgContainer,
  .formContainer {
    width: 40%;
    max-width: 410px;
    min-height: 500px;
    border-radius: 1rem;
    box-shadow: 0px 0px 17px 6px rgba(0, 0, 0, 0.11);
    display: flex;
  }

  .formContainer {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 3rem;
    gap: 4rem;
  }

  .imgContainer {
    background-image: url(${imgUrl});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .imgContainer > figure {
    width: 100%;
    flex-grow: 1;
    border-radius: 1rem;
    display: flex;
  }

  .imgContainer > figure > img {
    border-radius: 1rem;
    overflow-x: hidden;
    align-self: center;
    flex-grow: 1;
  }

  figure {
    width: 80%;
  }
  img {
    width: 100%;
  }

  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: var(--gray-2);
  }
  a {
    border-radius: 3.4rem;
    background-color: var(--gray-4);
    color: var(--gray-1);
    width: 100%;
    padding: 17px;
    text-decoration: none;
    text-align: center;
  }

  @media (max-width: 800px) {
    .imgContainer {
      display: none;
    }

    .formContainer {
      width: 100%;
      box-shadow: none;
    }
  }
`;
