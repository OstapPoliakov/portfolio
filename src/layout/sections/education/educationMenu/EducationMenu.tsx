import React from "react";
import { S } from "../Education_Styles";
import { Fade } from "react-awesome-reveal";

type MenuPropsType = {
    menuTitleItems: Array<string>
    menuDescritpionItems: Array<string>
}

export const EducationMenu: React.FC<MenuPropsType> = (props: MenuPropsType ) => {
    return (
        <S.EducationMenu>
            <ul>
                <Fade cascade direction="left" triggerOnce damping={0.3}>
                    {props.menuTitleItems.map((item: string, index: number) => {
                        return(
                            <li key={index}>
                                <S.Year>{item}</S.Year>
                                <S.Paragraph>
                                    {props.menuDescritpionItems[index]}
                                </S.Paragraph>
                            </li>
                        )
                    })}
                </Fade>
            </ul>
        </S.EducationMenu>
    )
}