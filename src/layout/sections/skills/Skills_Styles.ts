import styled from "styled-components"
import { theme } from "../../../assets/styles/Theme"

type GridWrapperPropsType = {
    gap?: string
    justifyItems?: string
}

// общая секция со скилами
const Skills = styled.section``

const GridWrapper = styled.div<GridWrapperPropsType>`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: ${(props) => props.gap || "10px"};
    justify-items: ${(props) => props.justifyItems || "center"};
`

// отдлельно каждый скилл
const Skill = styled.div`
    padding: 10px 0;
`

const SkillTitle = styled.h3`
    color: ${theme.colors.fontSecondary};
    font-size: 14px;
    text-align: center;
    margin-top: 25px;
`

export const S = {
    Skills,
    GridWrapper,
    Skill,
    SkillTitle,
}
