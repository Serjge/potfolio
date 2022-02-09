import React from 'react';
import styles from './Project.module.scss'

type ProjectPropsType = {
    name: string
    description: string
    imgUrl: string
    projectUrl: string
    gitUrl: string
}

export const Project = ({
                            name,
                            description,
                            projectUrl,
                            imgUrl,
                            gitUrl
                        }: ProjectPropsType) => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.imgContainer}>
                <img src={imgUrl} alt="project pic"/>
                <h3 className={styles.title}>{name}</h3>
                <div className={styles.overlay}/>
                <div className={styles.menu}>
                    <a href={projectUrl}>Project page</a>
                    <a href={gitUrl}>Project git repository</a>
                </div>
            </div>
            <p>{description}</p>
        </div>
    );
};
