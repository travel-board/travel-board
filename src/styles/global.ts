import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
    *{
        padding: 0;
    }

    .ReactModal__Content{
        .closeModal{
            position: relative;
            width: 100%;
            button{
                position: absolute;
                right: 0;
                top: -5px;
                background: transparent;
                border: none;
            }
        }
        width: 300px;
        height: 350px;
        left: 45%;
        top: 25%;
        margin-left: -100px;
        margin-top: -50px;
        position: absolute;
        background: #507701;
        color: #fff;
        box-shadow: 0px 0px 15px black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    button{
        cursor: pointer;
    }

`