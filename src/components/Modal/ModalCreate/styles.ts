import styled from "styled-components";


export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    background: #00000020;
    z-index: 1;
    dialog{
        margin: 0 auto;
        padding: 0;
        width: 300px;
        height: 400px;
        background: #507701;
        color: #fff;
        box-shadow: 0px 0px 15px #00000040;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        inset: none;
        background: white;
        border-radius: 4px;
        ::backdrop{
            background-color: black;
        }
        .closeModal{
            position: relative;
            width: 100%;
            button{
                height: 30px;
                width: 30px;
                position: absolute;
                right: 10px;
                top: -5px;
                background: transparent;
                border: none;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        @media(min-width: 425px){
            width: 400px;
        }
        h3{
            margin-top: 30px;
            margin-bottom: 20px;
            color: var(--primary);
        }
    }
`