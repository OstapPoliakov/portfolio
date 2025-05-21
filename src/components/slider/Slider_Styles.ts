import styled from "styled-components"
import { theme } from "../../assets/styles/Theme"

const Slider = styled.div`
    //border: 1px solid red;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Slide = styled.div`
    text-align: center;
`

const Text = styled.p``

const Name = styled.span`
    display: inline-block;
    font-weight: 400;
    font-size: 18px;
    letter-spacing: 1.2;

    margin: 22px 0 42px;
`

const Pagination = styled.div`
    span {
        display: inline-block;
        width: 7px;
        height: 7px;

        border-radius: 20px;
        background-color: ${theme.colors.font};

        & + span {
            margin-left: 5px;
        }

        &.active {
            background-color: ${theme.colors.font};
            width: 20px;
        }
    }
`

export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination,
}
