import styled from "styled-components";

export const Form = styled.form`
    width: 250px;
    height: 300px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    div{
        width: 100%;
        input{
            width: 100%;
            color: black;
            ::placeholder{
                color: #000;
            }
        }
    }
`