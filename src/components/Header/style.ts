import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 58.56px;
  border-bottom: 1px solid #dbdbdb;

  .headerNavDesktop {
    display: none;
  }

  .heading {
    display: flex;
    width: 100%;
    height: 58.56px;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;

    .logo {
      width: 126px;
      img {
        width: 100%;
      }
    }

    .menuBtn {
      width: 28px;
      height: fit-content;
      background-color: transparent;
      outline: none;
      border: 1px solid transparent;
      margin: 0;
      padding: 0;

      .menuIcon {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
    }
  }

  .headerNav {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    z-index: 1;
    .searchContainer {
      display: flex;
      width: 262px;
      height: 32px;
      border: 1px solid #dbdbdb;
      align-items: center;
      border-radius: 34px;
      padding: 0 5px;
      margin-top: 10px;
      z-index: 1;
      background-color: white;

      .searchIcon {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--secondary);
        width: 23px;
        height: 23px;
        border-radius: 50%;
      }

      .searchBar {
        outline: none;
        border: 1px solid var(--gray-6);
      }
    }

    .userIconAndLogoutBtn {
      display: flex;
      flex-direction: column;
      gap: 10px;
      .userIcon {
        display: none;
      }
      .addBtn {
        margin-top: 10px;
        width: 262px;
        height: 32px;
        font-weight: 700;
        color: white;
        background-color: var(--secondary);
        outline: none;
        border: 1px solid transparent;
        border-radius: 34px;
      }
      .exitButton {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 262px;
        height: 32px;
        border-radius: 34px;
        outline: none;
        border: 1px solid #dbdbdb;
        background-color: var(--gray-6);

        .closeContainer {
          display: flex;
          align-self: center;
          gap: 10px;
          p {
            font-weight: 700;
            color: var(--primary);
          }
          .exitIcon {
            margin: 0;
            padding: 0;
            align-self: center;
          }
        }
      }
    }
  }

  @media (min-width: 1024px) {

    .heading{
      display: flex;
      padding-inline: 25px;
      justify-content: center;
      align-items: center;
      gap: 100px;
    }

    .headerNavDesktop {
      display: flex;
      align-items: center;
      background-color: white;
      justify-content: center;
      gap: 100px;
      z-index: 1;
      .searchContainer {
        display: flex;
        width: 262px;
        height: 32px;
        border: 1px solid #dbdbdb;
        align-items: center;
        justify-content: center;
        border-radius: 34px;
        padding: 0 5px;
        z-index: 1;
        background-color: white;

        .searchIcon {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: var(--secondary);
          width: 23px;
          height: 23px;
          border-radius: 50%;
        }

        .searchBar {
          outline: none;
          border: 1px solid var(--gray-6);
        }
      }

      .userIconAndLogoutBtn {
        display: flex;
        gap: 20px;
        .userIcon {
          display: flex;
          width: 30px;
          height: 30px;
          img{
            width: 100%;
          }
        }
        .exitButton {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 30px;
          border-radius: 34px;
          outline: none;
          border: none;
          background-color: transparent;

          .closeContainer {
            display: flex;
            align-self: center;
            gap: 10px;
            p {
              font-weight: 700;
              color: var(--primary);
            }
            .exitIcon {
              margin: 0;
              padding: 0;
              align-self: center;
            }
          }
        }
      }
    }

    .heading {
      .menuBtn {
        display: none;
      }
    }

    .headerNav {
      display: none;
    }
  }
`;
