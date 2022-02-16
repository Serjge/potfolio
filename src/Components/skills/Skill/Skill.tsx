import styles from './Skill.module.scss'
import {ReactFragment} from "react";

type SkillPropsType = {
  name: string
  description: string
  icon: ReactFragment
}

export const Skill = ({ name, icon, description}: SkillPropsType) => {
  return (
    <div className={`${styles.skill}`}>
      <div className={styles.icon}>
        {icon}
      </div>
      <h3>{name}</h3>
      <span>{description}</span>
    </div>
  );
};
