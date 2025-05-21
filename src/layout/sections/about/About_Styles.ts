import styled from "styled-components"
import { font } from "../../../assets/styles/Common"

const About = styled.section``

const InfoParagraph = styled.p`
    // миксин для резиновых шрифтов
    ${font({
        family: "'Gilroy-Medium', sans-serif",
        weight: 400,
        Fmax: 18,
        Fmin: 14,
    })}
    text-align: center;

    span {
        display: block;
    }
`

export const S = {
    About,
    InfoParagraph,
}
