import React from "react";
import { Skill } from "./skill/Skill";
import { SectionTitle } from "../../../components/SectionTitle";
import { Container } from "../../../components/Container.ts";
import { S } from "./Skills_Styles";
import { Fade } from "react-awesome-reveal";

const GAP = "20px";
const skillData = [
    {
        iconId: "html",
        title: "HTML5",
    },
    {
        iconId: "css",
        title: "CSS3",
    },
    {
        iconId: "JavaScript",
        title: "JavaScript",
    },
    {
        iconId: "TypeScript",
        title: "TypeScript",
    },
    {
        iconId: "react",
        title: "React",
    },
    {
        iconId: "redux",
        title: "RTK Query",
    },
    {
        iconId: "formik",
        title: "Formik",
    },
    {
        iconId: "storybook",
        title: "Storybook",
    },
    {
        iconId: "mui",
        title: "Material UI",
    },
    {
        iconId: "styled",
        title: "Styled-components",
    },
    {
        iconId: "git",
        title: "Git",
    },
    {
        iconId: "figma",
        title: "Figma",
    },

]

export const Skills: React.FC = () => {
    return (
        <S.Skills id="skills">
            <Container>
                <SectionTitle>My Tech Stack</SectionTitle>
                <S.GridWrapper gap={GAP} justifyItems={"center"}>
                    <Fade cascade damping={0.03} triggerOnce>
                    {
                        // мапимся по объекту со скиллами
                        // отрисовываем каждый в виде компоненты, возвращающей JSX
                        skillData.map((s, index) => {
                            return <Skill iconId={s.iconId} title={s.title} key={index}/>
                    })}
                    </Fade>
                </S.GridWrapper>
            </Container>
        </S.Skills>
    );
};

