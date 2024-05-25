import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { colors } from './contants.js';

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Jua';
        src: url('/fonts/Jua-Regular.ttf') format('truetype');
    }

    @font-face {
        font-family: 'KGHAPPY';
        src: url('/fonts/KGHAPPY.ttf') format('truetype');
    }
    input {
        color: black;
    }
    body{
            background: ${colors.baseColor1};
    }

    * {
        box-sizing: border-box;
        font-family : "Jua", "Inter", sans-serif;
        color: white;
        ${reset};
    }

    a {
        text-decoration: none;
        color: inherit;
    }

    ol, ul {
        list-style: none;
    }

    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

    h1 {
        font-size: 25px;
        font-family: "KGHAPPY", "Inter", sans-serif;
    }

    h2 {
        font-size: 20px;
    }

    h3 {
        font-size: 16px;
    }

    h4, h5, h6 {
        font-size: 10px;
    }
`;

export default GlobalStyles;
