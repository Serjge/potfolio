import styles from "./Contact.module.scss";
import {Button, Wrapper} from "Components";
import {ChangeEvent, useState} from "react";
import {API} from "../../api";

export const Contact = () => {

  const [alert, setAlert] = useState<string>()

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    const data = new FormData(e.currentTarget)
    const name = data.get('name')
    const email = data.get('email')
    const message = data.get('message')

    API.sendEmail(name, email, message)
      .then((res) => {
        if (res.status === 200) {
          setAlert('Письмо отправленно. Постораюсь ответить как можно быстрее.')
        }
      })
      .catch(() => {
        setAlert('Что то пошло не так попробуйте позже ')
      })


    e.preventDefault()
  }
  return (
    <Wrapper id={'contacts'} title={'Contact'}>
      <form onSubmit={onSubmit} className={styles.contactWrapper}>
        Name
        <input name={'name'} type={"text"}/>
        Email
        <input name={'email'} type={"email"}/>
        You message
        <textarea name={'message'}/>
        <Button label={'Send'}
                type={'submit'}/>
        {alert}
      </form>
    </Wrapper>
  );
};

