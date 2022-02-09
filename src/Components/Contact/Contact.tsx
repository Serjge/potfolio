import React from 'react';
import styles from "./Contact.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
import {Button} from "../Button/Button";
type ContactPropsType = {
    theme: string
}

export const Contact = ({theme}:ContactPropsType) => {
    return (
        <div className={`${styles.contactBlock} ${theme}`}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex}`}>
                <h3 className={styleContainer.title}>Contact</h3>

                <form className={styles.contactWrapper}>
                    Name
                    <input type={"text"}/>
                    Email
                    <input type={"email"}/>
                    You message
                    <textarea />
                    <Button label={'Send'} onClick={()=>{}}/>
                </form>


            </div>

        </div>
    );
};

