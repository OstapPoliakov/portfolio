import styled from "styled-components"
import { theme } from "../../assets/styles/Theme"

const Header = styled.header`
    padding: 30px 0;
    margin: 0 auto;

    background-color: ${theme.colors.primaryBg};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 999;

    @media ${theme.media.tablet} {
        background-color: ${theme.colors.mobileNav};
        //backdrop-filter: blur(4px);

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
            bottom: 0px;
            transform: translateX(-50%);
        }
    }
`

export const S = {
    Header,
}
