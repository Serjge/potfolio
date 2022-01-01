import React from 'react';
import styles from "./Contact.module.scss";
import styleContainer from "../../common/styles/Container.module.scss";
type ContactPropsType = {
    theme: string
}

export const Contact = ({theme}:ContactPropsType) => {
    return (
        <div className={`${styles.contactBlock} ${theme}`}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex}`}>
                <h2 className={styleContainer.title}>Contact</h2>

                <form className={styles.contactWrapper}>
                    Name
                    <input type={"text"}/>
                    email
                    <input type={"email"}/>
                    you message
                    <textarea />
                    <button>Send</button>
                </form>


            </div>

        </div>
    );
};

