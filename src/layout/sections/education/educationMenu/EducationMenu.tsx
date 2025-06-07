import React from "react";
import { S } from "../Education_Styles";
import { Fade } from "react-awesome-reveal";
import { EducationItemType } from "../Education";

// type MenuPropsType = {
//     menuTitleItems: Array<string>
//     menuDescritpionItems: Array<string>
// }

type MenuPropsType = {
    menuItems: EducationItemType[]
}

export const EducationMenu: React.FC<MenuPropsType> = (props: MenuPropsType ) => {
    return (
        <S.EducationMenu>
            <ul>
                <Fade cascade direction="left" triggerOnce damping={0.3}>
                    {props.menuItems.map((item: EducationItemType, index: number) => {
                        return(
                            <li key={index}>
                                <S.Year>{item.year}</S.Year>
                                <S.Title>{item.title}</S.Title>
                                <S.Paragraph>{item.degree}</S.Paragraph>
                            </li>
                        )
                    })}
                </Fade>
            </ul>
        </S.EducationMenu>
    )
}