import React from "react";
import { S } from "../Projects_Styles";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
    tabsItems: Array<{status: TabsStatusType, title: string}>
    changeFilterStatus: (type: TabsStatusType) => void
    currentFilterStatus: TabsStatusType
}

export const TabMenu: React.FC<TabMenuPropsType> = (props: TabMenuPropsType ) => {
    return (
        <S.TabMenu>
            <ul>
                {props.tabsItems.map((item: {status: TabsStatusType, title: string}, index: number) => {
                    return(
                        <S.ListItem key={index}>
                            <S.TabLink active={props.currentFilterStatus === item.status} as={"button"} onClick={ () => {props.changeFilterStatus(item.status)} }>{item.title}</S.TabLink>
                        </S.ListItem>
                    )
                })}
            </ul>
        </S.TabMenu>
    )
}