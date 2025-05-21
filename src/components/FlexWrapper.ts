import styled from "styled-components"

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    padding?: string
}

export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-direction: ${(props) => props.direction};
    justify-content: ${(props) => props.justify};
    align-items: ${(props) => props.align};
    flex-wrap: ${(props) => props.wrap};
    gap: ${(props) => props.gap};
    padding: ${(props) => props.padding};
`
