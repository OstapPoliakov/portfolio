import styled from "styled-components"
import { theme } from "../../../assets/styles/Theme"
import { font } from "../../../assets/styles/Common"

const Education = styled.section``

const Year = styled.h3`
    // миксин для "резиновости" шрифтов
    ${font({
        family: "'Gilroy-Bold', sans-serif",
        weight: 700,
        Fmax: 26,
        Fmin: 22,
    })}

    margin-bottom: 45px;
`

const EducationMenu = styled.div`
    ul {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        list-style: none;
        align-items: center;

        position: relative;
    }

    ul::before {
        content: "";
        display: block;
        height: 2px;
        //max-width: 865px;

        // изменяется ширина псевдоэлемента (декоративной линии таймлайна)
        width: 75%;
        //vertical-align: middle;
        //border-radius: 50%;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 50%;
        top: 68px;
        transform: translateX(-50%);
    }

    li {
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding: 20px;
        font-size: 18px;
        position: relative;
    }

    li::before {
        content: "";
        display: block;
        height: 18px;
        width: 18px;
        //vertical-align: middle;
        border-radius: 50%;
        background-color: ${theme.colors.font};

        position: absolute;
        left: 50%;
        top: 60px;
        transform: translateX(-50%);
    }

    @media ${theme.media.tablet} {
        ul {
            flex-direction: column;
            align-items: flex-start;
            max-width: 500px;
            margin: 0 auto;
        }

        // таймлайн перестраивается в колонку при размерах экрана для планшетов и телефонов
        ul::before {
            content: "";
            display: block;

            // изменяется выстоа псевдоэлемента (декоративной линии таймлайна)
            height: 75%;
            width: 2px;
            //vertical-align: middle;
            //border-radius: 50%;
            background-color: ${theme.colors.font};

            position: absolute;
            left: 20px;
            top: 32px;
            transform: translateX(-50%);
        }

        li {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            text-align: left;
            padding-left: 40px;
        }

        li::before {
            content: "";
            display: block;
            height: 18px;
            width: 18px;
            border-radius: 50%;
            background-color: ${theme.colors.font};

            position: absolute;
            left: 20px;
            top: 24px;
            //transform: translateX(-50%);
        }

        ${Year} {
            margin-bottom: 20px;
        }
    }
`

const Paragraph = styled.p`
    // миксин для "резиновости" шрифтов
    ${font({
        family: "'Gilroy-Medium', sans-serif",
        weight: 400,
        Fmax: 18,
        Fmin: 14,
    })}

    color: ${theme.colors.font};
    //padding-top: 20px 0;
`

export const S = {
    Education,
    EducationMenu,
    Year,
    Paragraph,
}
