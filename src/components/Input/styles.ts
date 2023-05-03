import styled from 'styled-components'

export const BlockInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        color: red;
        font-size: 12px;
    }
`

export const Inputs = styled.div`
    height: 35px;
    border: 1px solid var(--gray-3);
    border-radius: 34px;
    display: flex;
    align-items: center;
    padding-left: 3px;
    padding-right: 5px;
    box-sizing: border-box;
    background: #FAFAFA;
    gap: 10px;
    position: relative;
    input{
        border: none;
        border-radius: 34px;
        height: 25px;
        background: transparent;
        padding-inline: 10px;
        box-sizing: border-box;
        color: #B4B4B4;
        :focus{
            outline: none;
            color: black;
        }
        ::placeholder{
            color: #B4B4B4;
        }
    }
    button{
        width: 30px;
        height: 30px;
        border: none;
        background: #EF8F38;
        border-radius: 50%;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
        :hover{
            background: #E37008;
        }
        cursor: pointer;
    }
    :has(input:focus){
        border: 1px solid var(--gray-1);
    }
`