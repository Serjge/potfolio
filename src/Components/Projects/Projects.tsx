import React from 'react';
import styleContainer from '../../common/styles/Container.module.scss'
import styles from './Projects.module.scss'
import {Project} from "./Project/Project";
import projectImg from '../../common/images/photo-1572177812156-58036aae439c.jpg'

type ProjectsPropsType = {
    theme: string
}

type ProjectType = {
    name: string
    description: string
    imgUrl: string
    projectUrl: string
    gitUrl: string
}

const project: ProjectType[] = [
    {
        name: 'Name Project1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
        imgUrl: projectImg,
        projectUrl: 'https://serjge.github.io/potfolio/',
        gitUrl: 'https://github.com/Serjge/potfolio',
    },
    {
        name: 'Name Project2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
        imgUrl: projectImg,
        projectUrl: 'https://serjge.github.io/potfolio/',
        gitUrl: 'https://github.com/Serjge/potfolio',
    },
    {
        name: 'Name Project3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
        imgUrl: projectImg,
        projectUrl: 'https://serjge.github.io/potfolio/',
        gitUrl: 'https://github.com/Serjge/potfolio',
    },
    {
        name: 'Name Project4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
        imgUrl: projectImg,
        projectUrl: 'https://serjge.github.io/potfolio/',
        gitUrl: 'https://github.com/Serjge/potfolio',
    },
    {
        name: 'Name Project5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!',
        imgUrl: projectImg,
        projectUrl: 'https://serjge.github.io/potfolio/',
        gitUrl: 'https://github.com/Serjge/potfolio',
    },
]


export const Projects = ({theme}: ProjectsPropsType) => {
    return (
        <div className={`${styles.projectsBlock} ${theme}`}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex} ${styles.container}`}>
                <h3 className={styleContainer.title}>Project</h3>
                <div className={styles.projectWrapper}>
                    {project.map((p, i) => {
                        return <Project key={i}
                                        name={p.name}
                                        description={p.description}
                                        imgUrl={p.imgUrl}
                                        projectUrl={p.projectUrl}
                                        gitUrl={p.gitUrl}
                        />
                    })}
                </div>
            </div>

        </div>
    );
};
