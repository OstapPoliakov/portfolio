import React from "react";
import { StyledButton } from "../../../../components/Button.ts";
import { Icon } from "../../../../components/icon/Icon";
import { FlexWrapper } from "../../../../components/FlexWrapper.ts";
import { S } from "../Projects_Styles";

type ProjectPropsType = {
    title: string
    text: string
    src: string
    alt: string
    gitLink: string
    demoLink: string
}

type ProjectLinkPropsType = {
    title: string
    iconId: string
    link: string
}

const ProjectLink: React.FC<ProjectLinkPropsType> = (props: ProjectLinkPropsType) => {
    return (
        <S.ProjectLinkWrapper>
            <Icon iconId={props.iconId} width="24px" height="24px"/>
            <S.Link href={props.link} target="_blank" rel="noopener noreferrer">{props.title}</S.Link>
        </S.ProjectLinkWrapper>
    )
}

export const Project: React.FC<ProjectPropsType> = (props: ProjectPropsType) => {
    return (
        <S.Project>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={props.alt}/>
                <StyledButton type="button" as="a" href={props.demoLink} target="_blank" rel="noopener noreferrer">View demo</StyledButton>
            </S.ImageWrapper>
            <S.Description>
                <S.Title>{props.title}</S.Title>
                <S.Text>{props.text}</S.Text>
                <FlexWrapper direction={"row"} align={"center"} justify={"start"} gap={"30px"} wrap={"nowrap"}>
                    <ProjectLink iconId={"gitCodePreview"} title={"View code"} link={props.gitLink}/>
                    <ProjectLink iconId={"viewDemo_v2"} title={"View demo"} link={props.demoLink}/>
                </FlexWrapper>
            </S.Description>
        </S.Project>
    )
}
