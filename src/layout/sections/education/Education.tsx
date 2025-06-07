import React from "react";
import { Container } from "../../../components/Container.ts";
import { SectionTitle } from "../../../components/SectionTitle.ts";
import { EducationMenu } from "./educationMenu/EducationMenu";
import { S } from "./Education_Styles";

export type EducationItemType = {
    year: string
    title: string
    degree: string
}

const EDUCATION: EducationItemType[] = [
    {
        year: "2015",
        title: "Technical College of Management and Commerce",
        degree: "software technician"
    },
    {
        year: "2018",
        title: "Peter the Great St.Petersburg Polytechnic University",
        degree: "instrument design engineer (bachelor)"
    },
    {
        year: "2020",
        title: "Peter the Great St.Petersburg Polytechnic University",
        degree: "instrument design engineer (master)"
    },
    {
        year: "2025",
        title: "It-Incubator",
        degree: "software engineer"
    },
]

const EDUCATION_YEARS = ["2015", "2018", "2020", "2025"]
const EDUCATION_DESCRIPTION = [
    "Technical College of Management and Commerce, software technician",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia?"
]

export const Education: React.FC = () => {
    return (
        <S.Education id="education">
            <Container>
                <SectionTitle>Education</SectionTitle>
                {/* <EducationMenu menuTitleItems={EDUCATION_YEARS} menuDescritpionItems={EDUCATION_DESCRIPTION}/> */}
                <EducationMenu menuItems={EDUCATION} />
            </Container>
        </S.Education>
    )
}