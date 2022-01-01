import React from 'react';
import styles from './Main.module.scss'
import styleContainer from '../../common/styles/Container.module.scss'
import avatar from '../../common/images/50be3f19d835269906d360b1bc5173f4.png'

type MainPropsType = {
    theme: string
}

export const Main = ({theme}:MainPropsType) => {
    return (
        <div className={`${styles.main} ${theme}`}>
            <div className={`${styleContainer.container} ${styles.mainContainer}`}>
                <div className={styles.text}>
                    <span>Hi There</span>
                    <h1>I am Serjge</h1>
                    <p>Frontend Developer</p>
                </div>
                <div className={styles.photo}>
                    <img src={avatar} alt="avatar"/>
                </div>
            </div>
        </div>
    );
};
