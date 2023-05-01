import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root{
    --primary: #26A59E;
    --secondary: #EF8738;
    --gray-1: #898989;
    --gray-2: #B1B2B2;
    --gray-3: #DBDBDB;
    --gray-4: #E4E4E4;
    --gray-5: #F5F5F5;
    --gray-6: #FAFAFA;
    --white: #FFFFFF;
    --black: #000000;
    --primay-hover: #09857E;
    --secondary-hover: #E37008;

    font-size: 62.5%;
}

* {
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
    
}

body,html{
    width: 100vw;
   
}

body{
    background-color: var(--white);
    justify-content: center;
    display: flex;
    color: var(--gray-1)
}

body, input, button {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
}

button {
    cursor: pointer;
}

input {
    background-color: var(--gray-6);
}

@media (max-width: 750px{
    :root {
        font-size: 60%;
    } 
})
`;
