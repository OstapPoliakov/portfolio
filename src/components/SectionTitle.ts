import styled from "styled-components"
import { theme } from "../assets/styles/Theme"
import { font } from "../assets/styles/Common"

export const SectionTitle = styled.h2`
    // mixin для "резинового" текста
    ${font({
        family: "'Gilroy-Bold', sans-serif",
        weight: 700,
        Fmax: 34,
        Fmin: 28,
    })}
    color: ${theme.colors.font};
    text-align: center;
    margin-bottom: 60px;

    position: relative;

    // визуальный эффект черточки под заголовком секций
    &::before {
        content: "";
        display: inline-block;
        width: 60px;
        height: 1px;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 50%;
        bottom: -20px;
        transform: translateX(-50%);

        @media ${theme.media.mobile} {
            bottom: -16px;
        }
    }
`
