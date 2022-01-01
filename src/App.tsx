import React, {useState} from 'react';
import './App.scss';
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import {Skills} from "./Components/Skills/Skills";
import {Projects} from "./Components/Projects/Projects";
import {Contact} from "./Components/Contact/Contact";
import {Footer} from "./Components/Footer/Footer";
import './Components/theme/theme.scss'

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
            <Header themeName={themeName} theme={theme} onClick={onClick}/>
            <Main theme={theme}/>
            <Skills theme={theme}/>
            <Projects theme={theme}/>
            <Contact theme={theme}/>
            <Footer theme={theme}/>
        </div>
    );
}

