import React from "react";
import iconsSprite from "../../assets/images/icons-sprite.svg";
import styled from "styled-components";

type IconPropsType = {
    iconId: string
    width?: string
    height?: string
    viewBox?: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
    return (
        <StyledIcon>
            <svg width={props.width || "120px"} height={props.height || "120px"} viewBox={props.viewBox || "0 0 120 120"} fill="none" xmlns="http://www.w3.org/2000/svg">
                <use xlinkHref={`${iconsSprite}#${props.iconId}`} />
            </svg>
        </StyledIcon>
    );
}

const StyledIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`