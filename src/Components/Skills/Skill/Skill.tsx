import React from 'react';
import styles from './Skill.module.scss'

type SkillPropsType = {
    title: string
    theme: string
}

export const Skill = ({title, theme}: SkillPropsType) => {
    return (
        <div className={`${styles.skill} ${theme}`}>
            <div className={styles.icon}></div>
            <h3>{title}</h3>
            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur corporis dicta ducimus error harum illum ipsum natus non numquam odit, officiis pariatur perferendis, quo quod rerum? Accusantium amet atque obcaecati.</span>
        </div>
    );
};
