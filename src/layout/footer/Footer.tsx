import React from "react";
import { Icon } from "../../components/icon/Icon";
import { FlexWrapper } from "../../components/FlexWrapper.ts";
import { Container } from "../../components/Container.ts";
import { S } from "./Footer_Styles";

const SOCIAL_ICON_SIZE = "45px"
const socialItemsData = [
    {
        iconId: "vk",
        ariaLabel: "link on vk profile",
        href: "https://vk.com/id11090252"
    },
    {
        iconId: "linkedin",
        ariaLabel: "link on linkedin profile",
        href: "https://ru.linkedin.com"
    },
    {
        iconId: "telegram",
        ariaLabel: "link on telegram profile",
        href: "https://t.me/cortezos"
    },
    {
        iconId: "github",
        ariaLabel: "link on github profile",
        href: "https://github.com/OstapPoliakov"
    },
]

export const Footer: React.FC = () => {
    return (
        <S.Footer id="footer">
            <Container>
                <FlexWrapper direction={"column"} align={"center"} justify={"space-around"} gap={"5px"}>
                    <S.SocialList>

                        {socialItemsData.map( (s, index) => {
                            return (
                                <S.SocialItem key={index}>
                                    <S.SocialIconLink aria-label={s.ariaLabel}
                                                    href={s.href}
                                                    target="_blank"
                                                    rel="noopener noreferrer"> 
                                        <Icon iconId={s.iconId} width={SOCIAL_ICON_SIZE} height={SOCIAL_ICON_SIZE} viewBox={"0 0 120 120"}></Icon>
                                    </S.SocialIconLink>
                                </S.SocialItem>
                            )
                        })}

                    </S.SocialList>
                    <S.Name>Ostap Poliakov, 2025</S.Name>
                    <S.Copyright>
                        <span>Contact me on VK, Linkedin, telegram.</span>
                        <span>Watch my projects on Github.</span>
                    </S.Copyright>
                </FlexWrapper>
            </Container>
        </S.Footer>
    )
}