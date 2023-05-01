import styled from "styled-components";


export const Modal = styled.div`
    display: flex;
    height: 100vh;
    overflow: hidden;
    align-items: center;
    justify-content: center;
    dialog{
        padding: 0;
        width: 300px;
        height: 350px;
        background: #507701;
        color: #fff;
        box-shadow: 0px 0px 15px black;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        inset: none;
        background: white;
        ::backdrop{
            background-color: black;
        }
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
        h3{
            color: black;
        }
    }
`