import styled, { css } from "styled-components"
import { theme } from "../../../assets/styles/Theme"
import { StyledButton } from "../../../components/Button.ts"

const Projects = styled.section``

const ProjectLinkWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
`

const Link = styled.a`
    font-weight: 400;
    font-size: 18px;
    color: ${theme.colors.fontCard};

    position: relative;

    // визуальный эффект подчеркивания ссылок линией при наведении
    // только для desktop
    @media (hover: hover) {
        &:hover {
            &::before {
                height: 2px;
                transform: scaleX(1);
            }
        }

        &::before {
            content: "";
            display: inline-block;
            background-color: ${theme.colors.fontCard};

            position: absolute;
            bottom: 8px;
            left: 0px;
            right: 0px;
            height: 0;

            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.2s ease-in-out;
        }
    }
`

const Project = styled.div`
    background-color: ${theme.colors.cardBgDark};
    /* width: 330px;
    flex-grow: 1; */

    ${Link} {
        padding: 10px 0;

        /* & + ${Link} {
            margin-left: 20px;
        } */

        /* @media ${theme.media.tablet} {
            text-decoration: underline;
        } */
    }

    /* @media ${theme.media.desktop} {
        // максимальная ширина карточки с проектом будет ограничиваться только на desktop
        max-width: 540px;
    } */
`

const ImageWrapper = styled.div`
    position: relative;

    // оверлей, на изображении проекта (с эффектом блюра)
    // по умолчанию спрятан
    &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;

        background: rgba(0, 0, 0, 0.3);
        backdrop-filter: blur(3px);
        // по умолчанию прячем
        opacity: 0;
        transition: ${theme.animations.transition};
    }

    // оверлей, при наведении на изображение проекта
    // включаем отображение
    &:hover {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;
            transform: translate(-50%, -50%);
        }
    }

    ${StyledButton} {
        //по умолчанию скрыта
        opacity: 0;

        position: absolute;
        left: 50%;
        top: 50%;

        // выравниваем по центру род.блока
        // размер дефолтный
        transform: translate(-50%, -50%) scale(1);
        transition: ${theme.animations.transition};

        background-color: ${theme.colors.secondaryBg};
        color: ${theme.colors.buttonBg};

        // эффект на кнопке при наведении и нажатии
        // только для desktop
        @media (hover: hover) {
            transform: translate(-50%, -40%) scale(1);

            &:hover {
                transform: translate(-50%, -50%) scale(1.04);
            }

            &:active {
                transform: translate(-50%, -50%) translateY(1px);
            }
        }
    }

    @media ${theme.media.tablet} {
        &::before {
            opacity: 1;
        }

        ${StyledButton} {
            opacity: 1;

            &:hover {
                transform: translate(-50%, -50%);
            }
        }
    }
`

const Image = styled.img`
    width: 100%;
    height: 260px;
    object-fit: cover;
`

const Title = styled.h3``

const Text = styled.p`
    margin: 20px 0 15px;
`

const Description = styled.div`
    padding: 25px 20px;
    color: ${theme.colors.fontCard};
`

const TabMenu = styled.nav`
    ul {
        display: flex;
        //gap: 40px;
        justify-content: space-between;
        list-style: none;
        max-width: 352px;
        width: 100%;
        margin: 0 auto 50px;
    }
`

const ListItem = styled.li``

const TabLink = styled.a<{ active?: boolean }>`
    font-weight: 700;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 10px 0;
    position: relative;

    // визуальный эффект при наведении на tabMenu
    // только на desktop
    @media (hover: hover) {
        &:hover {
            &::before {
                height: 2px;
                transform: scaleX(1);
            }
        }

        &::before {
            content: "";
            display: inline-block;
            background-color: ${theme.colors.font};

            position: absolute;
            bottom: 4px;
            left: 0px;
            right: 0px;
            height: 0;

            transform: scaleX(0);
            transform-origin: center;
            transition: transform 0.2s ease-in-out;

            ${(props) =>
                props.active &&
                css<{ active?: boolean }>`
                    height: 2px;
                    transform: scaleX(1);
                `}
        }
    }

    /* @media ${theme.media.tablet} {
        text-decoration: underline;
    } */
`

export const S = {
    Projects,
    Project,
    ImageWrapper,
    Image,
    Title,
    Description,
    Text,
    ProjectLinkWrapper,
    Link,
    TabMenu,
    ListItem,
    TabLink,
}
