import styled from "styled-components";



export const ButtonBlock = styled.div`
    width: 100%;
    height: 50px;
    border: none;
    border-radius: 34px;
    padding: 0;
    button{
        width: 100%;
        height: 100%;
        border: none;
        border-radius: 34px;
        font-size: 20px;
        font-weight: 700;
        cursor: pointer;
        :hover{
            background: #09857E;
        }
    }
    .blue{
        background: #26A59E;
        color: white;
        :hover{
            background: #09857E;
        }
    }
    .grey{
        background: #E4E4E4;
        color: #898989;
        :hover{
            background: #B1B2B2;
            color: white;
        }
    }

    
`