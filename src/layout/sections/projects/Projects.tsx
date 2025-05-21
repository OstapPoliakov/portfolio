import React, { useState } from "react";
import { SectionTitle } from "../../../components/SectionTitle.ts";
import { TabMenu, TabsStatusType } from "./tabMenu/TabMenu";
import { FlexWrapper } from "../../../components/FlexWrapper.ts";
import { Project } from "./project/Project";
import cryptoImage from './../../../assets/images/crypto.webp'
import socialImage from './../../../assets/images/social2.webp'
import { Container } from "../../../components/Container.ts";
import { S } from "./Projects_Styles";
import { Fade } from "react-awesome-reveal";
import { AnimatePresence, motion } from "framer-motion";

const tabsItems: Array<{status: TabsStatusType, title: string}> = [
    {
        title: "All",
        status: "all"
    },
    {
        title: "Landing",
        status: "landing"
    },
    {
        title: "React",
        status: "react"
    },
    {
        title: "SPA",
        status: "spa"
    },

]

const projectData = [
    {
        id: 1,
        title: "Crypto App",
        src: cryptoImage,
        alt: "Crypto web-application",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda quia molestiae sit officiis tempora labore quisquam laudantium totam. Sint dolorem quam molestias beatae deserunt dolore. Alias suscipit excepturi repudiandae.",
        type: "react",
        gitLink: "https://github.com/OstapPoliakov",
        demoLink: "#"
    },
    {
        id: 2,
        title: "Social network",
        src: socialImage,
        alt: "Social network website",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro assumenda quia molestiae sit officiis tempora labore quisquam laudantium totam. Sint dolorem quam molestias beatae deserunt dolore. Alias suscipit excepturi repudiandae.",
        type: "spa",
        gitLink: "https://github.com/OstapPoliakov",
        demoLink: "#"
    },
]

export const Projects: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState<TabsStatusType>("all")
    let filteredProjects = projectData

    switch(currentFilterStatus) { 
        case "landing": { 
            filteredProjects = projectData.filter( project => project.type === "landing") 
            break;
        } 
        case "react": { 
            filteredProjects = projectData.filter( project => project.type === "react") 
            break; 
        }
        case "spa": { 
            filteredProjects = projectData.filter( project => project.type === "spa") 
            break; 
        }
        default: { 
            filteredProjects = projectData 
            break; 
        }
    }

    function changeFilterStatus(type: TabsStatusType) {
        setCurrentFilterStatus(type)
    }

    return (
        <S.Projects id="projects">
            <Container>
                <SectionTitle>My Projects</SectionTitle>
                <TabMenu tabsItems={tabsItems} changeFilterStatus={changeFilterStatus} currentFilterStatus={currentFilterStatus}/>
                {/* <Fade triggerOnce damping={0.03}> */}
                <FlexWrapper justify={"center"} align={"flex-start"} gap={"30px"} wrap={"wrap"}>

                    <AnimatePresence>
                        {filteredProjects.map((p) => {
                            return (
                                <motion.div layout style={{width: "330px", flexGrow: 1, maxWidth: "540px"}}
                                   initial={{ opacity: 0}} 
                                   animate={{ opacity: 1}} 
                                   exit={{ opacity: 0}}
                                   key={p.id} 
                                >
                                    <Project title={p.title} src={p.src} alt={p.alt} text={p.text} gitLink={p.gitLink} demoLink={p.demoLink} key={p.id}/>
                                </motion.div>                           
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
                {/* </Fade> */}
            </Container>
        </S.Projects>
    )
}