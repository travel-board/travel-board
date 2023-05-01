import styled from "styled-components";
export const StyledLogin = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    padding: 2rem;
    

    .imgContainer, .formContainer{
        width:40%;
        height: 80%;
        border-radius: 1rem;
        box-shadow: 0px 0px 17px 6px rgba(0, 0, 0, 0.11);

    }

   .formContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
   }

    p{
        font-size: 1.6rem;
        font-weight: 500;
        color: var(--gray-2)
    }
   Link{

   }

`