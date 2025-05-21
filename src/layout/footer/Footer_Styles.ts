import styled from "styled-components"
import { theme } from "../../assets/styles/Theme"

const Footer = styled.footer`
    background-color: ${theme.colors.secondaryBg};
    padding-bottom: 100px;
`
const Name = styled.span``

const SocialList = styled.ul`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    margin: 0 0 20px;
`
const SocialItem = styled.li`
    list-style-type: none;
`
const SocialIconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;

    transition: ${theme.animations.transition};
    color: ${theme.colors.font};

    // визуальный эффект при наведении на иконки со ссылками на соц.сети
    // только для desktop
    @media (hover: hover) {
        &:hover {
            color: ${theme.colors.fontFooter};
            transform: translateY(-2px);
        }
    }
    /* 
    @media ${theme.media.tablet} {
        &:hover {
            color: currentColor;
            transform: translateY(0px);
        }
    } */
`
const Copyright = styled.small`
    font-weight: 400;
    font-size: 14px;
    opacity: 0.9;
    color: ${theme.colors.fontFooter};

    span {
        display: block;
    }
`

export const S = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialIconLink,
    Copyright,
}
