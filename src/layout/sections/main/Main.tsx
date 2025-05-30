import React from "react";
import photoLarge from "../../../assets/images/me2.jpg";
import photoSmall from "../../../assets/images/me_mobile.jpg";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { Container } from "../../../components/Container.ts";
import { S } from "./Main_Styles";
import Typewriter from 'typewriter-effect';
import { theme } from "../../../assets/styles/Theme.ts";
import { LanguageSwitcher } from "../../../components/LanguageSwitcher.tsx";

export const Main: React.FC = () => {

    // создаем переменную состояния для отслеживания
    // изменения размера экрана устройства
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 576;

    // слушатель события "resize"
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return (
        <S.Main id="home">
            <Container>
                <FlexWrapper justify={"space-between"} wrap={"wrap"}>
                    <S.Name>
                        <span>Ostap</span>
                        <span> Poliakov</span>
                    </S.Name>
                    <S.JobCityInfo>
                        <S.MainTitle>
                            <span className="hidden">Web developer, Frontend developer, Web designer</span>
                            <Typewriter
                                options={{
                                    strings: ["I'm a Frontend Developer", "I'm a Web Designer", "I'm the Specialist you need!"],
                                    autoStart: true,
                                    loop: true,
                                    delay: 90,
                                }}
                            />
                        </S.MainTitle>
                        <span>30 years old, Saint-Petersburg</span>
                    </S.JobCityInfo>
                    {width > breakpoint 
                    ?   <LanguageSwitcher />
                    :   null}
                </FlexWrapper>
                <picture>
                    <source srcSet={photoLarge} media={`${theme.media.desktop}`} />
                    <source srcSet={photoSmall} media={`${theme.media.mobile}`} />
                    <S.Photo src={photoLarge} alt="Web developer Poliakov Ostap, photo" />
                </picture>
            </Container>
        </S.Main>
    )
}
