import React from "react";
import { SectionTitle } from "../../../components/SectionTitle.ts";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { Container } from "../../../components/Container.ts";
import { S } from "./About_Styles";
import { Fade } from "react-awesome-reveal";

export const About: React.FC = () => {
    return (
        <S.About id="about">
            <Container>
            <SectionTitle>About me</SectionTitle>
                <FlexWrapper align={"center"} wrap={"nowrap"} direction={"column"} justify={"space-between"} gap={"50px"}>
                    <Fade cascade direction="up" triggerOnce>
                        <S.InfoParagraph>
                            <span>Hi, my name is Ostap Poliakov. I'm a Web Developer.</span>
                            <span>I'm interested in creating responsive, quality web applications for you.</span>
                        </S.InfoParagraph>
                        <S.InfoParagraph>
                            I'm studying at courses "Frontend developer" in "It-Incubator".
                        </S.InfoParagraph>
                        <S.InfoParagraph>
                            I'm ready to help you bring your ideas to life!
                        </S.InfoParagraph>
                    </Fade>
                </FlexWrapper>
            </Container>
        </S.About>
    )
}