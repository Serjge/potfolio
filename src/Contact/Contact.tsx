import React from 'react';
import styles from "./Contact.module.scss";
import styleContainer from "../common/styles/Container.module.scss";


export const Contact = () => {
    return (
        <div className={styles.contactBlock}>
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

