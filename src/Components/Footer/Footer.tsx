import React from 'react';
import styles from "./Footer.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import {Linkedin} from "../../common/icon/Linkedin";
import {VK} from "../../common/icon/VK";
import {GitHub} from "../../common/icon/GitHub";
import {Telegram} from "../../common/icon/Telegram";

type FooterPropsType = {
    theme: string
}
export const Footer = ({theme}: FooterPropsType) => {
    return (
        <footer className={`${styles.footerBlock} ${theme}`}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex}`}>
                <h2 className={styleContainer.title}>Serjge</h2>
                <div className={styles.socialWrapper}>
                    {/*<a rel="noreferrer noopener" target="_blank" href={"https://linkedin.com"}><Linkedin/></a>*/}
                    {/*<a rel="noreferrer noopener" target="_blank" href={"https://vk.com"  }><VK/></a>*/}
                    {/*<a rel="noreferrer noopener" target="_blank" href={"https://github.com"}><GitHub/></a>*/}
                    {/*<a rel="noreferrer noopener" target="_blank" href={"https://t.me"}><Telegram/></a> */}

                    <a rel="noreferrer noopener" target="_blank" href={"https://linkedin.com"}><Linkedin/></a>
                    <a rel="noreferrer noopener" target="_blank" href={"https://vk.com"  }><VK/></a>
                    <a rel="noreferrer noopener" target="_blank" href={"https://github.com"}><GitHub/></a>
                    <a rel="noreferrer noopener" target="_blank" href={"https://t.me"}><Telegram/></a>
                </div>
                <span className={styles.span}>                © 2022 Serjge Все права защищены </span>
            </div>

        </footer>
    );
};

