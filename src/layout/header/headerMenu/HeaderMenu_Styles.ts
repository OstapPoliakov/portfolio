import styled, { css } from "styled-components"
import { font } from "../../../assets/styles/Common"
import { theme } from "../../../assets/styles/Theme"
import { StyledLanguageSwitcher } from "../../../components/LanguageSwitcher"
import { Link } from "react-scroll"

// ================================================
// menu
const MenuItem = styled.li``

const NavLink = styled(Link)`
    // миксин для "резиновости" шрифтов
    ${font({
        family: "'Gilroy-Bold', sans-serif",
        weight: 700,
        Fmax: 18,
        Fmin: 16,
    })}

    color: ${theme.colors.fontSecondary};
    cursor: pointer;
    transition: color 0.2s ease;

    &.active {
        color: ${theme.colors.font};
    }

    // эффект изменения цвета при наведении на ссылки
    // только для desktop
    @media (hover: hover) {
        &:hover {
            color: ${theme.colors.font};
        }
    }
`

// ================================================
// mobile menu
const MobileMenu = styled.nav``

// выплывающее окно с меню перехода по секциям
const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
    position: fixed;
    // позиционирование на весь экран
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // поверх всех остальных секций
    z-index: 99999;

    background-color: ${theme.colors.secondaryBg};
    //opacity: 0.99;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 100px;
    // изначально на 100% вбок
    // чтобы спрятать отображение
    transform: translateX(100%);
    transition: 0.35s ease-out;

    // отображение popup после нажатия бургер-кнопки
    ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
            // для отображения, возращаем сбоку экрана в начало
            transform: translateX(0);
        `}

    ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        list-style: none;
    }

    ${StyledLanguageSwitcher} {
        writing-mode: unset;
        display: unset;
        /* position: absolute;
        top: 25px;
        bottom: 0;
        left: 30px;
        right: 0; */
    }
`
const BurgerButton = styled.button<{ isOpen: boolean }>`
    position: fixed;
    width: 40px;
    height: 40px;
    top: 5px;
    right: 15px;
    z-index: 9999999;

    // основная (среднаяя) линия бургер-меню
    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${theme.colors.font};

        position: absolute;
        top: 20px;
        right: 0px;

        // скрывать среднюю линию после нажатия бургер-кнопки
        // (делаем ей 100% прозрачность)
        ${(props) =>
            props.isOpen &&
            css<{ isOpen: boolean }>`
                background-color: rgba(255, 255, 255, 0);
            `}

        // верхняя линия бургер-меню
        &::before {
            content: "";
            display: block;
            width: 36px;
            height: 2px;
            background-color: ${theme.colors.font};

            position: absolute;
            transform: translateY(-10px);

            // поворот верхней линии на -45 градусов (+сдвиг вниз) для превращения всей кнопки в крестик
            // (визуальный эффект)
            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: rotate(-45deg) translateY(0);
                `}
        }

        // нижняя (маленькая) линия бургер-меню
        &::after {
            content: "";
            display: block;
            width: 26px;
            height: 2px;
            background-color: ${theme.colors.font};

            position: absolute;
            transform: translateY(10px) translateX(10px);

            // поворот нижней линии на 45 градусов (+сдвиг вверх) для превращения всей кнопки в крестик
            // (визуальный эффект)
            ${(props) =>
                props.isOpen &&
                css<{ isOpen: boolean }>`
                    transform: rotate(45deg) translateY(0);
                    width: 36px;
                `}
        }
    }
`

// ================================================
// desktop menu
const DesktopMenu = styled.nav`
    ul {
        display: flex;
        justify-content: space-between;
        list-style: none;
        position: relative;

        // псевдоэлемент для отображения серой линии под navbar'ом
        &::before {
            content: "";
            display: inline-block;
            //min-width: 1140px;
            width: 100%;
            height: 1px;
            background-color: ${theme.colors.fontSecondary};

            position: absolute;
            left: 50%;
            bottom: -31px;
            transform: translateX(-50%);
        }
    }
`

export const S = {
    NavLink,
    MenuItem,
    MobileMenu,
    MobileMenuPopup,
    BurgerButton,
    DesktopMenu,
}
