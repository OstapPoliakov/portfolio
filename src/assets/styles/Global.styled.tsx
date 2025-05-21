import { createGlobalStyle } from "styled-components";
import { theme } from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    // "обнуление" стилей всех кнопок
    button {
        padding: 0;
        border: none;
        font: inherit;
        color: inherit;
        background-color: unset;
        cursor: pointer;
    }

    @font-face {
        font-family: "Gilroy-Bold";
        src:
            local("Gilroy-Bold"),
            url("/src/assets/fonts/Gilroy-Bold.woff") format("woff");
        font-weight: 700;
    }

    @font-face {
        font-family: "Gilroy-Medium";
        src:
            local("Gilroy-Medium"),
            url("/src/assets/fonts/Gilroy-Medium.woff") format("woff");
        font-weight: 400;
    }

    // плавный скролл
    /* html {
        scroll-behavior: smooth;
    } */

    body {
        margin: 0;
        font-family: "Gilroy-Medium", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
        // минимальный размер экрана устройств, с которого проект открывается
        min-width: 360px;
        //padding-bottom: 300px;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
            monospace;
    }

    a {
        text-decoration: none;
        color: ${theme.colors.font}
    }

    ul {
        list-style: none;
    }

    section {
        padding: 100px 0;
    }

    section: nth-of-type(odd) {
        background-color: ${theme.colors.primaryBg}
    }

    section: nth-of-type(even) {
        background-color: ${theme.colors.secondaryBg}
    }

    h1, h2, h3, h4, h5 {
        font-family: "Gilroy-Bold", sans-serif;
        font-weight: 700;
    }

    p {
        font-weight: 400;
        font-size: 18px;
        line-height: 1.2;
    }

    // blur фона, для модального окна
    // без переопределения дефолтных классов
    .ReactModal__Overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);

        display: flex;
        justify-content: center;
        align-items: center;

        z-index: 1000;

        opacity: 0;
        transition: opacity 300ms ease-in-out;
    }

    .ReactModal__Content {
        position: absolute;
        background: white;
        padding: 2rem;
        border-radius: 12px;
        outline: none;
        /* max-width: 500px;
        width: 90%; */
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        z-index: 1001;

        opacity: 0;
        transition: opacity 300ms ease-in-out;
    }

    .ReactModal__Overlay--after-open {
        opacity: 1;
    }

    .ReactModal__Overlay--before-close {
        opacity: 0;
    }
    
    
    .ReactModal__Content--after-open {
        // некорректно улетает вбок
        //transform: translateY(0px);
        opacity: 1;
    }

    .ReactModal__Content--before-close {
        // некорректно улетает вбок
        //transform: translateY(10px);
        opacity: 0;
    }
`
