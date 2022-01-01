import React from 'react';
import styles from './Project.module.scss'
import projectImg from '../../common/images/photo-1572177812156-58036aae439c.jpg'

export const Project = () => {
    return (
        <div className={styles.projectBlock}>
            <div className={styles.imgContainer}>
                <img src={projectImg} alt="project pic"/>
                <div className={styles.menu}> <a  href="#">Показать </a></div>

            </div>
            <h3>Name Project</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos, exercitationem nam nihil nostrum officia optio quasi tempore? Eius esse hic, officiis perferendis quaerat ullam. Facilis libero obcaecati quis rerum tempora!</p>
        </div>
    );
};
