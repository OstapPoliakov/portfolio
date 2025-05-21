import React from "react";
import { Container } from "../../../components/Container.ts";
import { SectionTitle } from "../../../components/SectionTitle.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { EducationMenu } from "./educationMenu/EducationMenu";
import { S } from "./Education_Styles";
import { Fade } from "react-awesome-reveal";

const EDUCATION_YEARS = ["2015", "2018", "2020", "2025"]
const EDUCATION_DESCRIPTION = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia?",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, quia?"
]

export const Education: React.FC = () => {
    return (
        <S.Education id="education">
            <Container>
                <SectionTitle>Education</SectionTitle>
                {/* <FlexWrapper direction="row" align="center"> */}
                {/* <Fade cascade direction="left" triggerOnce> */}
                    <EducationMenu menuTitleItems={EDUCATION_YEARS} menuDescritpionItems={EDUCATION_DESCRIPTION}/>
                {/* </Fade> */}
                {/* </FlexWrapper> */}
            </Container>
        </S.Education>
    )
}