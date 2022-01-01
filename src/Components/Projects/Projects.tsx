import React from 'react';
import styleContainer from '../../common/styles/Container.module.scss'
import styles from './Projects.module.scss'
import {Project} from "./Project/Project";

type ProjectsPropsType = {
    theme: string
}


export const Projects = ({theme}:ProjectsPropsType) => {
    return (
        <div className={`${styles.projectsBlock} ${theme}`}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex} ${styles.container}`}>
                <h2 className={styleContainer.title}>Project</h2>
                <div className={styles.projectWrapper}>
                    <Project/>
                    <Project/>
                    <Project/>
                </div>
            </div>

        </div>
    );
};
