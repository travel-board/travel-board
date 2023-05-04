import styled from "styled-components";

export const StyledLi = styled.li`
list-style: none;
width: 280px;
display: flex;
flex-direction: column;
border-radius: 5px;
box-shadow: 0px 0px 7px #00000040;
position: relative;

.travelInfo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.8rem;
    padding-left: 0.8rem;
    h2{
        margin: 0;
        padding: 0;

        color: var(--black);
        font-size: 12px;
    }

    p{
        margin: 0;
        padding: 0;
    }

    .category{
        color: var(--gray-1);
        background-color: var(--gray-4);
        width: fit-content;
        padding: 2px 5px;
        font-size: 8px;
    }

    span{
        display: flex;
        align-items: center;
        gap: 2px;
        margin: 0;
        padding: 0;
        .location{
            font-size: 8px;
            color: var(--black);
        }
    }

}

.buttons-container{
        display: flex;
       justify-content: flex-end;
        gap: 1rem;
        padding: 5px;
        button{
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            outline: none;
            border: 1px solid transparent;
            width: 25px;
            height: 25px;
        }
        .edit{
            background-color: var(--primary);
        }
        .edit:hover{
            background-color: var(--primay-hover);
        }
        .delete{
            background-color: var(--secondary);
        }
        .delete:hover{
            background-color: var(--secondary-hover);
        }
    }

figure{
    margin: 0;
    width: 100%;
    border-radius: 5px;
    img{
        width: 100%;
        border-radius: 5px 5px 0 0;
    }

}

`