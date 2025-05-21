import React from 'react';
import { S } from '../HeaderMenu_Styles';

const headerItems = [
    {
        title: "Home",
        href: "home",
    },
    {
        title: "About me",
        href: "about",
    },
    {
        title: "Education",
        href: "education",
    },
    {
        title: "Skills",
        href: "skills",
    },
    {
        title: "My Projects",
        href: "projects",
    },
    {
        title: "Contacts",
        href: "contacts",
    },
]

export const Menu: React.FC = () => {
    return (
        <ul>
            {headerItems.map((item: {href: string, title: string}, index: number) => {
                return(
                    <S.MenuItem key={index}>
                        <S.NavLink to={item.href}
                                    smooth={true}
                                    activeClass="active"
                                    spy={true}
                                    hashSpy={true}
                                    offset={-80}
                                    delay={0}
                                    ignoreCancelEvents={true}
                                    >{item.title}
                        </S.NavLink>
                    </S.MenuItem>
                )
            })}
                {/* <S.MenuItem>
                    <S.NavLink to={"contacts"}
                            smooth={true}
                            activeClass="active"
                            spy={true}
                            offset={10}
                            delay={0}
                            ignoreCancelEvents={true}
                            >{"Contacts"}
                    </S.NavLink>
                </S.MenuItem> */}
        </ul>
    )
}