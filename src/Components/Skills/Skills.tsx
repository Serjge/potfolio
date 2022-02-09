import React from 'react';
import styles from './Skills.module.scss';
import styleContainer from '../../common/styles/Container.module.scss'
import {Skill} from "./Skill/Skill";

type SkillsPropsType = {
    theme: string
}

type SkillsType = {
    name: string
    description: string
    imgUrl: string
}

const skills: SkillsType[] = [
    {
        name: 'HTML',
        description: 'HyperText Markup Language язык гипертекстовой разметки — стандартизированный язык разметки документов для просмотра веб-страниц в браузере.',
        imgUrl: 'https://www.bryan-myers.com/images/4x3/html5.png'
    },
    {
        name: 'SCSS',
        description: 'Syntactically Awesome Stylesheets это метаязык на основе CSS, ' +
            'предназначенный для увеличения уровня абстракции CSS-кода и упрощения файлов каскадных таблиц стилей.',
        imgUrl: 'http://getdrawings.com/free-icon/sass-icon-53.png'
    },
    {
        name: 'TypeScript',
        description: 'Язык программирования, позиционируемый как средство разработки веб-приложений, ' +
            'расширяющее возможности JavaScript.',
        imgUrl: 'https://blog.submain.com/wp-content/uploads/2020/12/typescript_2500.png'
    },
    {
        name: 'JavaScript',
        description: ' Mультипарадигменный язык программирования. Поддерживает объектно-ориентированный, ' +
            'императивный и функциональный стили.',
        imgUrl: 'https://miro.medium.com/max/1200/1*llJt50vmN4eWbSbf0Eyoaw.png'
    },
    {
        name: 'React',
        description: 'JavaScript-библиотека с открытым исходным кодом для разработки пользовательских интерфейсов. ',
        imgUrl: 'https://miro.medium.com/max/1200/1*K-4RqDC6zFrpAG31ayDDOg.png'
    },
    {
        name: 'Redux',
        description: ' библиотека для JavaScript с открытым исходным кодом, предназначенная для управления состоянием приложения.',
        imgUrl: 'https://uploads-ssl.webflow.com/5eacc8815c6b73d93d13b2f5/5ed819a41bec6275eade8334_Redux-p-800.jpeg'
    },

]

export const Skills = ({theme}: SkillsPropsType) => {
    return (
        <div className={`${styles.skillsBlock} ${theme}`}>
            <div className={`${styleContainer.container} ${styleContainer.containerFlex} ${styles.skillsContainer}`}>
                <h3 className={styleContainer.title}>Skills</h3>
                <div className={styles.skills}>
                    {skills.map((s, i) => {
                        return <Skill
                            key={i}
                            theme={theme}
                            name={s.name}
                            imgUrl={s.imgUrl}
                            description={s.description}
                        />
                    })}


                    {/*<Skill theme={theme} title={'Type Scripts'}/>*/}
                    {/*<Skill theme={theme} title={'Java Scripts'}/>*/}
                    {/*<Skill theme={theme} title={'HTML'}/>*/}
                    {/*<Skill theme={theme} title={'SCSS'}/> <Skill theme={theme} title={'Java Scripts'}/>*/}
                    {/*<Skill theme={theme} title={'HTML'}/>*/}
                    {/*<Skill theme={theme} title={'SCSS'}/>*/}
                </div>
            </div>

        </div>
    );
};



