import styled from "styled-components";


export const Modal = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
    dialog{
        margin: 0 auto;
        padding: 0;
        width: 350px;
        height: 400px;
        background: #507701;
        color: #fff;
        box-shadow: 0px 0px 15px black;
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
                right: 3px;
                top: -15px;
                background: transparent;
                border: none;
                border-radius: 4px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
        h3{
            margin-top: 20px;
            margin-bottom: 20px;
            color: black;
        }
    }
`