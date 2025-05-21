import { DesktopMenu } from "./headerMenu/desktopMenu/DesktopMenu"
import { Container } from "../../components/Container.ts"
import { MobileMenu } from "./headerMenu/mobileMenu/MobileMenu"
import React from "react"
import { S } from "./Header_styles"

// const headerItems = ["Home", "About me", "Education", "Skills", "My Projects", "Contacts"]
// const headerIdItems = ["#", "#about", "#education", "#skills", "#projects", "#contacts"]

export const Header: React.FC = () => {

    // создаем переменную состояния для отслеживания
    // изменения размера экрана устройства
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 768;

    // слушатель события "resize"
    React.useEffect(() => {
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);
        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        <S.Header>
            <Container>
                {width < breakpoint ? <MobileMenu />
                                    : <DesktopMenu />}
            </Container>
        </S.Header>
    )
}