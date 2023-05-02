import styled from "styled-components";


export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    background: #B1B2B250;
    
    dialog{
        margin: 0 auto;
        padding: 0;
        width: 280px;
        height: 400px;
        background: #507701;
        color: #fff;
        box-shadow: 0px 0px 15px #00000050;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        inset: none;
        background: white;
        border-radius: 4px;
        position: fixed;
        ::backdrop{
            background-color: black;
            width: 100vw;
            height: 100vh;
        }
        .closeModal{
            position: relative;
            width: 100%;
            button{
                height: 30px;
                width: 30px;
                position: absolute;
                right: 12px;
                top: 8px;
                background: transparent;
                border: none;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        h3{
            font-size: 24px;
            margin-top: 50px;
            margin-bottom: 20px;
            color: var(--primary);
        }
        @media(min-width: 375px){
            width: 400px;
            height: 400px;
        }
    }
`