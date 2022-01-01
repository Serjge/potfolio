import React from 'react';
import styles from './Header.module.css'
import {Nav} from "../Nav/Nav";
import styleContainer from "../common/styles/Container.module.css";

export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerNav}`}>
                <Nav/>
            </div>
        </header>
    );
};

