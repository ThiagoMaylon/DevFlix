import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: Arial, Helvetica, sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: 0;
    }
    body{
        background-color: #3d3d3d;
    }
    html{
        overflow-x: hidden ;
    }
`