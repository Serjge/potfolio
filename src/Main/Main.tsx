import React from 'react';
import styles from './Main.module.css'
import styleContainer from '../common/styles/Container.module.css'
import avatar from  '../common/images/50be3f19d835269906d360b1bc5173f4.png'

export const Main = () => {
    return (
        <div className={styles.main}>
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
