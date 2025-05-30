import { Menu } from "../menu/Menu";
import { S } from "../HeaderMenu_Styles";
import { useState } from "react";
import { LanguageSwitcher } from "../../../../components/LanguageSwitcher";

// type MobileMenuPropsType = {
//     menuItems: Array<string>
//     menuIdItems: Array<string>
// }

export const MobileMenu: React.FC = () => {

    const [menuIsOpen, setMenuIsOpen] = useState(false)
    const onBurgerBtnClick = () => {
        setMenuIsOpen(!menuIsOpen)
    }

    return (
        <S.MobileMenu>
            <S.BurgerButton isOpen={menuIsOpen} onClick={onBurgerBtnClick}>
                <span></span>
            </S.BurgerButton>
            <S.MobileMenuPopup isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false)} }>
                <Menu isOpen={menuIsOpen} onClick={ () => {setMenuIsOpen(false)} }/>
                <LanguageSwitcher/>
            </S.MobileMenuPopup>
        </S.MobileMenu>
    );
};
