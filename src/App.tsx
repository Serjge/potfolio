import {useState} from 'react';
import 'App.scss';
import './common/styles/theme/theme.scss'
import {Contact, Footer, Header, Main, Projects, Skills} from "Components";

export const App = () => {

  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [themeName, setThemeName] = useState<'Dark' | 'Light'>('Dark');

  const onClick = () => {
    if (theme === 'dark') {
      setTheme('light')
      setThemeName('Dark')
    } else {
      setTheme('dark')
      setThemeName('Light')
    }
  }

  return (
    <div className={`App ${theme}`}>
      <Header themeName={themeName}
              theme={theme} onClick={onClick}/>
      <Main/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

