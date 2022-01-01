import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";

type SkillsPropsType = {
    theme: string
}

export const Skills = ({theme}: SkillsPropsType) => {
    return (
        <div className={`${styles.skillsBlock} ${theme}`}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex} ${styles.skillsContainer}`}>
                <h2 className={styleContainer.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill theme={theme} title={'Type Scripts'}/>
                    <Skill theme={theme} title={'Java Scripts'}/>
                    <Skill theme={theme} title={'HTML'}/>
                    <Skill theme={theme} title={'SCSS'}/>
                </div>
            </div>

        </div>
    );
};



