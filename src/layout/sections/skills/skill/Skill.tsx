import React from "react";
import { Icon } from "../../../../components/icon/Icon";
import { S } from "../Skills_Styles";

const ICON_SIZE = "90px";

type SkillPropsType = {
    iconId: string
    title: string
    description?: string
    gap?: string
}

export const Skill: React.FC<SkillPropsType> = (props: SkillPropsType) => {
    return (
        <S.Skill>
            <Icon iconId = {props.iconId} width={ICON_SIZE} height={ICON_SIZE}/>
            <S.SkillTitle>{props.title}</S.SkillTitle>
        </S.Skill>
    )
}