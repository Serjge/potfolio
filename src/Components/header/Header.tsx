import styles from './Header.module.scss'
import styleContainer from "common/styles/Container.module.scss";
import {Button, Nav} from "Components";

type HeaderPropsType = {
  onClick: () => void
  theme: string
  themeName: string
}

export const Header = ({onClick, theme, themeName}: HeaderPropsType) => {

  return (
    <header className={`${styles.header} ${theme}`}>
      <div className={`${styleContainer.container} ${styles.headerNav}`}>
        <Nav/>
        {/*<Button label={themeName} onClick={onClick}/>*/}
      </div>
    </header>
  );
};

