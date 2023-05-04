import styled from "styled-components";

export const StyledModalDelete = styled.div`
display: flex;
width: 100%;
height: 100%;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 60px;
div{
    width: 100%;
    display: flex;
    justify-content: center;
    button{
        width: 70%;
        font-size: 16px;
    }
}
h2{
    color:black;
    text-align: center;
    font-size: 20px;
}
    button{
        height: 40px;
    }
    .blue{
        background: var(--gray-2);
        :hover{
            background: red;
            color: white;
        }
    }
    .gray{
        background: var(--gray-2);
        color: white;
        :hover{
            background: (--primary);
            color: white;
        }
    }

`