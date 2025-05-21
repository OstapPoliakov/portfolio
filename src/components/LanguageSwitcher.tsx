import styled from "styled-components"
import { font } from "../assets/styles/Common"
import { theme } from "../assets/styles/Theme"

export const LanguageSwitcher = () => {
    return (
        <StyledLanguageSwitcher>
            <button>RU</button>
            <span> | </span>
            <button className={"isActive"}>ENG</button>
        </StyledLanguageSwitcher>
    )
}

export const StyledLanguageSwitcher = styled.div`
    display: flex;
    align-items: flex-end;
    writing-mode: sideways-lr;

    // миксин для "резиновых" шрифтов
    ${font({
        family: "'Gilroy-Bold', sans-serif",
        weight: 700,
        Fmax: 16,
        Fmin: 12,
    })}

    span {
        padding: 4px 0;
    }

    button {
        padding: 0;
        color: ${theme.colors.fontSecondary};

        &.isActive {
            color: ${theme.colors.font};
        }
    }
`