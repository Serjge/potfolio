import styles from "./Nav.module.scss";
import { Link } from "react-scroll";


export const Nav = () => {

  return (
    <nav className={`${styles.nav} `}>

      <Link
        activeClass={styles.active}
        to="main"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Глвная</Link>
      <Link
        activeClass={styles.active}
        to="skills"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Скилы</Link>
      <Link
        activeClass={styles.active}
        to="projects"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Проэкты</Link>
      <Link
        activeClass={styles.active}
        to="contacts"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >Контакты</Link>

    </nav>
  );
};

