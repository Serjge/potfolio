import styles from './Main.module.scss'
import avatar from 'common/images/me.jpg'

const LINK_CV = 'https://drive.google.com/file/d/1UHM5Ib4RX0P5DK9oPo7-3VHWqvjmJxWo/view?usp=sharing'

export const Main = () => {
  return (
    <div id={'main'}>
      <div className={` ${styles.mainContainer}`}>
        <div className={styles.text}>

          <h1>Привет я <span>Sergey Dudkin </span> Frontend Developer</h1>
          <h5>Этот сайт мое портфолио сделанное на технологиях CRA, здесь вы
            можите посмотреть мои проекты и найти мои контакты.</h5>
          <h5> Я надеюсь тебе понравится!</h5>
        </div>
        <div className={styles.photo}>
          <img src={avatar} alt="avatar"/>
        </div>
        <a className={styles.cv}
           rel="noreferrer noopener"
           target="_blank"
           href={LINK_CV}>
          Download CV</a>
      </div>
    </div>
  );
};
