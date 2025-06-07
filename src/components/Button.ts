import styled from "styled-components"
import { theme } from "../assets/styles/Theme"

const defaultBtnWidth = "180px"
const defaultBtnHeight = "42px"

type StyledBtnPropsType = {
    width?: string
    height?: string
    type: string
}

export const StyledButton = styled.button.attrs<StyledBtnPropsType>(
    (props: StyledBtnPropsType) => ({
        type: props.type,
    })
)`
    width: ${(props) => props.width || defaultBtnWidth};
    height: ${(props) => props.height || defaultBtnHeight};
    color: ${theme.colors.buttonFont};
    background-color: ${theme.colors.buttonBg};
    border-radius: 25px;

    font-family: "Gilroy-Bold", sans-serif;
    font-weight: 400;
    font-size: 18px;
    text-align: center;

    cursor: pointer;

    //transform: scale(1);
    //transition: opacity 0.2s ease-out, transform 0.2s ease-out;
    transition: ${theme.animations.transition};

    ${({ as }) =>
        as === "a" &&
        `
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        text-decoration: none;
    `}

    // увеличение + opacity (изменение прозрачности) для кнопки при наведении
    // только для desktop
    @media (hover: hover) {
        &:hover {
            opacity: 0.8;
            transform: scale(1.04);
        }

        &:active {
            transform: translateY(1px);
            opacity: 1;
        }
    }
`
