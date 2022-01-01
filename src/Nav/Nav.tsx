import React from 'react';
import styles from "./Nav.module.css";

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <a href={'#'}>Глвная</a>
            <a href={'#'}>Скилы</a>
            <a href={'#'}>Проэкты</a>
            <a href={'#'}>Контакты</a>
        </nav>
    );
};

