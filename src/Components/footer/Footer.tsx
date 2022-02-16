import React from 'react';
import styles from "./Footer.module.scss";
import {GitHub, Linkedin, Telegram} from "common";
import {Wrapper} from "Components";

export const Footer = () => {
  return (
    <footer>
      <Wrapper title={'Serjge'}>
        <div className={styles.socialWrapper}>
          <a rel="noreferrer noopener" target="_blank"
             href={"https://www.linkedin.com/in/serjge/"}><Linkedin/></a>
          <a rel="noreferrer noopener" target="_blank"
             href={"https://github.com/Serjge"}><GitHub/></a>
          <a rel="noreferrer noopener" target="_blank"
             href={"https://t.me/Serjge"}><Telegram/></a>
        </div>
      </Wrapper>
      <span className={styles.span}>© 2022 Serjge Все права защищены </span>
    </footer>
  );
};

