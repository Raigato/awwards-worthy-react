import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        font-family: 'Playfair Display';
        height: 100vh;
        background: black;
        overflow: hidden;
    }

    svg {
        width: 1em;
        margin: 2em auto;
        display: block;
    }

    img {
        width: 100%;
        height: 15em;
        object-fit: cover;
    }
`

export default GlobalStyle
