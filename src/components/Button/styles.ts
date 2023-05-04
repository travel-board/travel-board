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
            background: var(--primay-hover);
        }
    }
    .blue{
        background: var(--primary);
        color: white;
        :hover{
            background: var(--primay-hover);
        }
    }
    .grey{
        background: var(--gray-4);
        color: var(--gray-1);
        :hover{
            background: var(--gray-2);
            color: white;
        }
    }

    
`