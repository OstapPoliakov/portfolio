import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/SectionTitle.ts";
import { Icon } from "../../../components/icon/Icon";
import { Slider } from "../../../components/slider/Slider";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { Container } from "../../../components/Container.ts";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id="testimony">
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={"column"} align={"center"} gap={"20px"}>
                        <Icon iconId={"review"} width="100px" height="100px"/>
                        <Slider />
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

`