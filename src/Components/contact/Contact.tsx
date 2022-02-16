import styles from "./Contact.module.scss";
import {Button, Wrapper} from "Components";

export const Contact = () => {
  return (
    <Wrapper title={'Contact'}>
      <form className={styles.contactWrapper}>
        Name
        <input type={"text"}/>
        Email
        <input type={"email"}/>
        You message
        <textarea/>
        <Button label={'Send'}
                onClick={() => {
                }}/>
      </form>
    </Wrapper>
  );
};

