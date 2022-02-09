import React from 'react';
import styles from './Header.module.scss'
import {Nav} from "../Nav/Nav";
import styleContainer from "../../common/styles/Container.module.scss";

type HeaderPropsType = {
    onClick: ()=> void
    theme: string
    themeName: string
}

export const Header = ({ onClick, theme, themeName}:HeaderPropsType) => {

    return (
        <header className={`${styles.header} ${theme}`}>
            <div className={`${styleContainer.container} ${styles.headerNav}`}>

                <Nav/>
                {/*<Button onClick={onClick} label={themeName} />*/}
            </div>
        </header>
    );
};

