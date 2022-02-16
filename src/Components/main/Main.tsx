import styles from './Main.module.scss'
import avatar from 'common/images/50be3f19d835269906d360b1bc5173f4.png'

export const Main = () => {
  return (
    <div>
      <div className={` ${styles.mainContainer}`}>
        <div className={styles.text}>

          <h1>Привет я <span>Sergey Dudkin </span> Frontend Developer</h1>
          <h5>Этот сайт мое портфолио сделанное на технологиях CRA, здесь вы можите посмотреть мои проекты и найти мои контакты.</h5>
          <h5> Я надеюсь тебе понравится!</h5>
        </div>
        <div className={styles.photo}>
          <img src={avatar} alt="avatar"/>
        </div>
      </div>
    </div>
  );
};
