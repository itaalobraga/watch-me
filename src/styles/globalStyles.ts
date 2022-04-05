import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root {
        --background: #1F2229;
        --background2: #2E303C;
        --background-button: #373945;
        --background-button2: #4B4D59;
        --yellow: #FAE800;
        --gray: #BEC2C6;
        --white: #FBFBFB;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }


    html {
        @media (max-width: 1080px) {
            font-size: 93.75%;
        }
        @media (max-width: 720px) {
            font-size: 87.50%;
        }
        @media (max-width: 360px) {
            font-size: 81.25%;
        }
    }

    body {
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    body, button, input, textarea, select, option {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    button {
        cursor: pointer;
    }

    h1, h2, h3, h4 {
        font-weight: 600;
    }

`;
