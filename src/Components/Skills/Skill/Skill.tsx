import React from 'react';
import styles from './Skill.module.scss'

type SkillPropsType = {
    name: string
    description: string
    imgUrl: string
    theme: string
}

export const Skill = ({theme, name, imgUrl, description}: SkillPropsType) => {
    return (
        <div className={`${styles.skill} ${theme}`}>
            <div className={styles.icon}>
                <img src={imgUrl} alt={name + 'picture'}/>
            </div>
            <h3>{name}</h3>
            <span>{description}</span>
        </div>
    );
};
