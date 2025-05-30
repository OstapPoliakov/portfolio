import styled from "styled-components"
import { FlexWrapper } from "../../../components/FlexWrapper.ts"
import { theme } from "../../../assets/styles/Theme"
import { font } from "../../../assets/styles/Common"

const JobCityInfo = styled.div`
    position: absolute;
    left: 50%;
    bottom: 40px;
    transform: translateX(-45%);

    span {
        // миксин для "резиновых" шрифтов
        ${font({
            family: "'Gilroy-Medium', sans-serif",
            weight: 400,
            Fmax: 18,
            Fmin: 14,
        })}
    }

    text-align: left;

    @media ${theme.media.mobile} {
        text-align: center;
    }
`

const Main = styled.section`
    min-height: 100vh;
    display: flex;
    padding-top: 90px;

    ${FlexWrapper} {
        position: relative;
        padding: 40px 0px;
        gap: 10px;

        @media ${theme.media.mobile} {
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;

            ${JobCityInfo} {
                position: static;
                transform: unset;
            }
        }
    }
`

const MainTitle = styled.h1`
    // миксин для "резиновых" шрифтов
    ${font({
        family: "'Gilroy-Medium', sans-serif",
        weight: 400,
        Fmax: 18,
        Fmin: 14,
    })}

    .hidden {
        display: none;
    }

    //text-align: left;
`

const Name = styled.h2`
    // миксин для "резиновых" шрифтов
    ${font({
        family: "'Gilroy-Bold', sans-serif",
        weight: 700,
        Fmax: 47,
        Fmin: 34,
    })}
    text-align: left;

    // для переноса текста в два слова
    span {
        display: block;
    }

    @media ${theme.media.mobile} {
        span {
            display: inline;
        }
    }
`

const Photo = styled.img`
    display: block;
    max-width: 1170px;
    width: 100%;
    object-fit: cover;

    margin: 0 auto;

    /* @media  ${theme.media.mobile} {

    } */
`

export const S = {
    Main,
    MainTitle,
    Name,
    JobCityInfo,
    Photo,
}
