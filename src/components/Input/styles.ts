import styled from 'styled-components'

export const BlockInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    span{
        color: red;

    }
`

export const Inputs = styled.div`
    height: 35px;
    border: 1px solid #000;
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
        color: #D9D9D9;
        :focus{
            outline: none;
        }
        ::placeholder{
            color: #000;
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
        border: 1px solid red;
    }
`