import React from 'react';
import styles from './Skills.module.css';
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from "./Skill/Skill";

export const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex} ${styles.skillsContainer}`}>
                <h2 className={styleContainer.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title={'Type Scripts'}/>
                    <Skill title={'Java Scripts'}/>
                    <Skill title={'HTML'}/>
                    <Skill title={'SCSS'}/>
                </div>
            </div>

        </div>
    );
};

