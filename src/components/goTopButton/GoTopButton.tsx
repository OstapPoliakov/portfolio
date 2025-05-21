import React, { useEffect, useState } from 'react';
import { Icon } from '../icon/Icon';
import styled from 'styled-components';
import { theme } from '../../assets/styles/Theme';
import { animateScroll as scroll} from 'react-scroll';

export const GoTopButton: React.FC = () => {

    const [showGoTopBtn, setShowGoTopBtn] = useState(false)

    useEffect( () => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 200) {
                setShowGoTopBtn(true)
            } else {
                setShowGoTopBtn(false)
            }
        })
    }, [])

    return (
        <>
            {showGoTopBtn && (
                <StyledGoTopBtn onClick={() => {scroll.scrollToTop()} }>
                    <Icon iconId={"goTop"} width="30px" height="30px"/>
                </StyledGoTopBtn>
            )}
        </>
    )
}

const StyledGoTopBtn = styled.button`
    background-color: ${theme.colors.arrowGoTopBg};
    color: ${theme.colors.arrowGoTop};
    padding: 8px;

    position: fixed;
    bottom: 30px;
    right: 30px;
    border-radius: 50%;

    cursor: pointer;

    /* transition-property: background-color;
    transition-duration: 0.3s;
    transition-timing-function: ease-in-out; */

    //transform: scale(1);
    transition: ${theme.animations.transition};

    @media ${theme.media.tablet} {
        bottom: 20px;
        right: 20px;
    }

    @media (hover: hover) {
        &:hover {
            transform: scale(1.1);
        }
    }
`